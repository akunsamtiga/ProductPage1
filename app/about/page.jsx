// app/about/page.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section className="px-6 lg:px-16 py-10 lg:py-16 bg-gray-50">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl lg:text-5xl font-bold mb-6 text-blue-900"
        >
          Tentang SkyWings
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-lg lg:text-xl text-gray-700 leading-relaxed"
        >
          SkyWings didirikan untuk memberikan pengalaman penerbangan yang aman, nyaman, dan terjangkau. Dengan tim profesional dan teknologi canggih, setiap perjalanan Anda adalah pengalaman yang tak terlupakan.
        </motion.p>
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Misi', 'Visi'].map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              {item} Kami
            </h3>
            <p className="text-gray-600">
              {item === 'Misi' 
                ? 'Menyediakan pengalaman penerbangan inovatif dengan harga terjangkau.'
                : 'Mewujudkan dunia yang lebih terhubung melalui layanan penerbangan berkualitas.'}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}