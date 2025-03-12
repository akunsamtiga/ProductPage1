"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";

export default function PromoSection() {
  return (
    <section id="promo" className="px-6 lg:px-16 py-16 bg-gradient-to-r from-blue-50 to-white">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Image with Elegant Overlay & Hover Animation */}
        <motion.div 
          variants={fadeInLeft}
          className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image 
            src="/images/beach.jpg" 
            alt="Promo" 
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent  to-red-400 opacity-60"></div>
          </motion.div>
        </motion.div>

        {/* Right Text Content with Text Clip Masking and Button Animation */}
        <motion.div 
          variants={fadeInRight}
          className="space-y-6"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right,rgb(175, 30, 30),rgb(212, 188, 6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            UNLEASH WANDERLUST WITH SKYWINGS
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dapatkan diskon spesial untuk perjalanan pertama Anda!
          </motion.p>
          <motion.div 
            className="text-5xl font-extrabold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              backgroundImage: "linear-gradient(to right,rgb(175, 30, 30),rgb(212, 171, 6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            20% OFF
          </motion.div>
          <motion.button 
            className="bg-red-800 hover:bg-red-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book A Flight Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
