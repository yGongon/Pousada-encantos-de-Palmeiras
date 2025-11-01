import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>Nosso Refúgio</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Mais que uma pousada, somos um convite para se reconectar com a natureza e consigo mesmo.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/800/600?image=29" 
              alt="Detalhe da decoração da Pousada" 
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-stone-800">Nossa História</h3>
            <p className="text-stone-600 leading-relaxed">
              Nascida do sonho de compartilhar a magia da Chapada Diamantina, a Pousada Encantos de Palmeiras foi criada para ser um oásis de tranquilidade. Cada detalhe foi pensado para oferecer uma experiência autêntica, combinando conforto rústico com a hospitalidade que só a Bahia tem.
            </p>
            <h3 className="text-2xl font-bold text-stone-800">Missão e Valores</h3>
            <p className="text-stone-600 leading-relaxed">
              Nossa missão é proporcionar momentos inesquecíveis, valorizando a cultura local, promovendo a sustentabilidade e garantindo que cada hóspede se sinta parte da nossa família. Acreditamos no poder de um sorriso, na força da natureza e na alegria de receber bem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
