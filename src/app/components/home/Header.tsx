import React, { useState } from 'react';

interface HeaderProps {
  currentPage: 'home' | 'places' | 'booking';
  setCurrentPage: (page: 'home' | 'places' | 'booking') => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        borderBottom: "6px solid rgba(0, 0, 0, 0.08)",
        position: "sticky",
        top: 10,
        background: "white",
        zIndex: 1000,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#2d5a27",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          > 
          <img src="" alt="logo" />
         Лагерь Jetigen
          </button>

          <nav className="desktop-nav">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "24px",
              }}
            >
              <li>
                <button
                  onClick={() => setCurrentPage('places')}
                  style={{
                    padding: "8px 16px",
                    border: "1px solid #2d5a27",
                    borderRadius: "6px",
                    color: "#2d5a27",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Места для палаток
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('booking')}
                  style={{
                    padding: "8px 20px",
                    background: "#2d5a27",
                    color: "white",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Забронировать
                </button>
              </li>
            </ul>
          </nav>

          {/* BURGER BUTTON (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="burger"
            style={{
              fontSize: "26px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#000", // ← ЧЁРНЫЙ
            }}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            style={{
              padding: "16px 0",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <button
              onClick={() => {
                setCurrentPage('places');
                setMenuOpen(false);
              }}
              style={{
                padding: "12px",
                border: "1px solid #2d5a27",
                borderRadius: "6px",
                background: "none",
                color: "#2d5a27",
              }}
            >
              Места для палаток
            </button>

            <button
              onClick={() => {
                setCurrentPage('booking');
                setMenuOpen(false);
              }}
              style={{
                padding: "12px",
                background: "#2d5a27",
                color: "white",
                borderRadius: "6px",
                border: "none",
              }}
            >
              Забронировать
            </button>
          </div>
        )}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }
          }

          @media (min-width: 769px) {
            .burger {
              display: none;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
