"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

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

      <ContactForm
        onSuccess={() => toast.success("Email enviado com sucesso!")}
        onError={(msg) => toast.error(msg)}
      />
    </motion.section>
  );
}
