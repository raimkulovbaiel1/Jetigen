import React from 'react';

const PlacesPage: React.FC = () => {
  const places = [
    { id: 1, name: 'Место у озера №1', status: 'free', price: '5000 ₸/сутки' },
    { id: 2, name: 'Место у озера №2', status: 'free', price: '5000 ₸/сутки' },
    { id: 3, name: 'Место в лесу №1', status: 'occupied', price: '4000 ₸/сутки' },
    { id: 4, name: 'Место в лесу №2', status: 'free', price: '4000 ₸/сутки' },
    { id: 5, name: 'Место на поляне №1', status: 'free', price: '4500 ₸/сутки' },
    { id: 6, name: 'Место на поляне №2', status: 'occupied', price: '4500 ₸/сутки' },
    { id: 7, name: 'Место у реки №1', status: 'free', price: '5500 ₸/сутки' },
    { id: 8, name: 'Место у реки №2', status: 'free', price: '5500 ₸/сутки' },
  ];

  const getStatusColor = (status: string) => {
    return status === 'free' ? '#4CAF50' : '#f44336';
  };

  const getStatusText = (status: string) => {
    return status === 'free' ? 'Свободно' : 'Занято';
  };

  return (
    <div style={{ minHeight: "calc(100vh - 70px)", background: "#f8f9fa" }}>
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#2d5a27",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Места для палаток
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Выберите удобное место для вашей палатки
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {places.map((place) => (
            <div
              key={place.id}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: `2px solid ${getStatusColor(place.status)}`,
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#2d5a27",
                  marginBottom: "10px",
                }}
              >
                {place.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "white",
                    background: getStatusColor(place.status),
                  }}
                >
                  {getStatusText(place.status)}
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#2d5a27",
                  }}
                >
                  {place.price}
                </span>
              </div>

              {place.status === 'free' && (
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#2d5a27",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#1e3d1b";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#2d5a27";
                  }}
                >
                  Забронировать
                </button>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "20px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#2d5a27", marginBottom: "10px" }}>
            Легенда
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  background: "#4CAF50",
                  borderRadius: "50%",
                }}
              ></span>
              Свободно
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  background: "#f44336",
                  borderRadius: "50%",
                }}
              ></span>
              Занято
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesPage;