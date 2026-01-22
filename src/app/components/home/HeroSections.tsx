import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/logo.jpg";
import {
  type Stream,
  type ParticipantResponse,
  getStreams,
  createParticipantWithPayment,
} from "../../../api/HeroSections.api";

const HeroSection: React.FC = () => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [childName, setChildName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [showAmount, setShowAmount] = useState(false);

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [payUrl, setPayUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getStreams().then(setStreams).catch(err => setError(err.message));
  }, []);

  const handleSelectStream = (stream: Stream) => {
    setSelectedStream(stream);
    setDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: string[] = [];
    if (!childName) errors.push("Введите имя ребёнка");
    if (!phoneNumber) errors.push("Введите телефон родителя");
    if (!selectedStream) errors.push("Выберите поток");

    if (errors.length) {
      setFormErrors(errors);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setFormErrors([]);

      const response: ParticipantResponse =
        await createParticipantWithPayment({
          fullName: childName,
          phoneNumber,
          email: "user@example.com",
          streamId: selectedStream!.id,
          comments: `Ребёнок: ${childName}`,
         // amount: Number(amount), // ← добавляем сумму платежа в запрос к API ( отправлять на сервер что бы пользователь оплатил именно эту сумму) 
        });

      setPayUrl(response.payUrl);
    } catch (err: any) {
      setError(err.message || "Ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-gray-100 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#0295a7] text-white p-6 text-center relative overflow-hidden">
          <div className="flex justify-center mb-0">
            <img
              src={logo}
              alt="Логотип Жетиген"
              className="w-50 h-30 rounded-full object-cover drop-shadow-lg"
            />
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h1 className="text-[30px]! sm:text-[15px]! md:text-[19px]! lg:text-[46px]! font-bold mb-2">
            Международный лагерь «Жетиген»
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
            📍 Иссык-Куль
          </div>

          <p className="text-base md:text-lg leading-relaxed opacity-95 max-w-xl mx-auto font-light">
            Пространство, где дети <span className="font-semibold text-yellow-300">9–16 лет</span> мечтают, созидают и раскрывают свой потенциал через безопасный и вдохновляющий отдых  с авторской программой .
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="label">Имя ребёнка *</label>
            <input
              className="input"
              value={childName}
              onChange={e => setChildName(e.target.value)}
              placeholder="Имя ребёнка"
            />
          </div>

          <div>
            <label className="label">Телефон родителя *</label>
            <input
              className="input"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              placeholder="+996 (555) 123-456"
            />
          </div>

          <div className="relative">
            <label className="label">Выбор потока *</label>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="input flex justify-between items-center"
            >
              {selectedStream
                ? `${selectedStream.name} (${selectedStream.startDate} — ${selectedStream.endDate})`
                : "Выберите поток"}
              <span>▾</span>
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 w-full bg-white rounded-xl shadow-md mt-1 max-h-55 overflow-y-auto">
                {streams.map(s => (
                  <button
                    key={s.id}
                    type="button"
                    disabled={s.availableSpots <= 0}
                    onClick={() => handleSelectStream(s)}
                    className="w-full px-4 py-2 border border-gray-200 text-left hover:bg-gray-100 disabled:opacity-40"
                  >
                    {s.name} | Мест: {s.availableSpots}
                  </button>
                ))}
              </div>
            )}
          </div>

          {formErrors.length > 0 && (
            <ul className="text-red-600 text-sm space-y-1">
              {formErrors.map((e, i) => (
                <li key={i}>• {e}</li>
              ))}
            </ul>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0295a7] text-white py-3 rounded-2xl font-semibold"
          >
            {loading ? "Обработка..." : "✅ Забронировать место"}
          </button>
        </form>

        {payUrl && !showAmount && (
          <div className="p-6 text-center">
            <button
              onClick={() => setShowAmount(true)}
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
            >
              Перейти к оплате
            </button>
          </div>
        )}

        {showAmount && (
          <div className="p-6 space-y-4 text-center">
            <label className="label">Введите сумму *</label>
            <input
              type="number"
              className="input"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="Введите сумму"
            />

            <button
              onClick={() => {
                if (!amount || Number(amount) <= 0) {
                  setError("Введите корректную сумму");
                  return;
                }
                window.open(payUrl!, "_blank");
              }}
              className="w-full bg-[#0295a7] text-white py-3 rounded-2xl"
            >
              Оплатить {amount} сом
            </button>
          </div>
        )}

        {error && <p className="text-red-600 text-center pb-4">{error}</p>}

        <div className="p-6 text-center space-y-4 border-t bg-gray-50">
          <a
            href="https://wa.me/996557787700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 border-2 border-[#0295a7] text-[#0295a7]
                       px-6 py-3 rounded-2xl hover:bg-[#0295a7] hover:text-white transition"
          >
            💬 Написать в WhatsApp
          </a>

          <p className="text-sm text-gray-500">
            📞 <a href="tel:+996557787700">+996 (557) 78-77-00</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
