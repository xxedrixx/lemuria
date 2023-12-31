import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

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
          alert("Message envoyé avec succès!");
        },
        (error) => {
          alert("Erreur lors de l'envoi du message");
        }
      );
    e.target.reset();
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
            className="w-full mb-4 p-2 rounded border border-slate-gray"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="w-full mb-4 p-2 rounded border border-slate-gray"
          />
          <input
            type="text"
            placeholder="Sujet"
            name="subject"
            required
            className="w-full mb-4 p-2 rounded border border-slate-gray"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="w-full mb-4 p-2 rounded border border-slate-gray"
          ></textarea>
          <button
            type="submit"
            className=" text-white bg-lemuria py-2 px-4 rounded"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
