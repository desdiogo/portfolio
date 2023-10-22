import { EmailResponse } from './../lib/types';
"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Email inválido",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Mensagem Inválida",
    };
  }

    const data = await resend.emails.send({
      from: "Contato formulário <diogo@desdiogo.com.br>",
      to: "desdiogo@gmail.com",
      subject: "Messagem via formulário portifólio",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    if('statusCode' in data) {
      return {
        error: "Email não enviado"
      }
    }

  return {
    data,
  };
};
