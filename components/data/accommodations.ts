export interface Accommodation {
  name: string;
  slug: string;
  description: string;
  details: string;
  fullDetails: string[];
  amenities: string[];
  images: string[];
  price: string;
  featured?: boolean;
}

export const accommodations: Accommodation[] = [
  {
    name: 'Suíte Chapada',
    slug: 'suite-chapada',
    description: 'Espaço amplo e aconchegante com vista para as montanhas, ideal para casais.',
    details: 'Nossa Suíte Chapada é o refúgio perfeito para casais que buscam conforto e uma vista deslumbrante. Com uma varanda privativa, você pode desfrutar do nascer do sol sobre as montanhas. O quarto é equipado com uma cama queen-size, ar condicionado silencioso, frigobar e um banheiro espaçoso.',
    fullDetails: [
      'Ao entrar na Suíte Chapada, você é imediatamente recebido por uma atmosfera de serenidade e elegância. A decoração combina elementos rústicos da Chapada com um toque moderno, criando um ambiente acolhedor e sofisticado. A paleta de cores terrosas e a iluminação suave convidam ao relaxamento.',
      'A varanda privativa é, sem dúvida, o coração da suíte. Equipada com uma confortável cadeira de balanço, é o lugar perfeito para ler um livro, meditar ou simplesmente admirar a paisagem em constante mudança da Chapada Diamantina. Pela manhã, o canto dos pássaros compõe a trilha sonora perfeita para começar o dia.'
    ],
    amenities: ['Cama Queen', 'Ar Condicionado', 'Frigobar', 'Varanda Privativa', 'Wi-Fi de Alta Velocidade', 'Smart TV'],
    images: [
        'https://picsum.photos/800/600?image=1078',
        'https://picsum.photos/800/600?image=1079',
        'https://picsum.photos/800/600?image=1080'
    ],
    price: '350,00',
    featured: true,
  },
  {
    name: 'Chalé do Vale',
    slug: 'chale-do-vale',
    description: 'Um refúgio rústico e charmoso, perfeito para quem busca privacidade e contato com a natureza.',
    details: 'Para uma experiência mais imersiva, o Chalé do Vale oferece total privacidade. Construído com materiais locais, possui uma cozinha compacta, uma varanda com rede e está cercado pela vegetação nativa, garantindo paz e sossego.',
    fullDetails: [
      'O Chalé do Vale foi projetado para aqueles que desejam uma conexão genuína com a natureza sem abrir mão do conforto. Sua localização isolada dentro da propriedade garante silêncio e privacidade absolutos. O design rústico, com madeira de demolição e pedras locais, integra a construção à paisagem.',
      'A cozinha compacta está equipada com o essencial para preparar pequenas refeições, dando a você a liberdade de seguir seu próprio ritmo. A varanda, com sua rede convidativa, é o local ideal para relaxar após um dia de trilhas, ouvindo os sons da natureza e sentindo a brisa fresca que desce do vale.'
    ],
    amenities: ['Cama de Casal', 'Ventilador de Teto', 'Cozinha Compacta', 'Rede na Varanda', 'Área de Estar', 'Entrada Privativa'],
    images: [
        'https://picsum.photos/800/600?image=659',
        'https://picsum.photos/800/600?image=660',
        'https://picsum.photos/800/600?image=661'
    ],
    price: '420,00',
    featured: true,
  },
  {
    name: 'Quarto Girassol',
    slug: 'quarto-girassol',
    description: 'Confortável e bem iluminado, uma opção excelente para viajantes solo ou amigos.',
    details: 'O Quarto Girassol é a escolha ideal para amigos ou viajantes individuais. Com duas camas de solteiro confortáveis, ar condicionado e Wi-Fi gratuito, oferece tudo o que você precisa para uma estadia agradável e econômica.',
    fullDetails: [
      'Inspirado na energia vibrante dos girassóis que florescem na região, este quarto é um espaço alegre e funcional. As grandes janelas permitem a entrada de muita luz natural durante o dia, criando um ambiente leve e revigorante. É a base perfeita para aventureiros que passam o dia explorando a Chapada e buscam um lugar confortável para recarregar as energias.',
      'Além das camas confortáveis, o quarto conta com uma pequena mesa de trabalho, ideal para quem precisa organizar fotos da viagem ou planejar o roteiro do dia seguinte. O banheiro privativo é moderno e funcional, garantindo praticidade e conforto.'
    ],
    amenities: ['2 Camas de Solteiro', 'Ar Condicionado', 'Wi-Fi Grátis', 'Banheiro Privativo', 'Mesa de Trabalho'],
    images: [
        'https://picsum.photos/800/600?image=20',
        'https://picsum.photos/800/600?image=21',
        'https://picsum.photos/800/600?image=22'
    ],
    price: '280,00',
  },
   {
    name: 'Bangalô Orquídea',
    slug: 'bangalo-orquidea',
    description: 'Exclusividade e luxo em meio à natureza, com banheira de hidromassagem.',
    details: 'O auge do conforto na Encantos de Palmeiras. O Bangalô Orquídea conta com uma cama king-size, uma banheira de hidromassagem com vista para a mata e uma decoração refinada, proporcionando uma experiência de luxo e relaxamento.',
    fullDetails: [
      'O Bangalô Orquídea é a nossa joia, criado para proporcionar uma experiência de hospedagem verdadeiramente memorável e exclusiva. Ideal para luas de mel, comemorações especiais ou simplesmente para quem busca o máximo em relaxamento, cada detalhe foi pensado para encantar.',
      'A banheira de hidromassagem, estrategicamente posicionada ao lado de uma janela panorâmica, permite que você relaxe em imersão total com a natureza ao redor. O quarto dispõe ainda de uma pequena adega climatizada, uma cafeteira de cápsulas e amenities de banho premium. É um convite para se desconectar do mundo e se reconectar consigo mesmo.'
    ],
    amenities: ['Cama King', 'Ar Condicionado', 'Hidromassagem', 'Vista Panorâmica', 'Cafeteira Expressa', 'Frigobar Premium'],
    images: [
        'https://picsum.photos/800/600?image=835',
        'https://picsum.photos/800/600?image=836',
        'https://picsum.photos/800/600?image=837'
    ],
    price: '550,00',
  },
];