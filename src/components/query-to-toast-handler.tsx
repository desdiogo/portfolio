'use client'

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function QueryToToastHandler() {
  const searchParams = useSearchParams();
  const hasFired = useRef(false);

  useEffect(() => {
    if (!searchParams || hasFired.current) return;

    try {
      const status = searchParams.get("status");
      const message = searchParams.get("message");

      if (status === "success") {
        toast.success("Email enviado com sucesso!");
      } else if (status === "error" && message) {
        toast.error(message);
      }

      // Limpa a URL apenas se houver algo
      if (status || message) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      hasFired.current = true;
    } catch (error) {
      console.error("Erro ao processar parâmetros da URL:", error);
    }
  }, [searchParams]);

  return null;
}
