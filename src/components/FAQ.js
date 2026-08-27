"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer full-stack web development (React, Next.js, PHP, MySQL), AI automation and AI agent development, API integrations, WordPress builds, and UI/UX design — helping businesses build fast, modern, and efficient digital products.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on project scope, but most websites take 1–3 weeks and AI automation projects take 1–2 weeks. I'll give you a clear timeline after understanding your requirements.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes — I work remotely with clients worldwide and I'm flexible with time zones and communication via email, chat, or video calls.",
  },
  {
    question: "What is your pricing like?",
    answer:
      "Pricing depends on project complexity and scope. I offer competitive rates for both freelance projects and long-term collaborations — reach out with your project details for a custom quote.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-cream py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orange font-semibold tracking-wide mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Get Your Answers Here
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl border border-navy/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center text-left px-6 py-5"
              >
                <span className="text-navy font-semibold">{faq.question}</span>
                <span
                  className={`text-orange text-xl transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-navy/60 text-sm leading-relaxed px-6 pb-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
