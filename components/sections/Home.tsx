import React from 'react';

const Home: React.FC = () => {
  const whatsappUrl = "https://wa.me/5571999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva.";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="https://picsum.photos/1920/1080?image=1043" alt="Paisagem da Chapada Diamantina" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight shadow-text" style={{ fontFamily: 'Montserrat' }}>
          Conforto e Natureza na <br /> Chapada Diamantina
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto shadow-text">
          Sua casa longe de casa, onde a hospitalidade encontra a beleza exuberante de Palmeiras.
        </p>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-emerald-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Reserve agora pelo WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Home;
