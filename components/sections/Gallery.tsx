import React, { useState } from 'react';

const images = [
  { id: 1, url: 'https://picsum.photos/800/600?image=1015', alt: 'Cachoeira na Chapada Diamantina' },
  { id: 2, url: 'https://picsum.photos/800/600?image=1016', alt: 'Vista da piscina da pousada' },
  { id: 3, url: 'https://picsum.photos/800/600?image=1018', alt: 'Café da manhã regional' },
  { id: 4, url: 'https://picsum.photos/800/600?image=1025', alt: 'Vista panorâmica do Morro do Pai Inácio' },
  { id: 5, url: 'https://picsum.photos/800/600?image=1040', alt: 'Área de descanso com redes' },
  { id: 6, url: 'https://picsum.photos/800/600?image=1041', alt: 'Trilha na natureza' },
];

const Lightbox: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Visualização ampliada" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold"
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
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>Galeria de Encantos</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Um pouco da beleza que espera por você.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="group overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  );
};

export default Gallery;
