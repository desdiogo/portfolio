import {sendEmail} from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "@/components/submit-btn";
import React from "react";

export default function ContactForm({ onSuccess, onError }: { onSuccess: () => void, onError: (msg: string) => void }) {
  async function handleAction(formData: FormData) {
    const { error } = await sendEmail(formData);
    if (error) {
      onError(error);
    } else {
      onSuccess();
    }
  }

  return (
    <form
      className="mt-10 flex flex-col dark:text-black"
      action={handleAction}
    >
      <input
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Seu email"
      />
      <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="message"
        placeholder="Sua mensagem"
        required
        maxLength={5000}
      />
      <SubmitBtn />
    </form>
  );
}