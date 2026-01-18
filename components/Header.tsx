import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './icons/Icons';
import type { Page } from '../App';

interface HeaderProps {
  activePage: Page;
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5575991973368?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva.";

  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const getLinkClassName = (page: Page) => {
    return `hover:text-amber-600 transition-colors cursor-pointer ${activePage === page ? 'text-amber-600 font-bold' : ''}`;
  };

  const NavLinks: React.FC = () => (
    <>
      <button onClick={() => handleNavClick('home')} className={getLinkClassName('home')} aria-current={activePage === 'home' ? 'page' : undefined}>Home</button>
      <button onClick={() => handleNavClick('sobre')} className={getLinkClassName('sobre')} aria-current={activePage === 'sobre' ? 'page' : undefined}>Sobre</button>
      <button onClick={() => handleNavClick('acomodacoes')} className={getLinkClassName('acomodacoes')} aria-current={activePage === 'acomodacoes' ? 'page' : undefined}>Acomodações</button>
      <button onClick={() => handleNavClick('galeria')} className={getLinkClassName('galeria')} aria-current={activePage === 'galeria' ? 'page' : undefined}>Galeria</button>
      <button onClick={() => handleNavClick('contato')} className={getLinkClassName('contato')} aria-current={activePage === 'contato' ? 'page' : undefined}>Contato</button>
    </>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => handleNavClick('home')} 
          className="text-2xl font-bold text-stone-800 cursor-pointer" 
          style={{ fontFamily: 'Montserrat' }}
          aria-label="Voltar para a página inicial"
        >
          Encantos de Palmeiras
        </button>
        <nav className="hidden md:flex items-center space-x-6" aria-label="Navegação principal">
          <NavLinks />
        </nav>
        <div className="hidden md:block">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-emerald-600 text-white font-bold py-2 px-4 rounded-full hover:bg-emerald-700 transition-all duration-300"
            title="Reservar quarto pelo WhatsApp"
          >
            Reserve Agora
          </a>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-stone-800 p-2"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <nav className="flex flex-col items-center space-y-4 p-6" aria-label="Navegação mobile">
            <NavLinks />
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-full hover:bg-emerald-700 transition-all duration-300 mt-4"
              title="Reservar quarto pelo WhatsApp"
            >
              Reserve Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;