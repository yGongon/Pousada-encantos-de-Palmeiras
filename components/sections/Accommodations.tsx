import React from 'react';
import type { Page } from '../../App';
import { CheckIcon } from '../icons/Icons';
import { accommodations, Accommodation } from '../data/accommodations';


const AccommodationCard: React.FC<{ accommodation: Accommodation; onDetailsClick: (slug: string) => void; }> = ({ accommodation, onDetailsClick }) => {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-all duration-500 border border-stone-100 h-full">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={accommodation.images[0]} 
          alt={`Suíte ${accommodation.name} - Hospedagem em Palmeiras Chapada Diamantina`} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1 rounded-full text-stone-800 font-bold text-sm shadow-md">
          A partir de R${accommodation.price}/noite
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <header>
          <h3 className="text-3xl font-bold text-stone-800 mb-3" style={{ fontFamily: 'Montserrat' }}>{accommodation.name}</h3>
        </header>
        <p className="text-stone-600 mb-6 flex-grow leading-relaxed line-clamp-3">
          {accommodation.description}
        </p>
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase text-stone-400 tracking-widest mb-4">Comodidades principais:</h4>
          <ul className="grid grid-cols-2 gap-2 text-stone-600 text-sm font-medium">
            {accommodation.amenities.slice(0, 4).map((item) => (
              <li key={item} className="flex items-center"><CheckIcon />{item}</li>
            ))}
          </ul>
        </div>
        <div className="pt-6 border-t border-stone-100 mt-auto">
          <button 
            onClick={() => onDetailsClick(accommodation.slug)} 
            className="inline-block w-full text-center bg-amber-500 text-white font-bold py-4 px-6 rounded-xl hover:bg-amber-600 transition-all duration-300 shadow-lg shadow-amber-100 active:scale-95"
            aria-label={`Ver mais detalhes sobre o ${accommodation.name}`}
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </article>
  );
};

interface AccommodationsProps {
  featuredOnly: boolean;
  navigateTo: (page: Page, slug?: string) => void;
}

const Accommodations: React.FC<AccommodationsProps> = ({ featuredOnly, navigateTo }) => {
  const accommodationsToDisplay = featuredOnly
    ? accommodations.filter(acc => acc.featured)
    : accommodations;

  return (
    <section id="acomodacoes" className="py-24 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>
            {featuredOnly ? "Hospedagens em Destaque" : "Nossas Acomodações em Palmeiras"}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {featuredOnly 
              ? "Confira os quartos preferidos dos nossos hóspedes para relaxar na Chapada Diamantina." 
              : "Suítes confortáveis, equipadas com o essencial para seu descanso após um dia de trilhas e cachoeiras."}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {accommodationsToDisplay.map((acc) => (
            <AccommodationCard key={acc.slug} accommodation={acc} onDetailsClick={(slug) => navigateTo('accommodation-detail', slug)} />
          ))}
        </div>
        {featuredOnly && (
            <div className="text-center mt-16">
                <button
                    onClick={() => navigateTo('acomodacoes')}
                    className="bg-stone-800 text-white font-bold py-4 px-12 rounded-xl hover:bg-stone-900 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl"
                >
                    Conhecer Todos os Quartos
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default Accommodations;