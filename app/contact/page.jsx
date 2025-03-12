// app/contact/page.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulasi pengiriman data
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="px-6 lg:px-16 py-10 lg:py-16 bg-gray-50">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl font-bold mb-4 text-blue-900"
        >
          Hubungi Kami
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-lg text-gray-700"
        >
          Kami siap membantu semua pertanyaan Anda
        </motion.p>
      </motion.div>

      <motion.form 
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="grid gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Alamat Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Pesan Anda"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-36"
          />
        </div>

        <button 
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
        </button>

        {status === 'success' && (
          <p className="mt-4 text-green-600 text-center">
            Pesan berhasil terkirim!
          </p>
        )}
      </motion.form>
    </section>
  );
}