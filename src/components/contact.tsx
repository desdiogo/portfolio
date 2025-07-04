"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  const searchParams = useSearchParams();

  const { ref } = useSectionInView("Contato");

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

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contato</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 text-justify">
        Por favor entre em contato pelo email{" "}
        <a className="underline" href="mailto:diogo@desdiogo.com.br">
          diogo@desdiogo.com.br
        </a>{" "}
        ou através deste formulário.
      </p>

      <ContactForm />
    </motion.section>
  );
}
