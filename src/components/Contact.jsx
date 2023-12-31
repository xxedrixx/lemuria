import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState({ text: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tn7huns",
        "template_3htaohi",
        form.current,
        "1XFkVEAOVFsbABnsd"
      )
      .then(
        (result) => {
          setMessage({ text: "Message envoyé avec succès!", type: "success" });
          clearMessageAfterDelay();
        },
        (error) => {
          setMessage({
            text: "Erreur lors de l'envoi du message",
            type: "error",
          });
          clearMessageAfterDelay();
        }
      );
    e.target.reset();
  };

  const clearMessageAfterDelay = () => {
    setTimeout(() => {
      setMessage({ text: "", type: "" });
    }, 5000);
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="flex justify-center items-center font-palanquin text-4xl capitalize font-bold mb-10 text-lemuria">
          CONTACTEZ-NOUS
        </h1>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-sm">
          <input
            type="text"
            placeholder="Nom"
            name="user_name"
            required
            className="w-full mb-4 p-2 rounded border border-slate-gray text-lg"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="w-full mb-4 p-2 rounded border border-slate-gray text-lg"
          />
          <input
            type="text"
            placeholder="Sujet"
            name="subject"
            required
            className="w-full mb-4 p-2 rounded border border-slate-gray text-lg"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="w-full mb-4 p-2 rounded border border-slate-gray text-lg"
          ></textarea>
          <button
            type="submit"
            className=" text-white bg-lemuria py-2 px-4 rounded text-lg"
          >
            Envoyer
          </button>
        </form>

        {message.text && (
          <div
            className={`mt-4 p-2 rounded ${
              message.type === "success"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
