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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getStreams().then(setStreams).catch(err => setError(err.message));
  }, []);

  const handleSelectStream = (stream: Stream) => {
    setSelectedStream(stream);
    setDropdownOpen(false);
  };

  const handleGoToPayment = () => {
    const errors: string[] = [];

    if (!childName.trim()) errors.push("Введите Фамилия и имя ребёнка");
    if (!phoneNumber.trim()) errors.push("Введите телефон родителя");
    if (!selectedStream) errors.push("Выберите поток");

    if (errors.length) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]);
    setShowAmount(true);
  };


  const handleCreatePayment = async () => {
    const numericAmount = Number(amount);
    const payWindow = window.open("", "_blank");
    try {
      setLoading(true);
      setError(null);

      const response: ParticipantResponse =
        await createParticipantWithPayment({
          fullName: childName.trim(),
          phoneNumber: "+996" + phoneNumber.trim(),
          email: "user@example.com",
          streamId: selectedStream!.id,
          comments: `Ребёнок: ${childName}`,
          amount: numericAmount.toString(),
        });
        if (payWindow) {  
      payWindow.location.href = response.payUrl;
      }
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
            Пространство, где дети <span className="font-semibold text-[#ff7a03] ">9–16 лет</span> мечтают, созидают и раскрывают свой потенциал через безопасный и вдохновляющий отдых  с авторской программой .
          </p>
        </div>

        <div className="p-6 space-y-4">

          <div>
            <label className="label">Фамилия и Имя ребёнка *</label>
            <input
              className="input rounded-lg"
              value={childName}
              onChange={(e) => {
                const onlyLetters = e.target.value.replace(/[^\p{L}\s,.@#!?:;"|%-+=]/gu, "");
                setChildName(onlyLetters);
              }}
              placeholder="Фамилия и Имя ребёнка"
            />
          </div>


          <div>
            <label className="label">Телефон родителя *</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full
                  focus-within:ring-2 focus-within:ring-emerald-500 transition-colors">
              <div className="px-3 py-2 bg-gray-100 text-gray-700 font-semibold">
                +996
              </div>
              <input
                type="tel"
                maxLength={9}
                className="flex-1 px-3 py-2 outline-none focus:outline-none bg-transparent text-inherit"
                value={phoneNumber}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "");
                  setPhoneNumber(onlyNumbers);
                }}
                placeholder="XXX XXX XXX"
              />
            </div>
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
                    {s.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {formErrors.length > 0 && (
            <ul className="text-red-600 text-sm">
              {formErrors.map((e, i) => (
                <li key={i}>• {e}</li>
              ))}
            </ul>
          )}

          {!showAmount && (
       <button
  type="button"
  onClick={handleGoToPayment}
  disabled={loading}
  className="
    w-full
    min-h-12
    bg-[#0295a7]
    text-white
    py-3
    rounded-2xl
    font-semibold
    disabled:bg-gray-300
    disabled:text-gray-500
    disabled:opacity-100
  "
>
  {loading ? "Обработка..." : "✅ Забронировать место"}
</button>

          )}

          {showAmount && (
            <>
              <div>
                <label className="label">Введите сумму *</label>
                <input
                  type="number"
                  className="input"
                  value={amount}
                  onChange={e => setAmount(e.target.value.replace(/\D/g, ""))}
                  placeholder="Введите сумму"
                />
              </div>

              <button
                onClick={handleCreatePayment}
                disabled={loading}
                className="w-full bg-emerald-600 text-white py-3 rounded-2xl"
              >
                {loading ? "Создание платежа..." : `Оплатить ${amount} сом`}
              </button>
            </>
          )}

          {error && <p className="text-red-600 text-center">{error}</p>}
          <div className="p-6 text-center space-y-4 border-t bg-gray-50">
            <a
              href="https://wa.me/996703787700"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2 border-2 border-[#0295a7] text-[#0295a7]
                       px-6 py-3 rounded-2xl hover:bg-[#0295a7] hover:text-white transition"
            >
              💬 Написать в WhatsApp
            </a>

            <p className="text-sm text-gray-500">
              📞 <a href="tel:+996703787700">+996 (703) 78-77-00</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
