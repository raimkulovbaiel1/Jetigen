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

  const [fullName, setFullName] = useState("");
  const [childName, setChildName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

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
        fullName,
        phoneNumber,
        email,
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
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-gray-100 flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-linear-to-r from-emerald-600 to-emerald-500 text-white p-1 text-center">
          <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">
            🏕️
          </div>
          <h1 className="text-2xl font-bold">Лагерь Jetigen</h1>
          <p className="text-sm mt-2 opacity-90">Бронирование мест по потокам</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">ФИО родителя *</label>
            <input
              type="text"
              className="input"
              placeholder="Иванов Иван Иванович"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

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
            <label className="label">Возраст ребёнка *</label>
            <input
              type="number"
              className="input"
              placeholder="Например: 7"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">Выбор потока *</label>
            <select
              className="input"
              value={selectedStreamId}
              onChange={(e) => setSelectedStreamId(Number(e.target.value))}
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

          <div className="md:col-span-1">
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

          <div className="md:col-span-1">
            <label className="label">Email *</label>
            <input
              type="email"
              className="input"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || !selectedStream || selectedStream.availableSpots <= 0}
            className="md:col-span-2 w-full bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
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

export default HeroSection;
