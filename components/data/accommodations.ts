export interface Accommodation {
  name: string;
  slug: string;
  description: string;
  details: string;
  fullDetails: string[];
  amenities: string[];
  images: string[];
  price: number;
  featured?: boolean;
}

export const accommodations: Accommodation[] = [
  {
    name: 'Quarto 1',
    slug: 'quarto-1',
    description: 'Espaço acolhedor e bem decorado, ideal para casais que buscam tranquilidade no centro de Palmeiras.',
    details: 'O Quarto 1 é um refúgio de paz, planejado para oferecer o máximo de conforto com um toque de rusticidade elegante.',
    fullDetails: [
      'Ambiente cuidadosamente higienizado e decorado com detalhes em madeira.',
      'Localização estratégica dentro da pousada garantindo silêncio e privacidade.'
    ],
    amenities: ['Cama de Casal', 'Ar Condicionado', 'Frigobar', 'Wi-Fi', 'Smart TV', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/2Y1rXNb7/Quarto-1.jpg',
        'https://i.ibb.co/CKd33Zmc/Quarto-1-1.jpg',
        'https://i.ibb.co/XfZP6bsd/Quarto-1-2.jpg',
        'https://i.ibb.co/PGh8zc9m/Quarto-1-3.jpg'
    ],
    price: 320,
    featured: true,
  },
  {
    name: 'Quarto 2',
    slug: 'quarto-2',
    description: 'Suíte charmosa com excelente iluminação natural e decoração temática da Chapada.',
    details: 'O Quarto 2 destaca-se pelo seu amplo espaço e conforto térmico, ideal para descanso profundo.',
    fullDetails: [
      'Equipado com enxoval de alta qualidade para noites relaxantes.',
      'Decoração que remete aos encantos naturais da região de Palmeiras.'
    ],
    amenities: ['Cama de Casal', 'Ar Condicionado', 'Frigobar', 'Wi-Fi', 'Smart TV', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/fz1j05PG/Quarto-2-2.jpg',
        'https://i.ibb.co/MmCbtDf/Quarto-2-5.jpg',
        'https://i.ibb.co/RTDkgmR1/Quarto-2-4.jpg',
        'https://i.ibb.co/7JG5K4LG/Quarto-2-3.jpg',
        'https://i.ibb.co/Mxx2ZpNp/Quarto-2-1.jpg',
        'https://i.ibb.co/20WFCgP4/Quarto-2.jpg'
    ],
    price: 300,
    featured: true,
  },
  {
    name: 'Quarto 6',
    slug: 'quarto-6',
    description: 'Ambiente rústico sofisticado com detalhes em madeira nobre e muito conforto.',
    details: 'Uma das nossas opções mais procuradas pelo equilíbrio entre simplicidade e bem-estar.',
    fullDetails: [
      'Banheiro privativo moderno e bem equipado.',
      'Perfeito para casais que apreciam o silêncio e o contato visual com elementos naturais.'
    ],
    amenities: ['Cama de Casal', 'Ventilador', 'Frigobar', 'Wi-Fi', 'Smart TV', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/rf6wLB9D/Quarto-6-2.jpg',
        'https://i.ibb.co/X6FyZ0X/Quarto-6-4.jpg',
        'https://i.ibb.co/VW5J85fV/Quarto-6-5.jpg',
        'https://i.ibb.co/Mybr7PWB/Quarto-6-3.jpg',
        'https://i.ibb.co/LDTjHzFF/Quarto-6-1.jpg',
        'https://i.ibb.co/2JS1GCq/Quarto-6.jpg'
    ],
    price: 280,
    featured: true,
  },
  {
    name: 'Quarto 9',
    slug: 'quarto-9',
    description: 'Simplicidade e conforto em um ambiente tranquilo no coração de Palmeiras.',
    details: 'Ideal para quem busca uma base confortável e econômica para explorar a Chapada.',
    fullDetails: ['Cama confortável com enxoval limpo.', 'Ambiente silencioso favorecendo o descanso.'],
    amenities: ['Cama de Casal', 'Ventilador', 'Wi-Fi', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/G3kts7h4/Quarto-9.jpg',
        'https://i.ibb.co/93mm99ty/Quarto-9-1.jpg',
        'https://i.ibb.co/CK8jgxR1/Quarto-9-2.jpg'
    ],
    price: 240,
  },
  {
    name: 'Quarto 10',
    slug: 'quarto-10',
    description: 'Compacto e funcional, excelente custo-benefício para viajantes solo ou casais práticos.',
    details: 'Um quarto direto ao ponto: conforto, limpeza e boa noite de sono garantida.',
    fullDetails: [
      'Ótima ventilação e iluminação.',
      'Localizado próximo à área de café da manhã para sua conveniência.'
    ],
    amenities: ['Cama de Casal', 'Ar Condicionado', 'Wi-Fi', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/Q7c5rQZm/Quarto-10.jpg',
        'https://i.ibb.co/Kj97Gbxq/Quarto-10-1.jpg',
        'https://i.ibb.co/5XQsXWs2/Quarto-10-2.jpg'
    ],
    price: 250,
  },
  {
    name: 'Quarto 11',
    slug: 'quarto-11',
    description: 'Acomodação prática para quem valoriza a boa localização e conforto essencial.',
    details: 'O Quarto 11 oferece um ambiente clean e arejado, ideal para seu descanso.',
    fullDetails: ['Ambiente renovado e bem iluminado.', 'Proximidade com as áreas comuns da pousada.'],
    amenities: ['Cama de Casal', 'Ar Condicionado', 'Wi-Fi', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/Rkx9WNGw/Quarto-11.jpg',
        'https://i.ibb.co/9mnNBt5Y/Quarto-11-2.jpg',
        'https://i.ibb.co/pBsRd0b1/Quarto-11-1.jpg'
    ],
    price: 260,
  },
  {
    name: 'Quarto 12',
    slug: 'quarto-12',
    description: 'Suíte versátil, perfeita para acomodar com conforto casais ou amigos.',
    details: 'Configurações de camas flexíveis para sua necessidade em um ambiente espaçoso.',
    fullDetails: ['Espaçoso e bem ventilado.', 'Ideal para quem busca praticidade sem abrir mão do conforto.'],
    amenities: ['Cama de Casal', 'Solteiro Extra', 'Ar Condicionado', 'Frigobar', 'Wi-Fi', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/HTymf38m/Quarto-12-1.jpg',
        'https://i.ibb.co/s9ryzL1H/Quarto-12-2.jpg',
        'https://i.ibb.co/vvXrnkX2/Quarto-12-3.jpg',
        'https://i.ibb.co/mr1NNR6d/Quarto-12-4.jpg'
    ],
    price: 340,
  },
  {
    name: 'Quarto 13',
    slug: 'quarto-13',
    description: 'Um refúgio tranquilo com decoração minimalista e acolhedora.',
    details: 'Decoração rústica que favorece o descanso mental e físico.',
    fullDetails: ['Silencioso e privativo.', 'Equipado com o necessário para uma estadia agradável.'],
    amenities: ['Cama de Casal', 'Ar Condicionado', 'Frigobar', 'Wi-Fi', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/pvNJ6sqV/Quarto-13-1.jpg',
        'https://i.ibb.co/ynwc14gH/Quarto-13-2.jpg',
        'https://i.ibb.co/GfhBhZnr/Quarto-13-3.jpg',
        'https://i.ibb.co/PGPSK2dq/Quarto-13-4.jpg'
    ],
    price: 270,
  },
  {
    name: 'Quarto 16',
    slug: 'quarto-16',
    description: 'Suíte ampla com varanda e vista relaxante, perfeita para estadias prolongadas.',
    details: 'O Quarto 16 oferece mais espaço e uma sensação de liberdade única na pousada.',
    fullDetails: [
      'Área externa privativa para curtir o final de tarde.',
      'Mobiliário pensado para o máximo aproveitamento do espaço.'
    ],
    amenities: ['Cama de Casal', 'Ar Condicionado', 'Frigobar', 'Wi-Fi', 'Varanda', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/XkyrhNJH/Quarto-16-1.jpg',
        'https://i.ibb.co/ns2RVbFM/Quarto-16-2.jpg',
        'https://i.ibb.co/x8Xxg4dC/Quarto-16-3.jpg',
        'https://i.ibb.co/Lh1LQtdP/Quarto-16-4.jpg',
        'https://i.ibb.co/Kpp92L6t/Quarto-16-5.jpg'
    ],
    price: 350,
    featured: true,
  },
  {
    name: 'Quarto 17',
    slug: 'quarto-17',
    description: 'Conforto moderno com toque rústico, ideal para casais.',
    details: 'Perfeito para quem não abre mão de tecnologia e bem-estar.',
    fullDetails: ['Ambiente charmoso com iluminação planejada.', 'Smart TV para seus momentos de lazer.'],
    amenities: ['Cama de Casal', 'Ar Condicionado', 'Frigobar', 'Smart TV', 'Wi-Fi', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/nMB283g1/Quarto-17-1.jpg',
        'https://i.ibb.co/Gf16V2JJ/Quarto-17-2.jpg',
        'https://i.ibb.co/SDMBcCPQ/Quarto-17-3.jpg'
    ],
    price: 310,
  },
  {
    name: 'Quarto 18',
    slug: 'quarto-18',
    description: 'Nossa suíte master com detalhes exclusivos e muito espaço.',
    details: 'O topo do conforto na Encantos de Palmeiras.',
    fullDetails: ['A melhor e mais espaçosa suíte da pousada.', 'Decoração premium e enxoval diferenciado.'],
    amenities: ['Cama de Casal', 'Ar Condicionado', 'Frigobar', 'Smart TV', 'Wi-Fi', 'Banheiro Privativo'],
    images: [
        'https://i.ibb.co/Z76Vw3v/Quarto-18-1.jpg',
        'https://i.ibb.co/7t67zPbR/Quarto-18-2.jpg',
        'https://i.ibb.co/1tVQWGwJ/Quarto-18-3.jpg',
        'https://i.ibb.co/wrKzbLDp/Quarto-18-4.jpg'
    ],
    price: 400,
    featured: true,
  }
];