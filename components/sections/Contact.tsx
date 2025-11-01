import React from 'react';

const Contact: React.FC = () => {
    const whatsappUrl = "https://wa.me/5571999999999?text=Olá!%20Gostaria%20de%20entrar%20em%20contato.";

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800" style={{ fontFamily: 'Montserrat' }}>Fale Conosco</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Estamos ansiosos para te receber! Entre em contato e tire suas dúvidas.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2 bg-stone-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Obrigado pelo contato! (Funcionalidade de demonstração)'); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">Nome</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">E-mail</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">Mensagem</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-stone-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-stone-900 transition-colors duration-300">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 space-y-8">
             <div className="bg-stone-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Contato Direto</h3>
                <p className="text-stone-600 mb-2"><strong>Telefone:</strong> <a href="tel:+5571999999999" className="hover:text-amber-600">+55 (71) 99999-9999</a></p>
                <p className="text-stone-600 mb-6"><strong>E-mail:</strong> <a href="mailto:contato@encantosdepalmeiras.com.br" className="hover:text-amber-600">contato@encantosdepalmeiras.com.br</a></p>
                 <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block w-full text-center bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                >
                    Fale conosco pelo WhatsApp
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
