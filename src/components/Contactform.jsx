import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
          form.current.reset();
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <form ref={form} className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="text-[#C7C7C7]">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          name="user_name"
          className="bg-[#1A1A1A] py-2 px-3 focus:outline-none rounded"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[#C7C7C7]">Email</label>
        <input
          type="email"
          name="user_email"
          className="bg-[#1A1A1A] py-2 px-3 focus:outline-none rounded"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[#C7C7C7]">Subject</label>
        <input
          type="text"
          name="subject"
          className="bg-[#1A1A1A] py-2 px-3 focus:outline-none rounded"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[#C7C7C7]">Message</label>
        <textarea
          name="message"
          rows={6}
          className="bg-[#1A1A1A] py-2 px-3 focus:outline-none rounded"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <button
          className="bg-[#D3E97A] text-black text-sm py-2 px-5 rounded-full"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Contactform;
