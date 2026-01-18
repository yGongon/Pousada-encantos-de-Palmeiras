import React, { useState, useEffect } from 'react';
import type { Accommodation } from './data/accommodations';
import { CheckIcon, CloseIcon, ArrowLeftIcon, ArrowRightIcon } from './icons/Icons';

interface AccommodationModalProps {
  accommodation: Accommodation;
  onClose: () => void;
}

const AccommodationModal: React.FC<AccommodationModalProps> = ({ accommodation, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

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

  const whatsappUrl = `https://wa.me/5575991973368?text=Olá!%20Tenho%20interesse%20na%20acomodação%20*${encodeURIComponent(accommodation.name)}*.%20Gostaria%20de%20saber%20mais%20sobre%20a%20disponibilidade.`;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
      `}</style>
      
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gallery Section */}
        <div className="md:w-3/5 relative bg-stone-900 flex flex-col">
          <div className="relative flex-grow overflow-hidden">
            <img 
              src={accommodation.images[currentIndex]} 
              alt={accommodation.name} 
              className={`w-full h-full object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            />
            
            <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all">
              <ArrowLeftIcon />
            </button>
            <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all">
              <ArrowRightIcon />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="p-4 bg-stone-900/50 flex gap-2 overflow-x-auto justify-center">
            {accommodation.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => handleImageChange(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${currentIndex === idx ? 'ring-2 ring-amber-500 scale-110' : 'opacity-40'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="md:w-2/5 p-8 flex flex-col overflow-y-auto bg-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>{accommodation.name}</h2>
              <p className="text-emerald-600 font-bold mt-1">R${accommodation.price}/noite</p>
            </div>
            <button onClick={onClose} className="text-stone-400 hover:text-stone-800 transition-colors p-2 bg-stone-100 rounded-full">
              <CloseIcon />
            </button>
          </div>

          <div className="flex-grow space-y-6">
            <p className="text-stone-600 leading-relaxed text-sm">{accommodation.details}</p>
            
            <div>
              <h3 className="text-stone-800 font-bold mb-3 text-sm uppercase tracking-wider">O que este quarto oferece:</h3>
              <ul className="grid grid-cols-2 gap-3 text-xs text-stone-500 font-medium">
                {accommodation.amenities.map((item) => (
                  <li key={item} className="flex items-center"><CheckIcon />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
              Verificar Disponibilidade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationModal;