import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>Nossa Localização Privilegiada</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">No coração de Palmeiras, o ponto de partida para as melhores aventuras da Chapada.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
              {/* 
                INSTRUÇÕES PARA ATUALIZAR O MAPA:
                1. Acesse o Google Maps e pesquise o endereço exato da sua pousada.
                2. Clique em "Compartilhar" e depois na aba "Incorporar um mapa".
                3. Copie o código HTML.
                4. Substitua o link abaixo (que está dentro do atributo src="...") pelo link que você copiou.
                O link atual é apenas um exemplo de um local no centro de Palmeiras.
              */}
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
          <div className="lg:w-1/3 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Como Chegar</h3>
              <p className="text-stone-600">
                Estamos localizados no centro de Palmeiras, com fácil acesso a pé a restaurantes e lojas. O aeroporto mais próximo é o de Lençóis (LEC), a cerca de 50km de distância.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Pontos Turísticos Próximos</h3>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>Morro do Pai Inácio</li>
                <li>Vale do Capão</li>
                <li>Cachoeira da Fumaça</li>
                <li>Rios Mucugezinho e Poço do Diabo</li>
                <li>Grutas da Lapa Doce e Pratinha</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;