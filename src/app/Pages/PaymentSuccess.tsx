import { useParams, useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const search = new URLSearchParams(useLocation().search);

  const name = search.get("name") || "Участник";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Оплата прошла успешно
        </h1>

        <p className="mb-2">Спасибо, {name}!</p>
        {id && (
          <p className="text-sm text-gray-500 mb-4">
            Транзакция № {id}
          </p>
        )}

        <button
          onClick={() => navigate("/")}
          className="inline-block mt-4 bg-[#0295a7] text-white px-6 py-3 rounded-xl"
        >
          На главную
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
