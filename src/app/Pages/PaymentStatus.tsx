import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { getTransactionStatus, type TransactionStatus } from "../../api/payment.api";

type Status = TransactionStatus;

const PaymentStatus: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { transactionId: transactionIdParam } = useParams<{ transactionId: string }>();
  const navigate = useNavigate();
  
  const transactionIdQuery = searchParams.get("transactionId");
  const transactionId = Number(transactionIdQuery || transactionIdParam);

  const [status, setStatus] = useState<Status>("pending");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!transactionId) return;

    const interval = setInterval(async () => {
      try {
        const data = await getTransactionStatus(transactionId);
        setStatus(data.status);

        if (data.status !== "pending") {
          clearInterval(interval);
          setLoading(false);

          if (data.status === "success") {
            setTimeout(() => navigate(`/`), 3000);
          }
        }
      } catch (e) {
        console.error("Ошибка проверки статуса", e);
        setError("Не удалось проверить статус платежа. Попробуйте позже.");
        clearInterval(interval);
        setLoading(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [transactionId, navigate]);

  if (!transactionId) {
    return (
      <p className="text-center mt-10 text-red-500">
        Транзакция не найдена
      </p>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg">⏳ Проверка статуса платежа...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-red-500 text-center">{error}</p>
        <button
          onClick={() => navigate("/booking")}
          className="mt-4 bg-gray-700 text-white px-6 py-2 rounded-xl"
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        {status === "pending" && (
          <>
            <h1 className="text-xl font-bold mb-2">⏳ Ожидаем оплату</h1>
            <p className="text-gray-600">Пожалуйста, не закрывайте страницу</p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-2">
              ✅ Оплата прошла успешно
            </h1>
            <p className="text-gray-600">Через 3 секунды вы будете перенаправлены на главную</p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-[#0295a7] text-white px-6 py-2 rounded-xl"
            >
              На главную сейчас
            </button>
          </>
        )}

        {status === "fail" && (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-2">
              ❌ Оплата не прошла
            </h1>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-gray-700 text-white px-6 py-2 rounded-xl"
            >
              Попробовать снова
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
