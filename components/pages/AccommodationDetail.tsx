import React, { useState } from 'react';
import type { Accommodation } from '../data/accommodations';
import { CheckIcon, ArrowLeftIcon, ArrowRightIcon } from '../icons/Icons';
import type { Page } from '../../App';

interface AccommodationDetailProps {
  accommodation: Accommodation;
  navigateTo: (page: Page) => void;
}

const AccommodationDetail: React.FC<AccommodationDetailProps> = ({ accommodation, navigateTo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  
  const whatsappUrl = `https://wa.me/5571999999999?text=Olá!%20Tenho%20interesse%20na%20acomodação%20*${encodeURIComponent(accommodation.name)}*.%20Gostaria%20de%20saber%20mais%20sobre%20a%20disponibilidade.`;

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
          
          {/* Details */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="bg-stone-50 p-8 rounded-lg shadow-lg flex-grow">
                <div className="flex justify-between items-center mb-4 border-b border-stone-200 pb-4">
                    <p className="text-stone-500 text-sm">A partir de</p>
                    <p><span className="text-4xl font-bold text-emerald-600">R${accommodation.price}</span><span className="text-stone-500">/noite</span></p>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">{accommodation.details}</p>
                <h3 className="text-xl font-bold text-stone-700 mb-4">Comodidades Inclusas:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-stone-600">
                {accommodation.amenities.map((item) => (
                    <li key={item} className="flex items-center"><CheckIcon />{item}</li>
                ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-stone-200">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-emerald-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
                    Reservar via WhatsApp
                    </a>
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