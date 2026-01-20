import React from 'react';

const CampInfo: React.FC = () => {
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
        О лагере Жетиген
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        <div
          style={{
            padding: "30px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h3 style={{
            fontSize: "24px",
            color: "#2d5a27",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{
              fontSize: "32px",
              display: "inline-block",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))"
            }}>⛺</span>
            Места для палаток
          </h3>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Выберите удобное место для установки палатки. У нас есть различные зоны:
            у озера, в лесу или на открытой поляне.
          </p>
        </div>

        <div
          style={{
            padding: "30px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h3 style={{
            fontSize: "24px",
            color: "#2d5a27",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{
              fontSize: "32px",
              display: "inline-block",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))"
            }}>🏔️</span>
            Горный отдых
          </h3>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Наслаждайтесь чистым горным воздухом, красивыми пейзажами и
            возможностью активного отдыха на природе.
          </p>
        </div>

        <div
          style={{
            padding: "30px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h3 style={{
            fontSize: "24px",
            color: "#2d5a27",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{
              fontSize: "32px",
              display: "inline-block",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))"
            }}>📋</span>
            Простота бронирования
          </h3>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Забронируйте место всего за несколько минут. Укажите даты,
            выберите место и подтвердите бронирование.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampInfo;