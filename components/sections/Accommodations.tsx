import React from 'react';
import type { Page } from '../../App';
import { CheckIcon } from '../icons/Icons';
import { accommodations, Accommodation } from '../data/accommodations';


const AccommodationCard: React.FC<{ accommodation: Accommodation; onDetailsClick: (slug: string) => void; }> = ({ accommodation, onDetailsClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <img src={accommodation.images[0]} alt={`Foto da ${accommodation.name}`} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-stone-800 mb-2" style={{ fontFamily: 'Montserrat' }}>{accommodation.name}</h3>
        <p className="text-stone-600 mb-4 flex-grow">{accommodation.description}</p>
        <div className="mb-6">
          <ul className="space-y-2 text-stone-600 mt-2 text-sm">
            {accommodation.amenities.slice(0, 2).map((item) => (
              <li key={item} className="flex items-center"><CheckIcon />{item}</li>
            ))}
             <li className="text-stone-500">e mais...</li>
          </ul>
        </div>
        <div className="border-t border-stone-200 pt-4 mt-auto">
          <div className="flex justify-between items-center mb-4">
             <p className="text-stone-500 text-sm">A partir de</p>
             <p><span className="text-3xl font-bold text-emerald-600">R${accommodation.price}</span><span className="text-stone-500">/noite</span></p>
          </div>
          <button onClick={() => onDetailsClick(accommodation.slug)} className="inline-block w-full text-center bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-300">
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
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
    <section id="acomodacoes" className="py-20 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>
            {featuredOnly ? "Nossos Quartos Mais Buscados" : "Nossas Acomodações"}
          </h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
            {featuredOnly 
              ? "Espaços pensados para seu máximo conforto e conexão com a natureza." 
              : "Conforto e charme para todos os gostos. Escolha o seu refúgio ideal."}
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${featuredOnly ? '' : 'lg:grid-cols-2'} gap-8`}>
          {accommodationsToDisplay.map((acc) => (
            <AccommodationCard key={acc.name} accommodation={acc} onDetailsClick={(slug) => navigateTo('accommodation-detail', slug)} />
          ))}
        </div>
        {featuredOnly && navigateTo && (
            <div className="text-center mt-12">
                <button
                    onClick={() => navigateTo('acomodacoes')}
                    className="bg-stone-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-stone-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Ver todas as acomodações
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default Accommodations;