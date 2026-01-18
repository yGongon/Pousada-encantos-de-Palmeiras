import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Accommodations from './components/sections/Accommodations';
import Gallery from './components/sections/Gallery';
import Location from './components/sections/Location';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';
import AccommodationDetail from './components/pages/AccommodationDetail';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import { accommodations } from './components/data/accommodations';

export type Page = 'home' | 'sobre' | 'acomodacoes' | 'galeria' | 'contato' | 'accommodation-detail' | 'privacidade';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedAccommodationSlug, setSelectedAccommodationSlug] = useState<string | null>(null);

  // Dynamic Page Titles for SEO
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Home | Pousada Encantos de Palmeiras',
      sobre: 'Nossa História | Pousada Encantos de Palmeiras',
      acomodacoes: 'Acomodações e Preços | Pousada Encantos de Palmeiras',
      galeria: 'Galeria de Fotos | Pousada Encantos de Palmeiras',
      contato: 'Contato e Reservas | Pousada Encantos de Palmeiras',
      privacidade: 'Políticas de Privacidade | Pousada Encantos de Palmeiras',
    };

    if (activePage === 'accommodation-detail' && selectedAccommodationSlug) {
      const acc = accommodations.find(a => a.slug === selectedAccommodationSlug);
      document.title = `${acc?.name || 'Acomodação'} | Pousada Encantos de Palmeiras`;
    } else {
      document.title = titles[activePage] || 'Pousada Encantos de Palmeiras';
    }
  }, [activePage, selectedAccommodationSlug]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: Page, slug: string | null = null) => {
    setActivePage(page);
    setSelectedAccommodationSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Home navigateTo={navigateTo} />
            <Accommodations featuredOnly={true} navigateTo={navigateTo} />
            <Location />
          </>
        );
      case 'sobre':
        return <About />;
      case 'acomodacoes':
        return <Accommodations featuredOnly={false} navigateTo={navigateTo} />;
      case 'galeria':
        return <Gallery />;
      case 'contato':
        return <Contact />;
      case 'privacidade':
        return <PrivacyPolicy navigateTo={navigateTo} />;
      case 'accommodation-detail': {
        const accommodation = accommodations.find(a => a.slug === selectedAccommodationSlug);
        if (accommodation) {
          return <AccommodationDetail accommodation={accommodation} navigateTo={navigateTo} />;
        }
        return <Accommodations featuredOnly={false} navigateTo={navigateTo} />;
      }
      default:
        return (
            <>
              <Home navigateTo={navigateTo} />
              <Accommodations featuredOnly={true} navigateTo={navigateTo} />
              <Location />
            </>
          );
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={`bg-[#F8F5F2] text-stone-700 min-h-screen transition-opacity duration-700 ease-in ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header activePage={activePage} navigateTo={navigateTo} />
        <main id="main-content">
          {renderContent()}
        </main>
        <Footer navigateTo={navigateTo} />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;