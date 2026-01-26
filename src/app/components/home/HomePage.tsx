import React from 'react';
import HeroSection from './HeroSections';

interface HomePageProps {
  onNavigate: (page: 'home' | 'places' | 'booking') => void;
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <main style={{ minHeight: "calc(100vh - 70px)" }}>
      <div
        className="container"
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "6px 20px" }}
      >
        <HeroSection />
      </div>
    </main>
  );
};

export default HomePage;