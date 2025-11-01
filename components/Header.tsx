import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './icons/Icons';
import type { Page } from '../App';

interface HeaderProps {
  activePage: Page;
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5571999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva.";

  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const getLinkClassName = (page: Page) => {
    return `hover:text-amber-600 transition-colors cursor-pointer ${activePage === page ? 'text-amber-600 font-bold' : ''}`;
  };

  const NavLinks: React.FC = () => (
    <>
      <a onClick={() => handleNavClick('home')} className={getLinkClassName('home')}>Home</a>
      <a onClick={() => handleNavClick('sobre')} className={getLinkClassName('sobre')}>Sobre</a>
      <a onClick={() => handleNavClick('acomodacoes')} className={getLinkClassName('acomodacoes')}>Acomodações</a>
      <a onClick={() => handleNavClick('galeria')} className={getLinkClassName('galeria')}>Galeria</a>
      <a onClick={() => handleNavClick('contato')} className={getLinkClassName('contato')}>Contato</a>
    </>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a onClick={() => handleNavClick('home')} className="text-2xl font-bold text-stone-800 cursor-pointer" style={{ fontFamily: 'Montserrat' }}>
          Encantos de Palmeiras
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>
        <div className="hidden md:block">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white font-bold py-2 px-4 rounded-full hover:bg-emerald-700 transition-all duration-300">
            Reserve Agora
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-800">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 p-6">
            <NavLinks />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-full hover:bg-emerald-700 transition-all duration-300 mt-4">
              Reserve Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;