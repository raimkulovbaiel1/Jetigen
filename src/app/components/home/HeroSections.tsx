import React, { useEffect, useState } from "react";
import {
  type Stream,
  type ParticipantResponse,
  getStreams,
  createParticipantWithPayment,
} from "../../../api/HeroSections.api";

const HeroSection: React.FC = () => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [selectedStreamId, setSelectedStreamId] = useState<number | "">("");
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);

  const [childName, setChildName] = useState("");
  const [age,] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [payUrl, setPayUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getStreams()
      .then(setStreams)
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (selectedStreamId === "") return setSelectedStream(null);
    const stream = streams.find((s) => s.id === selectedStreamId) || null;
    setSelectedStream(stream);
  }, [selectedStreamId, streams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStream) return;

    if (selectedStream.availableSpots <= 0) {
      setError("В этом потоке нет свободных мест");
      return;
    }

    setLoading(true);
    setError(null);
    setPayUrl(null);

    try {
      const response: ParticipantResponse = await createParticipantWithPayment({
        fullName: childName, 
        phoneNumber,
        email: "user@example.com", 
        streamId: selectedStream.id,
        comments: `Ребёнок: ${childName}, Возраст: ${age}`,
      });

      setPayUrl(response.payUrl);
    } catch (err: any) {
      setError(err.message || "Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-gray-100 flex justify-center ">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#0295a7] text-white p-6 text-center relative overflow-hidden">
          <div className="flex justify-center mb-0">
            <img
              src="src/assets/img/logo.jpg"
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
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 gap-4">
          <div>
            <label className="label">Имя ребёнка *</label>
            <input
              type="text"
              className="input"
              placeholder="Имя ребёнка"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">Телефон *</label>
            <input
              type="tel"
              className="input"
              placeholder="+996 (555) 123-456"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">Выбор потока *</label>
            <select
              className="input"
              value={selectedStreamId}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedStreamId(value === "" ? "" : Number(value));
              }}
              required
            >
              <option value="">Выберите поток</option>
              {streams.map((s) => (
                <option key={s.id} value={s.id} disabled={s.availableSpots <= 0}>
                  {s.name} ({s.startDate} — {s.endDate}) | Мест: {s.availableSpots}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading || !selectedStream || selectedStream.availableSpots <= 0}
            className="w-full bg-[#0295a7] text-white font-semibold py-3 rounded-2xl shadow-md transition disabled:cursor-not-allowed"
          >
            {loading ? "Создаём участника..." : "✅ Забронировать место"}
          </button>
        </form>


        {payUrl && (
          <div className="p-6 text-center">
            <p className="text-green-600 font-semibold">Участник создан! Перейдите для оплаты:</p>
            <a
              href={payUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-3 bg-emerald-600 text-white rounded-xl shadow-md hover:bg-emerald-700 transition"
            >
              Оплатить
            </a>
          </div>
        )}

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
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
            className="inline-flex items-center justify-center gap-2 bg-[#0295a7]  text-white px-6 py-3 rounded-2xl font-medium shadow-md hover:shadow-lg transition"
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

export default HeroSection;
