// app/services/page.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

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
          Layanan Kami
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-lg text-gray-700"
        >
          Solusi lengkap untuk kebutuhan perjalanan Anda
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}