"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Pemesanan Tiket",
    desc: "Pemesanan cepat dengan sistem real-time"
  },
  {
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Jadwal Fleksibel",
    desc: "Ubah jadwal tanpa biaya tambahan"
  },
  {
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 1112 16a8 8 0 015.657 2.657zm-2.536-5.354a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414-1.414l-3-3z" />
      </svg>
    ),
    title: "Check-in Online",
    desc: "Proses check-in hanya 2 menit"
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 lg:px-16">
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
            <linearGradient id="servicesBgGradient" x1="0" y1="0" x2="800" y2="600">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f9fafb" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#servicesBgGradient)" />
          <path d="M0,200 C200,100 600,300 800,200 L800,600 L0,600 Z" fill="#e0f2fe" opacity="0.2" />
          <circle cx="100" cy="100" r="50" fill="#bae6fd" opacity="0.3" />
          <circle cx="700" cy="500" r="70" fill="#c7d2fe" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4"
          >
            Layanan Kami
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-gray-700"
          >
            Solusi lengkap untuk kebutuhan perjalanan Anda dengan teknologi terkini dan layanan profesional.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-bold mb-3 text-blue-800"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600"
              >
                {service.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-blue-900 mb-6"
          >
            Mengapa Memilih Kami?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Kami mengutamakan inovasi, kenyamanan, dan keamanan dalam setiap layanan.
            Dengan dukungan teknologi canggih dan tim profesional, kami memastikan setiap
            perjalanan Anda berjalan dengan lancar dan menyenangkan.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
