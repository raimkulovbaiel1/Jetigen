import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section style={{ marginBottom: "60px" }}>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#2d5a27",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Красота лагеря Жетиген
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            height: "200px",
            background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "48px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              opacity: 0.3,
            }}
          ></div>
          🌲
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              background: "rgba(0, 0, 0, 0.7)",
              padding: "8px",
              borderRadius: "6px",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Лесная зона
          </div>
        </div>

        <div
          style={{
            height: "200px",
            background: "linear-gradient(135deg, #2196F3, #0D47A1)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "48px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              opacity: 0.3,
            }}
          ></div>
          🏞️
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              background: "rgba(0, 0, 0, 0.7)",
              padding: "8px",
              borderRadius: "6px",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Озеро
          </div>
        </div>

        <div
          style={{
            height: "200px",
            background: "linear-gradient(135deg, #FF9800, #E65100)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "48px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url(\"data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M25 25l-5-5v10l5-5zm0 0l5-5v10l-5-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              opacity: 0.3,
            }}
          ></div>
          ⛰️
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              background: "rgba(0, 0, 0, 0.7)",
              padding: "8px",
              borderRadius: "6px",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Горы
          </div>
        </div>

        <div
          style={{
            height: "200px",
            background: "linear-gradient(135deg, #9C27B0, #4A148C)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "48px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              opacity: 0.3,
            }}
          ></div>
          🏕️
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              background: "rgba(0, 0, 0, 0.7)",
              padding: "8px",
              borderRadius: "6px",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Палаточный лагерь
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;