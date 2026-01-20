import React from 'react';

interface HeroSectionProps {
  onNavigate: (page: 'home' | 'places' | 'booking') => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 0",
        background: `
          linear-gradient(135deg, rgba(45, 90, 39, 0.9) 0%, rgba(34, 139, 34, 0.8) 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        borderRadius: "20px",
        marginBottom: "60px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.1,
        }}
      ></div>
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          position: "relative",
          zIndex: 2,
        }}
      >
        Добро пожаловать в лагерь Жетиген!
      </h1>
      <p
        style={{
          fontSize: "20px",
          color: "white",
          maxWidth: "600px",
          margin: "0 auto 30px",
          lineHeight: "1.6",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          position: "relative",
          zIndex: 2,
        }}
      >
        Уютный горный лагерь для активного отдыха. Здесь вы найдете покой,
        чистый воздух и возможность насладиться природой вдали от городской суеты.
      </p>
      <button
        onClick={() => onNavigate('booking')}
        style={{
          display: "inline-block",
          padding: "18px 36px",
          background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
          color: "white",
          textDecoration: "none",
          borderRadius: "50px",
          fontSize: "18px",
          fontWeight: "600",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
          position: "relative",
          zIndex: 2,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(76, 175, 80, 0.4)";
          e.currentTarget.style.background = "linear-gradient(135deg, #2E7D32, #1B5E20)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(76, 175, 80, 0.3)";
          e.currentTarget.style.background = "linear-gradient(135deg, #4CAF50, #2E7D32)";
        }}
      >
        Забронировать место
      </button>
    </section>
  );
};

export default HeroSection;