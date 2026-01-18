import React, { useState, useMemo, useEffect } from 'react';
import type { Accommodation } from '../data/accommodations';
import { CheckIcon, ArrowLeftIcon, ArrowRightIcon } from '../icons/Icons';
import type { Page } from '../../App';

interface AccommodationDetailProps {
  accommodation: Accommodation;
  navigateTo: (page: Page) => void;
}

const AccommodationDetail: React.FC<AccommodationDetailProps> = ({ accommodation, navigateTo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleImageChange = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 200);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? accommodation.images.length - 1 : currentIndex - 1;
    handleImageChange(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === accommodation.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    handleImageChange(newIndex);
  };

  const minCheckOutDate = useMemo(() => {
    if (!checkIn) return '';
    const [year, month, day] = checkIn.split('-').map(Number);
    const checkInDate = new Date(Date.UTC(year, month - 1, day));
    checkInDate.setUTCDate(checkInDate.getUTCDate() + 1);
    return checkInDate.toISOString().split('T')[0];
  }, [checkIn]);

  const { numberOfNights, totalPrice, pixTotal } = useMemo(() => {
    if (!checkIn || !checkOut) {
      return { numberOfNights: 0, totalPrice: 0, pixTotal: 0 };
    }
    const startDate = new Date(checkIn + 'T00:00:00Z');
    const endDate = new Date(checkOut + 'T00:00:00Z');
    
    if (endDate <= startDate) {
      return { numberOfNights: 0, totalPrice: 0, pixTotal: 0 };
    }
    
    const diffTime = endDate.getTime() - startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const baseTotal = diffDays * accommodation.price;
    
    return {
      numberOfNights: diffDays,
      totalPrice: baseTotal,
      pixTotal: baseTotal * 0.94, // 6% discount
    };
  }, [checkIn, checkOut, accommodation.price]);

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
        .image-enter {
          opacity: 0;
          transform: scale(1.02);
        }
        .image-enter-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 300ms ease-out, transform 300ms ease-out;
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="mb-8">
            <button 
                onClick={() => navigateTo('acomodacoes')} 
                className="flex items-center text-stone-500 hover:text-amber-600 transition-all group"
            >
                <ArrowLeftIcon />
                <span className="ml-2 group-hover:translate-x-1 transition-transform">Voltar para todas as acomodações</span>
            </button>
        </div>

        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>
                {accommodation.name}
            </h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Enhanced Gallery */}
          <div className="lg:w-3/5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone-200 aspect-video group">
              <img 
                key={currentIndex}
                src={accommodation.images[currentIndex]} 
                alt={`Foto ${currentIndex + 1} de ${accommodation.name}`} 
                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={goToPrevious} 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
              >
                <ArrowLeftIcon />
              </button>
              <button 
                onClick={goToNext} 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
              >
                <ArrowRightIcon />
              </button>

              {/* Counter Tag */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                {currentIndex + 1} / {accommodation.images.length}
              </div>
            </div>

            {/* Thumbnails Navigation */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {accommodation.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => handleImageChange(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentIndex === idx 
                    ? 'ring-4 ring-amber-500 scale-105 z-10' 
                    : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Details & Reservation */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="bg-stone-50 p-8 rounded-2xl shadow-lg border border-stone-100 flex-grow flex flex-col">
              
              <div className="mb-8">
                {/* Preço em destaque na box */}
                <div className="mb-8 pb-6 border-b border-stone-200">
                  <h3 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: 'Montserrat' }}>Valor da Diária</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-emerald-600">R$ {accommodation.price.toFixed(2).replace('.', ',')}</span>
                    <span className="text-stone-500 font-medium">/noite</span>
                  </div>
                  {/* Nota sobre PIX */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Bônus PIX</span>
                    <span className="text-emerald-600 text-sm font-bold">6% de desconto no pagamento via PIX</span>
                  </div>
                  {/* Observação de cama extra no box de reserva */}
                  {accommodation.observation && (
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
                      <p className="text-amber-800 text-xs font-bold leading-tight">
                        📌 {accommodation.observation}
                      </p>
                    </div>
                  )}
                </div>

                <h4 className="text-lg font-bold text-stone-800 mb-6" style={{ fontFamily: 'Montserrat' }}>Sua Reserva</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1">
                    <label htmlFor="checkin" className="block text-xs font-bold uppercase text-stone-500 tracking-wider">Check-in</label>
                    <input 
                      type="date" 
                      id="checkin" 
                      value={checkIn}
                      min={today}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        if (checkOut && e.target.value >= checkOut) {
                          setCheckOut('');
                        }
                      }}
                      className="mt-1 block w-full px-4 py-3 bg-white border border-stone-200 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="checkout" className="block text-xs font-bold uppercase text-stone-500 tracking-wider">Check-out</label>
                    <input 
                      type="date" 
                      id="checkout" 
                      value={checkOut}
                      min={minCheckOutDate}
                      disabled={!checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="mt-1 block w-full px-4 py-3 bg-white border border-stone-200 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none disabled:bg-stone-100 disabled:text-stone-400"
                    />
                  </div>
                </div>

                {numberOfNights > 0 && (
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-5 rounded-2xl animate-fade-in mt-6 space-y-3">
                    <p className="font-bold flex justify-between items-center text-sm">
                      <span>Período Selecionado:</span>
                      <span className="text-emerald-600 bg-white px-3 py-1 rounded-full text-xs shadow-sm">{numberOfNights} {numberOfNights > 1 ? 'noites' : 'noite'}</span>
                    </p>
                    
                    <div className="flex justify-between items-end pt-3 border-t border-emerald-100">
                      <div className="flex flex-col">
                        <span className="text-xs opacity-70">Total (Cartão/Outros)</span>
                      </div>
                      <span className="text-lg font-bold opacity-80">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <div className="flex justify-between items-end pt-1">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-emerald-600">Total no PIX (-6%)</span>
                      </div>
                      <span className="text-2xl font-black text-emerald-700">R$ {pixTotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                   <a 
                      href={numberOfNights > 0 ? whatsappUrl : '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`inline-block w-full text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg ${
                          numberOfNights > 0 
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-[1.02] shadow-emerald-200' 
                          : 'bg-stone-300 text-stone-500 cursor-not-allowed shadow-none'
                      }`}
                      onClick={(e) => numberOfNights <= 0 && e.preventDefault()}
                    >
                      {numberOfNights > 0 ? 'Confirmar via WhatsApp' : 'Selecione as datas'}
                    </a>
                </div>
              </div>
              
              <div className="border-t border-stone-200 pt-8 mt-auto">
                <h3 className="text-lg font-bold text-stone-700 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mr-3 text-sm">✦</span>
                  Comodidades Inclusas
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-stone-600">
                {accommodation.amenities.map((item) => (
                    <li key={item} className="flex items-center text-sm"><CheckIcon />{item}</li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full Details Section */}
        <div className="mt-20 pt-16 border-t border-stone-100">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12 text-center" style={{ fontFamily: 'Montserrat' }}>
                O que esperar da sua estadia
            </h2>
            <div className="max-w-3xl mx-auto text-stone-600 text-lg leading-relaxed space-y-8 italic text-center">
                {accommodation.fullDetails.map((paragraph, index) => (
                    <p key={index} className="relative px-8">
                      {index === 0 && <span className="absolute -top-4 -left-2 text-6xl text-stone-200 font-serif">"</span>}
                      {paragraph}
                      {index === accommodation.fullDetails.length - 1 && <span className="absolute -bottom-10 -right-2 text-6xl text-stone-200 font-serif">"</span>}
                    </p>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationDetail;