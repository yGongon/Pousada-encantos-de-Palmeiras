import React, { useState, useMemo } from 'react';
import type { Accommodation } from '../data/accommodations';
import { CheckIcon, ArrowLeftIcon, ArrowRightIcon } from '../icons/Icons';
import type { Page } from '../../App';

interface AccommodationDetailProps {
  accommodation: Accommodation;
  navigateTo: (page: Page) => void;
}

const AccommodationDetail: React.FC<AccommodationDetailProps> = ({ accommodation, navigateTo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const minCheckOutDate = useMemo(() => {
    if (!checkIn) return '';
    const [year, month, day] = checkIn.split('-').map(Number);
    const checkInDate = new Date(Date.UTC(year, month - 1, day));
    checkInDate.setUTCDate(checkInDate.getUTCDate() + 1);
    return checkInDate.toISOString().split('T')[0];
  }, [checkIn]);

  const { numberOfNights, totalPrice } = useMemo(() => {
    if (!checkIn || !checkOut) {
      return { numberOfNights: 0, totalPrice: 0 };
    }
    const startDate = new Date(checkIn + 'T00:00:00Z');
    const endDate = new Date(checkOut + 'T00:00:00Z');
    
    if (endDate <= startDate) {
      return { numberOfNights: 0, totalPrice: 0 };
    }
    
    const diffTime = endDate.getTime() - startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return {
      numberOfNights: diffDays,
      totalPrice: diffDays * accommodation.price,
    };
  }, [checkIn, checkOut, accommodation.price]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? accommodation.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === accommodation.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const formattedCheckIn = checkIn ? new Date(checkIn + 'T00:00:00Z').toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : '';
  const formattedCheckOut = checkOut ? new Date(checkOut + 'T00:00:00Z').toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : '';

  const whatsappUrl = `https://wa.me/5575991973368?text=Olá!%20Gostaria%20de%20saber%20a%20disponibilidade%20da%20acomodação%20*${encodeURIComponent(accommodation.name)}*%20para%20o%20período%20de%20${formattedCheckIn}%20a%20${formattedCheckOut}%20(${numberOfNights}%20noites).`;

  return (
    <section className="py-20 bg-white animate-fade-in">
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="mb-8">
            <button 
                onClick={() => navigateTo('acomodacoes')} 
                className="flex items-center text-stone-600 hover:text-amber-600 transition-colors group"
            >
                <ArrowLeftIcon />
                <span className="ml-2 group-hover:underline">Voltar para todas as acomodações</span>
            </button>
        </div>

        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>
                {accommodation.name}
            </h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Gallery */}
          <div className="lg:w-3/5 relative rounded-lg overflow-hidden shadow-xl">
            <img src={accommodation.images[currentIndex]} alt={`Foto ${currentIndex + 1} de ${accommodation.name}`} className="w-full h-full object-cover min-h-[400px]"/>
            <button onClick={goToPrevious} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors">
              <ArrowLeftIcon />
            </button>
            <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors">
              <ArrowRightIcon />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {accommodation.images.map((_, index) => (
                  <div key={index} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}></div>
              ))}
            </div>
          </div>
          
          {/* Details & Reservation */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="bg-stone-50 p-8 rounded-lg shadow-lg flex-grow flex flex-col">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>Sua Reserva</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="checkin" className="block text-sm font-medium text-stone-600">Check-in</label>
                    <input 
                      type="date" 
                      id="checkin" 
                      value={checkIn}
                      min={today}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        // Reset checkout if new checkin is after checkout
                        if (checkOut && e.target.value >= checkOut) {
                          setCheckOut('');
                        }
                      }}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout" className="block text-sm font-medium text-stone-600">Check-out</label>
                    <input 
                      type="date" 
                      id="checkout" 
                      value={checkOut}
                      min={minCheckOutDate}
                      disabled={!checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 disabled:bg-stone-200"
                    />
                  </div>
                </div>

                {numberOfNights > 0 && (
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 p-4 rounded-r-lg animate-fade-in">
                    <p className="font-bold">Resumo da sua estadia:</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      <li>{numberOfNights} {numberOfNights > 1 ? 'noites' : 'noite'}</li>
                      <li>Total: <span className="font-bold">R$ {totalPrice.toFixed(2).replace('.', ',')}</span></li>
                    </ul>
                  </div>
                )}

                <div className="mt-6">
                   <a 
                      href={numberOfNights > 0 ? whatsappUrl : '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`inline-block w-full text-center bg-emerald-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform ${
                          numberOfNights > 0 
                          ? 'hover:bg-emerald-700 hover:scale-105' 
                          : 'bg-stone-400 cursor-not-allowed opacity-70'
                      }`}
                      onClick={(e) => numberOfNights <= 0 && e.preventDefault()}
                      aria-disabled={numberOfNights <= 0}
                    >
                      Consultar Disponibilidade
                    </a>
                </div>
              </div>
              
              <div className="border-t border-stone-200 pt-8">
                <p className="text-stone-600 mb-6 leading-relaxed">{accommodation.details}</p>
                <h3 className="text-xl font-bold text-stone-700 mb-4">Comodidades Inclusas:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-stone-600">
                {accommodation.amenities.map((item) => (
                    <li key={item} className="flex items-center"><CheckIcon />{item}</li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full Details Section */}
        <div className="mt-20 pt-12 border-t border-stone-200">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center" style={{ fontFamily: 'Montserrat' }}>
                Explore a Experiência
            </h2>
            <div className="max-w-4xl mx-auto text-stone-700 text-lg leading-relaxed space-y-6">
                {accommodation.fullDetails.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationDetail;