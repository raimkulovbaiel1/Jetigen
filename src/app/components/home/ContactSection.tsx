import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section style={{ textAlign: "center", padding: "60px 0", background: "#f8f9fa", marginTop: "40px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#2d5a27",
            marginBottom: "30px",
          }}
        >
          Свяжитесь с нами
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          marginBottom: "40px"
        }}>
          <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
          }}>
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>📞</div>
            <h3 style={{ color: "#2d5a27", marginBottom: "8px" }}>Телефон</h3>
            <p style={{ color: "#666" }}>+312 (XXX) XXX-XX-XX</p>
          </div>

          <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
          }}>
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>📧</div>
            <h3 style={{ color: "#2d5a27", marginBottom: "8px" }}>Email</h3>
            <p style={{ color: "#666" }}>info@zhetigen.kz</p>
          </div>

          <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
          }}>
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>📍</div>
            <h3 style={{ color: "#2d5a27", marginBottom: "8px" }}>Адрес</h3>
            <p style={{ color: "#666" }}>Горный массив Жетиген</p>
          </div>
        </div>

        <div style={{
          background: "linear-gradient(135deg, #2d5a27, #1e3d1b)",
          color: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(45, 90, 39, 0.2)"
        }}>
          <h3 style={{ marginBottom: "15px", fontSize: "24px" }}>🌟 Добро пожаловать в лагерь Жетиген!</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", opacity: 0.9 }}>
            Здесь вы найдете идеальное место для отдыха на природе.
            Чистый воздух, красивые пейзажи и уютная атмосфера ждут вас!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;