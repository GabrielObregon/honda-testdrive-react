// src/hooks/usePostApi.js
import { useState } from "react";

const usePostApi = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postData = async (data) => {
    setLoading(true);
    setSuccess(false);

    // Simula delay de rede
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Log no console
    console.log("Agendamento enviado:", data);

    setLoading(false);
    setSuccess(true);

    return { success: true };
  };

  return {
    postData,
    loading,
    success,
    resetSuccess: () => setSuccess(false), // Para resetar a mensagem
  };
};

export default usePostApi;
