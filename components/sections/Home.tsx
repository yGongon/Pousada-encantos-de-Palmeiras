
import React from 'react';

const Home: React.FC = () => {
  const whatsappUrl = "https://wa.me/5575991973368?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva.";

  return (
    <section id="home" className="relative h-[90vh] md:h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img 
        src="https://i.ibb.co/4RNKd4gF/IMG-2397.jpg" 
        alt="Fachada iluminada da Pousada Encantos de Palmeiras na Chapada Diamantina" 
        className="absolute inset-0 w-full h-full object-cover" 
        // Fix: Use camelCase for fetchPriority as suggested by the TypeScript error
        fetchPriority="high"
        loading="eager"
      />
      <div className="relative z-20 text-center p-6 mt-16 md:mt-0">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight shadow-text px-4" style={{ fontFamily: 'Montserrat' }}>
          Conforto e Natureza na <br className="hidden md:block" /> Chapada Diamantina
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto shadow-text font-medium">
          Sua casa no coração de Palmeiras. O ponto de partida ideal para explorar as maravilhas da Bahia com hospitalidade e paz.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-emerald-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-emerald-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl"
          >
            Reservar Agora
          </a>
          <a 
            href="#acomodacoes" 
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-white/20 transition-all duration-300"
          >
            Ver Quartos
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Home;
