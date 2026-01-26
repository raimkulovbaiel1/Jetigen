import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
            setTimeout(() => navigate(`/`), 4000);
          }
        }
      } catch (e) {
        console.log(e);
        setError("Не удалось проверить статус платежа. Попробуйте позже.");
        clearInterval(interval);
        setLoading(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [transactionId, navigate]);

  // Контейнер для анимаций
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95 }
  };

  if (!transactionId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-red-100">
          <p className="text-red-500 font-medium">⚠️ Транзакция не найдена</p>
          <button onClick={() => navigate("/")} className="mt-4 text-gray-500 underline">Вернуться назад</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={status + (loading ? "-loading" : "")}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white p-10 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center max-w-sm w-full border border-gray-50"
        >
          {loading && status === "pending" && (
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-full h-full border-4 border-gray-100 border-t-[#0295a7] rounded-full"
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-800 mb-2">Проверка оплаты</h1>
              <p className="text-gray-400 text-sm">Связываемся с банком...</p>
            </div>
          )}

          {!loading && status === "success" && (
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6"
              >
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Успешно!</h1>
              <p className="text-gray-500 mb-8">Ваш платеж принят. Перенаправляем вас на главную страницу...</p>
              <button
                onClick={() => navigate("/")}
                className="w-full py-4 bg-[#0295a7] hover:bg-[#028496] text-white rounded-2xl font-medium transition-all shadow-lg shadow-cyan-100"
              >
                На главную
              </button>
            </div>
          )}

          {!loading && status === "fail" && (
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6"
              >
                <span className="text-3xl">❌</span>
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Ошибка оплаты</h1>
              <p className="text-gray-500 mb-8">{error || "Что-то пошло не так. Деньги не были списаны."}</p>
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-medium transition-all"
                >
                  Попробовать еще раз
                </button>
                <button
                  onClick={() => navigate("/booking")}
                  className="w-full py-4 text-gray-500 hover:text-gray-700 font-medium transition-all"
                >
                  Изменить детали брони
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PaymentStatus;