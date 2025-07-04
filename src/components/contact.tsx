'use client'

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import ContactForm from "@/components/contact-form";
import QueryToToastHandler from "@/components/query-to-toast-handler"; // ✅ Importa o handler

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* ✅ Usa com suspense de forma limpa */}
      <Suspense fallback={null}>
        <QueryToToastHandler />
      </Suspense>

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
