import React, { useState } from 'react';

const galleryImages = [
  { id: 1, url: 'https://i.ibb.co/4RNKd4gF/IMG-2397.jpg', alt: 'Fachada da Pousada Encantos de Palmeiras iluminada à noite' },
  { id: 2, url: 'https://i.ibb.co/wNyFC0p9/IMG-2346.jpg', alt: 'Área externa ajardinada com decoração rústica na Chapada Diamantina' },
  { id: 3, url: 'https://i.ibb.co/BKN8kkt6/IMG-2348.jpg', alt: 'Detalhes da decoração artesanal da pousada' },
  { id: 4, url: 'https://i.ibb.co/Pv9Wn7BL/IMG-2349.jpg', alt: 'Ambiente de convivência acolhedor para hóspedes' },
  { id: 5, url: 'https://i.ibb.co/mFTrgq7x/IMG-2351.jpg', alt: 'Caminho florido para as suítes da Pousada Encantos' },
  { id: 6, url: 'https://i.ibb.co/pB7g4WFT/IMG-2353.jpg', alt: 'Pousada Encantos de Palmeiras - Vista frontal' },
  { id: 7, url: 'https://i.ibb.co/cKGQnyc4/IMG-2360.jpg', alt: 'Jardim tropical exuberante na área comum' },
  { id: 8, url: 'https://i.ibb.co/BHXYvq0q/IMG-2361.jpg', alt: 'Detalhe da arquitetura regional em Palmeiras, Bahia' },
  { id: 9, url: 'https://i.ibb.co/wZSCzncq/IMG-2363.jpg', alt: 'Área de café da manhã e convivência social' },
  { id: 10, url: 'https://i.ibb.co/rfzSGvGB/IMG-2364.jpg', alt: 'Arquitetura preservada no centro de Palmeiras' },
  { id: 11, url: 'https://i.ibb.co/h1TvJ9bK/IMG-2365.jpg', alt: 'Redário para descanso após trilhas na Chapada' },
  { id: 12, url: 'https://i.ibb.co/TqPNmkJJ/IMG-2366.jpg', alt: 'Ambiente de paz e silêncio absoluto' },
  { id: 13, url: 'https://i.ibb.co/QjkKh7cd/IMG-2374.jpg', alt: 'Quartos confortáveis com enxoval de alta qualidade' },
  { id: 14, url: 'https://i.ibb.co/Cpd4RFS6/IMG-2376.jpg', alt: 'Mobiliário de madeira nobre e decoração regional' },
  { id: 15, url: 'https://i.ibb.co/tT1BztJR/IMG-2379.jpg', alt: 'Sua melhor experiência de hospedagem na Chapada Diamantina' },
  { id: 16, url: 'https://i.ibb.co/s88XD41/IMG-2341.jpg', alt: 'Encantos de Palmeiras - Detalhe externo' },
  { id: 17, url: 'https://i.ibb.co/yFs6xf6d/IMG-2344.jpg', alt: 'Vista da natureza ao redor da pousada' },
  { id: 18, url: 'https://i.ibb.co/B53Jnr1C/IMG-2352.jpg', alt: 'Hospitalidade e carinho no atendimento' },
  { id: 19, url: 'https://i.ibb.co/SXSvc6qt/IMG-2354.jpg', alt: 'Flores e cores no jardim da pousada' },
  { id: 20, url: 'https://i.ibb.co/wNwYMbmq/IMG-2359.jpg', alt: 'Luz natural invadindo os ambientes' },
  { id: 21, url: 'https://i.ibb.co/0Rsq9pLZ/IMG-2367.jpg', alt: 'Cantinho especial para leitura' },
  { id: 22, url: 'https://i.ibb.co/RkwhKL5b/IMG-2369.jpg', alt: 'Decoração temática da Chapada Diamantina' },
  { id: 23, url: 'https://i.ibb.co/LzfVGTLD/IMG-2370.jpg', alt: 'Detalhes que encantam cada hóspede' },
  { id: 24, url: 'https://i.ibb.co/tMgq9qRq/IMG-2375.jpg', alt: 'Suítes arejadas e higienizadas' },
  { id: 25, url: 'https://i.ibb.co/dsH7fWP3/IMG-2377.jpg', alt: 'Conforto rústico no centro de Palmeiras' },
];

const Lightbox: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] transition-opacity duration-300 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative p-2 max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Visualização ampliada da foto da pousada" className="max-w-full max-h-[90vh] mx-auto rounded-lg shadow-2xl object-contain" />
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
          aria-label="Fechar visualização de imagem"
        >
          &times;
        </button>
      </div>
    </div>
  );
};


const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>Galeria de Encantos</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore cada detalhe da nossa pousada e sinta a atmosfera de tranquilidade que espera por você na Chapada Diamantina.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <button 
              key={image.id} 
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-square bg-stone-100 border-0 p-0 w-full"
              onClick={() => setSelectedImage(image.url)}
              aria-label={`Ampliar imagem: ${image.alt}`}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width="400"
                height="400"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-stone-800 px-4 py-2 rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ampliar imagem
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedImage && <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  );
};

export default Gallery;