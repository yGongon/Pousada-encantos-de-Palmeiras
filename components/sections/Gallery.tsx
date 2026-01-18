import React, { useState } from 'react';

const galleryImages = [
  { id: 1, url: 'https://i.ibb.co/4RNKd4gF/IMG-2397.jpg', alt: 'Fachada Pousada Encantos de Palmeiras' },
  { id: 2, url: 'https://i.ibb.co/wNyFC0p9/IMG-2346.jpg', alt: 'Área externa e jardim' },
  { id: 3, url: 'https://i.ibb.co/BKN8kkt6/IMG-2348.jpg', alt: 'Detalhes da pousada' },
  { id: 4, url: 'https://i.ibb.co/Pv9Wn7BL/IMG-2349.jpg', alt: 'Ambiente acolhedor' },
  { id: 5, url: 'https://i.ibb.co/mFTrgq7x/IMG-2351.jpg', alt: 'Caminho para os quartos' },
  { id: 6, url: 'https://i.ibb.co/pB7g4WFT/IMG-2353.jpg', alt: 'Pousada Encantos' },
  { id: 7, url: 'https://i.ibb.co/cKGQnyc4/IMG-2360.jpg', alt: 'Beleza natural' },
  { id: 8, url: 'https://i.ibb.co/BHXYvq0q/IMG-2361.jpg', alt: 'Pousada Palmeiras' },
  { id: 9, url: 'https://i.ibb.co/wZSCzncq/IMG-2363.jpg', alt: 'Área de convivência' },
  { id: 10, url: 'https://i.ibb.co/rfzSGvGB/IMG-2364.jpg', alt: 'Arquitetura regional' },
  { id: 11, url: 'https://i.ibb.co/h1TvJ9bK/IMG-2365.jpg', alt: 'Descanso na Chapada' },
  { id: 12, url: 'https://i.ibb.co/TqPNmkJJ/IMG-2366.jpg', alt: 'Tranquilidade e paz' },
  { id: 13, url: 'https://i.ibb.co/QjkKh7cd/IMG-2374.jpg', alt: 'Quartos confortáveis' },
  { id: 14, url: 'https://i.ibb.co/Cpd4RFS6/IMG-2376.jpg', alt: 'Decoração rústica' },
  { id: 15, url: 'https://i.ibb.co/tT1BztJR/IMG-2379.jpg', alt: 'Sua estadia na Chapada' },
  { id: 16, url: 'https://i.ibb.co/s88XD41/IMG-2341.jpg', alt: 'Encantos de Palmeiras' },
  { id: 17, url: 'https://i.ibb.co/yFs6xf6d/IMG-2344.jpg', alt: 'Natureza exuberante' },
  { id: 18, url: 'https://i.ibb.co/B53Jnr1C/IMG-2352.jpg', alt: 'Hospitalidade baiana' },
  { id: 19, url: 'https://i.ibb.co/SXSvc6qt/IMG-2354.jpg', alt: 'Jardim da pousada' },
  { id: 20, url: 'https://i.ibb.co/wNwYMbmq/IMG-2359.jpg', alt: 'Pôr do sol na pousada' },
  { id: 21, url: 'https://i.ibb.co/0Rsq9pLZ/IMG-2367.jpg', alt: 'Cantinho especial' },
  { id: 22, url: 'https://i.ibb.co/RkwhKL5b/IMG-2369.jpg', alt: 'Ambiente relaxante' },
  { id: 23, url: 'https://i.ibb.co/LzfVGTLD/IMG-2370.jpg', alt: 'Decoração com flores' },
  { id: 24, url: 'https://i.ibb.co/tMgq9qRq/IMG-2375.jpg', alt: 'Suítes charmosas' },
  { id: 25, url: 'https://i.ibb.co/dsH7fWP3/IMG-2377.jpg', alt: 'Experiência única' },
];

const Lightbox: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] transition-opacity duration-300 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative p-2 max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Visualização ampliada" className="max-w-full max-h-[90vh] mx-auto rounded-lg shadow-2xl object-contain" />
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
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
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-square bg-stone-100"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-stone-800 px-4 py-2 rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ampliar imagem
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  );
};

export default Gallery;