import React from 'react';
import { ArrowLeftIcon } from '../icons/Icons';
import type { Page } from '../../App';

interface PrivacyPolicyProps {
  navigateTo: (page: Page) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ navigateTo }) => {
  return (
    <section className="py-20 bg-white min-h-screen animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center text-stone-500 hover:text-amber-600 transition-all mb-10 group"
        >
          <ArrowLeftIcon />
          <span className="ml-2 group-hover:translate-x-1 transition-transform">Voltar para a Home</span>
        </button>

        <h1 className="text-4xl font-bold text-stone-800 mb-8" style={{ fontFamily: 'Montserrat' }}>
          Políticas de Privacidade
        </h1>

        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-8">
          <p>
            Na <strong>Pousada Encantos de Palmeiras</strong>, a privacidade e a segurança dos dados de nossos hóspedes e visitantes são prioridades fundamentais. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>

          <section>
            <h2 className="text-2xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>1. Coleta de Informações</h2>
            <p>
              Coletamos informações pessoais que você nos fornece voluntariamente ao realizar uma reserva, entrar em contato via formulário ou WhatsApp, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Nome completo;</li>
              <li>Endereço de e-mail;</li>
              <li>Número de telefone/WhatsApp;</li>
              <li>Datas de estadia e preferências de acomodação.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>2. Uso das Informações</h2>
            <p>
              As informações coletadas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Processar e confirmar suas reservas;</li>
              <li>Responder a dúvidas e solicitações de atendimento;</li>
              <li>Melhorar a sua experiência em nosso site e na pousada;</li>
              <li>Cumprir obrigações legais de registro de hóspedes (FNRH).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>3. Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração. Seus dados de contato nunca são vendidos ou compartilhados com terceiros para fins de marketing sem o seu consentimento explícito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>4. Cookies</h2>
            <p>
              Nosso site utiliza cookies para entender o tráfego e melhorar a performance de navegação. Você pode desativar os cookies nas configurações do seu navegador a qualquer momento, embora isso possa afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Montserrat' }}>5. Seus Direitos</h2>
            <p>
              De acordo com a LGPD, você tem o direito de solicitar o acesso, a correção ou a exclusão definitiva de seus dados pessoais de nossa base de dados. Para exercer esses direitos, entre em contato conosco através do e-mail <strong>pousadaencantosdepalmeiras@gmail.com</strong>.
            </p>
          </section>

          <div className="pt-10 border-t border-stone-100 text-sm italic">
            <p>Última atualização: Outubro de 2023. Esta política pode ser atualizada periodicamente.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;