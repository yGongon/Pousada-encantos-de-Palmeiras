import React from 'react';
import { WhatsAppIcon, InstagramIcon, CheckIcon } from '../icons/Icons';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/5575991973368?text=Olá!%20Vi%20o%20site%20da%20Pousada%20Encantos%20de%20Palmeiras%20e%20gostaria%20de%20mais%20informações.";
  const instagramUrl = "https://www.instagram.com/pousadaencantosdepalmeiras/";

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>Canais de Atendimento</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Escolha a forma mais conveniente para falar conosco. Estamos prontos para ajudar você a planejar sua viagem para a Chapada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card WhatsApp */}
          <div className="bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <WhatsAppIcon />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">WhatsApp</h3>
            <p className="text-stone-600 mb-8 flex-grow">Atendimento rápido para reservas, dúvidas sobre datas e orçamentos personalizados.</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100 text-center"
            >
              Falar agora
            </a>
          </div>

          {/* Card Instagram */}
          <div className="bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <InstagramIcon />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Instagram</h3>
            <p className="text-stone-600 mb-8 flex-grow">Acompanhe nosso dia a dia, veja fotos exclusivas dos quartos e novidades da pousada.</p>
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-100 text-center"
            >
              Seguir Pousada
            </a>
          </div>

          {/* Card Contato Direto */}
          <div className="bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Outros Canais</h3>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">E-mail</span>
                <a href="mailto:contato@encantosdepalmeiras.com.br" className="text-stone-700 font-medium hover:text-amber-600 transition-colors">contato@encantosdepalmeiras.com.br</a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Telefone</span>
                <a href="tel:+5575991973368" className="text-stone-700 font-medium hover:text-amber-600 transition-colors">+55 (75) 99197-3368</a>
              </div>
            </div>
            <div className="w-full p-4 bg-white rounded-xl border border-stone-100 text-stone-500 text-sm font-medium italic">
              "Sempre um prazer atender você."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;