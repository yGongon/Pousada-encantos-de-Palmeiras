import React, { useState, useEffect } from 'react';
// FIX: Corrected the import path for the Accommodation type. It is defined in './data/accommodations'.
import type { Accommodation } from './data/accommodations';
import { CheckIcon, CloseIcon, ArrowLeftIcon, ArrowRightIcon } from './icons/Icons';

interface AccommodationModalProps {
  accommodation: Accommodation;
  onClose: () => void;
}

const AccommodationModal: React.FC<AccommodationModalProps> = ({ accommodation, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    // Add event listener for escape key
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

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
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        @keyframes slide-in {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
      `}</style>
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-1/2 relative">
          <img src={accommodation.images[currentIndex]} alt={`Foto ${currentIndex + 1} de ${accommodation.name}`} className="w-full h-64 md:h-full object-cover"/>
          <button onClick={goToPrevious} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors">
            <ArrowLeftIcon />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors">
            <ArrowRightIcon />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {accommodation.images.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}></div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-stone-800 mb-2" style={{ fontFamily: 'Montserrat' }}>
              {accommodation.name}
            </h2>
            <button onClick={onClose} className="text-stone-500 hover:text-stone-800 transition-colors -mt-2 -mr-2">
              <CloseIcon />
            </button>
          </div>
          <div className="flex justify-between items-center mb-4 border-b border-stone-200 pb-4">
             <p className="text-stone-500 text-sm">A partir de</p>
             <p><span className="text-3xl font-bold text-emerald-600">R${accommodation.price}</span><span className="text-stone-500">/noite</span></p>
          </div>
          <div className="flex-grow">
            <p className="text-stone-600 mb-6 leading-relaxed">{accommodation.details}</p>
            <h3 className="text-lg font-bold text-stone-700 mb-3">Comodidades:</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-stone-600 text-sm">
              {accommodation.amenities.map((item) => (
                <li key={item} className="flex items-center"><CheckIcon />{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-200">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
              Reservar via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationModal;