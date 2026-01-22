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
  observation?: string;
}

const universalAmenities = [
  'Ar condicionado',
  'Frigobar',
  'Secador de cabelo',
  'Wi-fi',
  'Shampoo',
  'Condicionador',
  'Sabonete',
  'Banheiro privativo',
  'TV - Canais via satélite',
  'Piscina',
  'Estacionamento',
  'Serviço de frigobar',
  'Mesa de trabalho',
  'Café da manhã',
  'Serviço de limpeza'
];

export const accommodations: Accommodation[] = [
  {
    name: 'Suíte Master 1 - Duplo',
    slug: 'quarto-1',
    description: 'Espaço acolhedor e bem decorado.',
    observation: 'Possibilidade de acrescentar cama extra.',
    details: 'A Suíte Master 1 é um refúgio de paz, planejado para oferecer o máximo de conforto com um toque de rusticidade elegante.',
    fullDetails: [
      'Ambiente cuidadosamente higienizado e decorado com detalhes em madeira.',
      'Configuração flexível com possibilidade de inclusão de cama extra sob consulta.',
      'Localização estratégica dentro da pousada garantindo silêncio e privacidade.'
    ],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/2Y1rXNb7/Quarto-1.jpg',
        'https://i.ibb.co/CKd33Zmc/Quarto-1-1.jpg',
        'https://i.ibb.co/XfZP6bsd/Quarto-1-2.jpg',
        'https://i.ibb.co/PGh8zc9m/Quarto-1-3.jpg'
    ],
    price: 350,
    featured: true,
  },
  {
    name: 'Suíte Master 2 - Triplo',
    slug: 'quarto-2',
    description: 'Suíte charmosa com excelente iluminação.',
    observation: 'Possibilidade de acrescentar cama extra.',
    details: 'A Suíte Master 2 destaca-se pelo seu amplo espaço e conforto térmico, ideal para descanso profundo.',
    fullDetails: [
      'Equipado com enxoval de alta qualidade para noites relaxantes.',
      'Amplo espaço interno permitindo a adição de uma cama extra confortavelmente.',
      'Decoração que remete aos encantos naturais da região de Palmeiras.'
    ],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/fz1j05PG/Quarto-2-2.jpg',
        'https://i.ibb.co/MmCbtDf/Quarto-2-5.jpg',
        'https://i.ibb.co/RTDkgmR1/Quarto-2-4.jpg',
        'https://i.ibb.co/7JG5K4LG/Quarto-2-3.jpg',
        'https://i.ibb.co/Mxx2ZpNp/Quarto-2-1.jpg',
        'https://i.ibb.co/20WFCgP4/Quarto-2.jpg'
    ],
    price: 350,
    featured: true,
  },
  {
    name: 'Suíte Master 6 - Duplo',
    slug: 'quarto-6',
    description: 'Ambiente rústico sofisticado.',
    observation: 'Possibilidade de acrescentar cama extra.',
    details: 'Uma das nossas opções mais procuradas pelo equilíbrio entre simplicidade e bem-estar.',
    fullDetails: [
      'Banheiro privativo moderno e bem equipado.',
      'Permite a configuração de cama extra para maior versatilidade da estadia.',
      'Perfeito para casais que apreciam o silêncio e o contato visual com elementos naturais.'
    ],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/rf6wLB9D/Quarto-6-2.jpg',
        'https://i.ibb.co/X6FyZ0X/Quarto-6-4.jpg',
        'https://i.ibb.co/VW5J85fV/Quarto-6-5.jpg',
        'https://i.ibb.co/Mybr7PWB/Quarto-6-3.jpg',
        'https://i.ibb.co/LDTjHzFF/Quarto-6-1.jpg',
        'https://i.ibb.co/2JS1GCq/Quarto-6.jpg'
    ],
    price: 350,
    featured: true,
  },
  {
    name: 'Suíte Conforto 9 - Duplo',
    slug: 'quarto-9',
    description: 'Simplicidade e conforto.',
    observation: 'Possibilidade de acrescentar cama extra.',
    details: 'Ideal para quem busca uma base confortável e econômica para explorar a Chapada.',
    fullDetails: [
      'Cama confortável com enxoval limpo.', 
      'Ambiente com espaço para inclusão de cama extra.',
      'Ambiente silencioso favorecendo o descanso.'
    ],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/G3kts7h4/Quarto-9.jpg',
        'https://i.ibb.co/93mm99ty/Quarto-9-1.jpg',
        'https://i.ibb.co/CK8jgxR1/Quarto-9-2.jpg'
    ],
    price: 300,
  },
  {
    name: 'Suíte Conforto 10 - Duplo',
    slug: 'quarto-10',
    description: 'Compacto e funcional, excelente custo-benefício para viajantes solo ou casais práticos.',
    details: 'Uma suíte direto ao ponto: conforto, limpeza e boa noite de sono garantida.',
    fullDetails: [
      'Ótima ventilação e iluminação.',
      'Localizado próximo à área de café da manhã para sua conveniência.'
    ],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/Q7c5rQZm/Quarto-10.jpg',
        'https://i.ibb.co/Kj97Gbxq/Quarto-10-1.jpg',
        'https://i.ibb.co/5XQsXWs2/Quarto-10-2.jpg'
    ],
    price: 300,
  },
  {
    name: 'Suíte Conforto 11 - Triplo',
    slug: 'quarto-11',
    description: 'Acomodação prática para quem valoriza a boa localização e conforto essencial.',
    details: 'A Suíte Conforto 11 oferece um ambiente clean e arejado, ideal para seu descanso.',
    fullDetails: ['Ambiente renovado e bem iluminado.', 'Proximidade com as áreas comuns da pousada.'],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/Rkx9WNGw/Quarto-11.jpg',
        'https://i.ibb.co/9mnNBt5Y/Quarto-11-2.jpg',
        'https://i.ibb.co/pBsRd0b1/Quarto-11-1.jpg'
    ],
    price: 300,
  },
  {
    name: 'Suíte Conforto 12 - Duplo',
    slug: 'quarto-12',
    description: 'Suíte versátil, perfeita para acomodar com conforto casais ou amigos.',
    details: 'Configurações de camas flexíveis para sua necessidade em um ambiente espaçoso.',
    fullDetails: ['Espaçoso e bem ventilado.', 'Ideal para quem busca praticidade sem abrir mão do conforto.'],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/HTymf38m/Quarto-12-1.jpg',
        'https://i.ibb.co/s9ryzL1H/Quarto-12-2.jpg',
        'https://i.ibb.co/vvXrnkX2/Quarto-12-3.jpg',
        'https://i.ibb.co/mr1NNR6d/Quarto-12-4.jpg'
    ],
    price: 300,
  },
  {
    name: 'Suíte Conforto 13 - Duplo',
    slug: 'quarto-13',
    description: 'Um refúgio tranquilo com decoração minimalista e acolhedora.',
    details: 'Decoração rústica que favorece o descanso mental e físico.',
    fullDetails: ['Silencioso e privativo.', 'Equipado com o necessário para uma estadia agradável.'],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/pvNJ6sqV/Quarto-13-1.jpg',
        'https://i.ibb.co/ynwc14gH/Quarto-13-2.jpg',
        'https://i.ibb.co/GfhBhZnr/Quarto-13-3.jpg',
        'https://i.ibb.co/PGPSK2dq/Quarto-13-4.jpg'
    ],
    price: 300,
  },
  {
    name: 'Suíte Conforto 14 - Duplo Twin',
    slug: 'quarto-14',
    description: 'Conforto e praticidade com duas camas de solteiro em ambiente arejado.',
    details: 'Ideal para amigos ou familiares que buscam uma estadia confortável com camas individuais.',
    fullDetails: [
      'Quarto equipado com duas camas de solteiro de alta qualidade.',
      'Decoração leve que proporciona um ambiente relaxante.',
      'Excelente ventilação natural.'
    ],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/spjjQdXn/Quarto-14-3.jpg',
        'https://i.ibb.co/ynf3nJWW/Quarto-14-1.jpg',
        'https://i.ibb.co/1Jj4LR83/Quarto-14-2.jpg'
    ],
    price: 300,
  },
  {
    name: 'Suíte Conforto 15 - Duplo',
    slug: 'quarto-15',
    description: 'Suíte charmosa perfeita para casais que buscam tranquilidade.',
    details: 'Ambiente planejado para oferecer privacidade e bem-estar durante sua visita à Chapada.',
    fullDetails: [
      'Cama de casal confortável com enxoval premium.',
      'Localização privilegiada dentro da pousada.',
      'Espaço funcional e bem iluminado.'
    ],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/HD61WjFb/Quarto-15-1.jpg',
        'https://i.ibb.co/xSFdjdcy/Quarto-15-2.jpg',
        'https://i.ibb.co/8LGZyGNv/Quarto-15-3.jpg',
        'https://i.ibb.co/PzMdGp63/Quarto-15-4.jpg'
    ],
    price: 300,
  },
  {
    name: 'Suíte Conforto 16 - Triplo',
    slug: 'quarto-16',
    description: 'Suíte ampla com varanda e vista relaxante, perfeita para estadias prolongadas.',
    details: 'A Suíte Conforto 16 oferece mais espaço e uma sensação de liberdade única na pousada.',
    fullDetails: [
      'Área externa privativa para curtir o final de tarde.',
      'Mobiliário pensado para o máximo aproveitamento do espaço.'
    ],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/XkyrhNJH/Quarto-16-1.jpg',
        'https://i.ibb.co/ns2RVbFM/Quarto-16-2.jpg',
        'https://i.ibb.co/x8Xxg4dC/Quarto-16-3.jpg',
        'https://i.ibb.co/Lh1LQtdP/Quarto-16-4.jpg',
        'https://i.ibb.co/Kpp92L6t/Quarto-16-5.jpg'
    ],
    price: 300,
    featured: true,
  },
  {
    name: 'Suíte Conforto 17 - Triplo',
    slug: 'quarto-17',
    description: 'Conforto moderno com toque rústico, ideal para casais ou pequenos grupos.',
    details: 'Perfeito para quem não abre mão de tecnologia e bem-estar.',
    fullDetails: ['Ambiente charmoso com iluminação planejada.', 'Smart TV para seus momentos de lazer.'],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/nMB283g1/Quarto-17-1.jpg',
        'https://i.ibb.co/Gf16V2JJ/Quarto-17-2.jpg',
        'https://i.ibb.co/SDMBcCPQ/Quarto-17-3.jpg'
    ],
    price: 300,
  },
  {
    name: 'Suíte Conforto 18 - Duplo Twin',
    slug: 'quarto-18',
    description: 'Nossa suíte master com camas separadas (twin) e muito espaço.',
    details: 'O topo do conforto na Encantos de Palmeiras com configuração de camas twin.',
    fullDetails: ['A melhor e mais espaçosa suíte da pousada.', 'Configuração ideal para amigos ou familiares com camas de solteiro de alta qualidade.'],
    amenities: universalAmenities,
    images: [
        'https://i.ibb.co/Z76Vw3v/Quarto-18-1.jpg',
        'https://i.ibb.co/7t67zPbR/Quarto-18-2.jpg',
        'https://i.ibb.co/1tVQWGwJ/Quarto-18-3.jpg',
        'https://i.ibb.co/wrKzbLDp/Quarto-18-4.jpg'
    ],
    price: 300,
    featured: true,
  }
];