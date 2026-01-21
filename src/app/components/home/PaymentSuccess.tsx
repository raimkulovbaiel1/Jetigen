import { useParams, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const { id } = useParams();
  const search = new URLSearchParams(useLocation().search);

  const name = search.get("name") || "Участник";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Оплата прошла успешно
        </h1>

        <p className="mb-2">Спасибо, {name}!</p>
        {id && <p className="text-sm text-gray-500">Транзакция № {id}</p>}

        <a href="/" className="inline-block mt-6 bg-[#0295a7] text-white px-6 py-3 rounded-xl">
          На главную
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
