import React from 'react';
import { WhatsAppIcon } from './icons/Icons';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/5575991973368?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20reservas.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-110 z-50"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;