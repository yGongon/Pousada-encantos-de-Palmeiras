import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>Nossa Localização Privilegiada</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-lg">No coração de Palmeiras, o ponto de partida para as melhores aventuras da Chapada.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/4">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.016177112917!2d-41.57668142493134!3d-12.515086587759903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769e1a49c04869d%3A0x51644425f0e576de!2sPousada%20Encantos%20de%20Palmeiras!5e0!3m2!1spt-BR!2sbr!4v1762002628818!5m2!1spt-BR!2sb"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização da Pousada"
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Como Chegar</h3>
              <p className="text-stone-600 leading-relaxed">
                Estamos estrategicamente localizados no centro de Palmeiras, facilitando o acesso a pé a restaurantes, farmácias e comércio local. 
              </p>
              <div className="mt-4 p-4 bg-amber-50 rounded-xl text-amber-800 text-sm font-medium">
                ✈️ Aeroporto mais próximo: Lençóis (LEC) - 50km.
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Aventuras Próximas</h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-center"><span className="mr-2">🏔️</span> Morro do Pai Inácio</li>
                <li className="flex items-center"><span className="mr-2">🌿</span> Vale do Capão</li>
                <li className="flex items-center"><span className="mr-2">💧</span> Cachoeira da Fumaça</li>
                <li className="flex items-center"><span className="mr-2">🏊</span> Rio Mucugezinho</li>
                <li className="flex items-center"><span className="mr-2">🔦</span> Grutas da Região</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;