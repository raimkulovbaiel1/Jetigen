import React from 'react';
import HeroSection from './HeroSection';
import CampInfo from './CampInfo';
import Gallery from './Gallery';
import ContactSection from './ContactSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'places' | 'booking') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main style={{ minHeight: "calc(100vh - 70px)" }}>
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "6px 20px" }}
      >
        <HeroSection onNavigate={onNavigate} />
        <CampInfo />
        <Gallery />
        <ContactSection />
      </div>
    </main>
  );
};

export default HomePage;