'use client'

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function QueryToToastHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const status = searchParams.get("status");
    const message = searchParams.get("message");

    if (status === "success") {
      toast.success("Email enviado com sucesso!");
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (status === "error" && message) {
      toast.error(message);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [searchParams]);

  return null;
}