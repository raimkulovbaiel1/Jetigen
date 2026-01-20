import React from "react";

const JetigenPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-gray-100 flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="bg-linear-to-r from-emerald-600 to-emerald-500 text-white p-1 text-center">
          <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">
            🏕️
          </div>
          <h1 className="text-2xl font-bold">Лагерь Jetigen</h1>
          <p className="text-sm mt-2 opacity-90">
            Бронирование мест по потокам
          </p>
        </div>

        <form className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">ФИО родителя *</label>
            <input
              type="text"
              className="input"
              placeholder="Иванов Иван Иванович"
            />
          </div>

          <div>
            <label className="label">Имя ребёнка *</label>
            <input
              type="text"
              className="input"
              placeholder="Имя ребёнка"
            />
          </div>

          <div>
            <label className="label">Возраст ребёнка *</label>
            <input
              type="number"
              className="input"
              placeholder="Например: 7"
            />
          </div>

          <div>
            <label className="label">Выбор потока *</label>
            <select className="input">
              <option>Выберите поток</option>
              <option>1 поток — июнь</option>
              <option>2 поток — июль</option>
              <option>3 поток — август</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="label">Телефон *</label>
            <input
              type="tel"
              className="input"
              placeholder="+996 (555) 123-456"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 w-full bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            ✅ Забронировать место
          </button>
        </form>

        <div className="border-t bg-gray-50 p-6 text-center space-y-4">
          <a
            href="https://wa.me/996557787700"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-gray-600 hover:text-emerald-600 transition"
          >
            Есть вопросы? Свяжитесь с нами
          </a>

          <a
            href="https://wa.me/996557787700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600  text-white px-6 py-3 rounded-2xl font-medium shadow-md hover:shadow-lg transition"
          >
            💬 Написать в WhatsApp
          </a>

          <p className="text-sm text-gray-500">
            📞{" "}
            <a
              href="tel:+996557787700"
              className="hover:underline text-gray-500"
            >
              +996 (557) 78-77-00
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default JetigenPage;
