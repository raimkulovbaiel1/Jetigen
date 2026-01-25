export type TransactionStatus = "pending" | "success" | "fail";

export interface TransactionResponse {
  id: number;
  status: TransactionStatus;
  amount: string;
  updatedAt: string;
}
export async function getTransactionStatus(
  transactionId: number,
): Promise<TransactionResponse> {
  const res = await fetch(
    `https://jetigen.operator.kg/api/v1/payment/webhook/${transactionId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error("Ошибка получения статуса платежа");
  }

  return res.json();
}
