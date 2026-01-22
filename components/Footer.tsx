import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons/Icons';
import type { Page } from '../App';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>Pousada Encantos de Palmeiras</h3>
            <p className="text-stone-300">Seu refúgio de paz no coração da Chapada Diamantina.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>Contato</h3>
            <ul className="space-y-2 text-stone-300">
              <li><a href="mailto:pousadaencantosdepalmeiras@gmail.com" className="hover:text-amber-400">pousadaencantosdepalmeiras@gmail.com</a></li>
              <li><a href="tel:+5575991973368" className="hover:text-amber-400">+55 (75) 99197-3368</a></li>
              <li>Palmeiras, Chapada Diamantina, Bahia, Brasil</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors"><FacebookIcon /></a>
              <a href="https://www.instagram.com/pousadaencantosdepalmeiras/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-400 transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors"><TwitterIcon /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm gap-4">
          <p>&copy; {currentYear} Pousada Encantos de Palmeiras. Todos os direitos reservados.</p>
          <button 
            onClick={() => navigateTo('privacidade')}
            className="hover:text-white transition-colors underline decoration-stone-600 underline-offset-4"
          >
            Políticas de Privacidade
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;