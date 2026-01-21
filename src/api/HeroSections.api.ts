export interface Stream {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  price: number;
  capacity: number;
  currentParticipants: number;
  availableSpots: number;
}

export interface ParticipantResponse {
  participantId: number;
  transactionId: number;
  payUrl: string;
}

export const getStreams = async (): Promise<Stream[]> => {
  const res = await fetch("https://jetigen.operator.kg/api/v1/streams/");
  if (!res.ok) throw new Error("Не удалось загрузить потоки");
  return res.json();
};

export const createParticipantWithPayment = async (data: {
  fullName: string;
  phoneNumber: string;
  email: string;
  streamId: number;
  comments?: string;
}): Promise<ParticipantResponse> => {
  const formData = new URLSearchParams();
  formData.append("fullName", data.fullName);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("email", data.email);
  formData.append("streamId", data.streamId.toString());
  if (data.comments) formData.append("comments", data.comments);

  const res = await fetch(
    "https://jetigen.operator.kg/api/v1/participants/create-with-payment/",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Ошибка при создании участника");
  }

  return res.json();
};
