// app/components/FAQSection.jsx
"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqData } from "../data/faq";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (id) => setActiveFAQ((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="px-6 lg:px-16 py-16 bg-gray-50">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-600"
        >
          Jawaban atas pertanyaan yang sering diajukan
        </motion.p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq) => (
          <motion.div 
            key={faq.id} 
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
          >
            <button 
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <span className="text-primary text-xl">
                {activeFAQ === faq.id ? "−" : "+"}
              </span>
            </button>
            
            <AnimatePresence>
              {activeFAQ === faq.id && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 border-t border-gray-100"
                >
                  <p className="text-gray-700 mt-3">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}