import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>
            Nossas Raízes
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-stone-500 mt-6 max-w-2xl mx-auto text-lg italic">
            "Uma história que atravessa séculos, do brilho dos diamantes ao aconchego do nosso palacete."
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative">
              <img 
                src="https://i.ibb.co/2YpJM0wk/Whats-App-Image-2026-01-18-at-12-07-25.jpg" 
                alt="Palacete dos Alcântaras - Sede da Pousada Encantos de Palmeiras" 
                className="rounded-3xl shadow-2xl object-cover w-full h-[600px]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <p className="text-stone-800 font-bold text-lg leading-snug">
                  Originalmente o imponente Palacete dos Alcântaras, hoje um refúgio de hospitalidade.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-amber-600 font-black tracking-widest uppercase text-sm">Desde 1844</span>
              <h3 className="text-3xl font-bold text-stone-800 mt-2 mb-6" style={{ fontFamily: 'Montserrat' }}>
                Onde a História se Encontra com o Café
              </h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                Tudo começou em 1844, quando Casuzinha do Prado descobriu os primeiros diamantes no leito do Rio Combucas. A febre do garimpo trouxe gente de todos os cantos, mas Palmeiras guardava um destino diferente de suas vizinhas.
              </p>
              <p className="text-stone-600 leading-relaxed text-lg mt-4">
                Enquanto cidades como Lençóis focavam exclusivamente na mineração, nossa terra florescia também com a agricultura. O plantio de café se espalhou por todo o município, trazendo prosperidade e raízes profundas para quem aqui habitava.
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 relative">
              <div className="absolute -top-4 -left-4 text-5xl text-amber-200 font-serif">“</div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">O Legado de Seu Aprígio</h3>
              <p className="text-stone-600 leading-relaxed italic">
                Foi nesse cenário de apogeu que a família Alcântara chegou ao Capão Grande. Anos mais tarde, Seu Aprígio Alcântara mudou-se para a sede de Palmeiras e ergueu o que conhecemos como o Palacete dos Alcântaras — uma construção de beleza singular que atravessou gerações.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">De Palacete a Encanto</h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                Hoje, o histórico palacete vive seu capítulo mais acolhedor. Transformado na <strong>Pousada Encantos de Palmeiras</strong>, preservamos a arquitetura original e a alma daquele belo palacete para oferecer a você uma experiência autêntica na Chapada Diamantina, com o carinho e a paz que Seu Aprígio idealizou ao erguer estas paredes.
              </p>
            </div>
            
            <div className="flex gap-4 pt-4">
               <div className="flex-1 border-l-4 border-amber-500 pl-4">
                  <span className="block text-2xl font-bold text-stone-800">180+</span>
                  <span className="text-sm text-stone-500 uppercase font-bold tracking-tighter">Anos de História</span>
               </div>
               <div className="flex-1 border-l-4 border-emerald-500 pl-4">
                  <span className="block text-2xl font-bold text-stone-800">100%</span>
                  <span className="text-sm text-stone-500 uppercase font-bold tracking-tighter">Hospitalidade Baiana</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;