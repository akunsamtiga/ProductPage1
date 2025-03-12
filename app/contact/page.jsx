"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../utils/animations";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulasi pengiriman data
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Decorative SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="contactBgGradient" x1="0" y1="0" x2="800" y2="600">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f3f4f6" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#contactBgGradient)" />
          <circle cx="200" cy="100" r="80" fill="#e0f2fe" opacity="0.5" />
          <circle cx="600" cy="500" r="120" fill="#bae6fd" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="relative z-10 px-6 lg:px-16 py-12 lg:py-20">
        {/* Hero Contact Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4"
          >
            Hubungi Kami
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-gray-700"
          >
            Kami siap membantu Anda 24/7. Hubungi kami melalui informasi di bawah ini atau
            kirimkan pesan langsung.
          </motion.p>
        </motion.div>

        {/* Contact Info & Form Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Penerbangan No. 123, Jakarta, Indonesia
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Telepon</h3>
                <p className="text-gray-600">+62 21 12345678</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Email</h3>
                <p className="text-gray-600">info@skywings.co.id</p>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-600 hover:text-blue-800">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-600 hover:text-blue-800">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeInRight}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-2xl space-y-6"
          >
            <div className="grid gap-6">
              <motion.input
                variants={fadeInUp}
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <motion.input
                variants={fadeInUp}
                type="email"
                name="email"
                placeholder="Alamat Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <motion.textarea
                variants={fadeInUp}
                name="message"
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-36"
              />
            </div>
            <motion.button
              variants={fadeInUp}
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            </motion.button>
            {status === "success" && (
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-green-600 text-center"
              >
                Pesan berhasil terkirim!
              </motion.p>
            )}
          </motion.form>
        </motion.div>

        {/* Embedded Map / Lokasi Kami */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/map-placeholder.jpg"
            alt="Lokasi Kami"
            className="w-full h-96 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
