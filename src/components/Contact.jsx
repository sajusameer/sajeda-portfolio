"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_wukrrbv",
        "template_cd8xtpu",
        form.current,
        "pvlJTzCzFJLaEA2YQ"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-14">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Let's Work Together
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaEnvelope size={22} />
                <span>sajusameer32@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone size={22} />
                <span>+8801850174732</span>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp size={22} />
                <span>+8801850174732</span>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full text-black"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="textarea textarea-bordered w-full text-black"
            />

            <button
              className="btn btn-success"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}