"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  { name: "GitHub", href: "https://github.com/emmanuelaustin534-source" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-augustine-62aa7741a",
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~0147c5e6424f45c563?viewMode=1",
  },
  { name: "Fiverr", href: "https://www.fiverr.com/eniola_emmadev" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await fetch("https://formspree.io/f/myeygjdd", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch (err) {
      setErrors({ form: "Something went wrong. Please try again." });
    }
  };

  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-orange font-semibold tracking-wide mb-2">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">Contact</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Need more info? We&apos;d love to hear from you!
            </h2>
            <p className="text-navy/60 mb-8">
              Interested in working together? Send a message and I&apos;ll get
              back to you as soon as possible.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-orange text-sm font-medium mb-1">Email</p>
                <p className="text-navy font-semibold">
                  austinemmanuel256@gmail.com
                </p>
              </div>
              <div>
                <p className="text-orange text-sm font-medium mb-1">Phone</p>
                <p className="text-navy font-semibold">+234 814 786 0571</p>
              </div>
              <div>
                <p className="text-orange text-sm font-medium mb-1">Location</p>
                <p className="text-navy font-semibold">Nigeria</p>
              </div>
            </div>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:text-orange font-medium text-sm border border-navy/20 hover:border-orange rounded-full px-4 py-2 transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-navy/10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mb-4">
                    <span className="text-orange text-3xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-navy/60 text-sm mb-6">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-orange hover:text-orange-dark font-medium text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-bold text-navy mb-1">
                    Just say hello
                  </h3>
                  <p className="text-navy/60 text-sm mb-4">
                    Start meaningful connections with a simple hello.
                  </p>

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-navy/20 focus:border-orange rounded-lg px-4 py-3 outline-none transition-colors duration-300 text-navy placeholder:text-navy/40"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-navy/20 focus:border-orange rounded-lg px-4 py-3 outline-none transition-colors duration-300 text-navy placeholder:text-navy/40"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-navy/20 focus:border-orange rounded-lg px-4 py-3 outline-none transition-colors duration-300 resize-none text-navy placeholder:text-navy/40"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-orange hover:bg-orange-dark text-cream px-8 py-3 rounded-full font-medium transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
