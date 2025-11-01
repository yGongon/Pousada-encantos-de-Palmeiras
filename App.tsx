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
import { accommodations } from './components/data/accommodations';

export type Page = 'home' | 'sobre' | 'acomodacoes' | 'galeria' | 'contato' | 'accommodation-detail';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedAccommodationSlug, setSelectedAccommodationSlug] = useState<string | null>(null);


  useEffect(() => {
    // Simulate a loading delay for a better user experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
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
            <Home />
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
      case 'accommodation-detail': {
        const accommodation = accommodations.find(a => a.slug === selectedAccommodationSlug);
        if (accommodation) {
          return <AccommodationDetail accommodation={accommodation} navigateTo={navigateTo} />;
        }
        // Fallback to the main accommodations page if slug is not found
        return <Accommodations featuredOnly={false} navigateTo={navigateTo} />;
      }
      default:
        // Fallback to 'home' view
        return (
            <>
              <Home />
              <Accommodations featuredOnly={true} navigateTo={navigateTo} />
              <Location />
            </>
          );
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={`bg-[#F8F5F2] text-stone-700 transition-opacity duration-700 ease-in ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header activePage={activePage} navigateTo={navigateTo} />
        <main>
          {renderContent()}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;