import React, { useState } from 'react';

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    place: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    comments: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    // Очистка формы
    setFormData({
      name: '',
      phone: '',
      email: '',
      place: '',
      checkIn: '',
      checkOut: '',
      guests: '1',
      comments: '',
    });
  };

  const places = [
    'Место у озера №1',
    'Место у озера №2',
    'Место в лесу №1',
    'Место в лесу №2',
    'Место на поляне №1',
    'Место на поляне №2',
    'Место у реки №1',
    'Место у реки №2',
  ];

  return (
    <div style={{ minHeight: "calc(100vh - 70px)", background: "#f8f9fa" }}>
      <div
        className="container"
        style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}
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
          Бронирование места
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "16px",
          }}
        >
          Заполните форму для бронирования места в лагере
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(45, 90, 39, 0.1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#2d5a27",
              }}
            >
              ФИО *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="Введите ваше имя"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#2d5a27",
              }}
            >
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="+7 (XXX) XXX-XX-XX"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#2d5a27",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="example@email.com"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="place"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#2d5a27",
              }}
            >
              Выберите место *
            </label>
            <select
              id="place"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
                background: "white",
              }}
            >
              <option value="">Выберите место...</option>
              {places.map((place, index) => (
                <option key={index} value={place}>
                  {place}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <div style={{ flex: 1 }}>
              <label
                htmlFor="checkIn"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#2d5a27",
                }}
              >
                Заезд *
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label
                htmlFor="checkOut"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#2d5a27",
                }}
              >
                Выезд *
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="guests"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#2d5a27",
              }}
            >
              Количество гостей *
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
                background: "white",
              }}
            >
              <option value="1">1 человек</option>
              <option value="2">2 человека</option>
              <option value="3">3 человека</option>
              <option value="4">4 человека</option>
              <option value="5">5+ человек</option>
            </select>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              htmlFor="comments"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#2d5a27",
              }}
            >
              Дополнительные пожелания
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              rows={4}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                boxSizing: "border-box",
                resize: "vertical",
              }}
              placeholder="Укажите особые пожелания или требования..."
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "18px",
              background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginTop: "10px",
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
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;