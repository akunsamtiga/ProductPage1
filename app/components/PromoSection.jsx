// app/components/PromoSection.jsx
"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../utils/animations";

export default function PromoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="promo"
      className="px-6 lg:px-16 pt-8 pb-0 lg:pb-16 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <motion.div
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Image with overlay */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInLeft}
          className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/beach.jpg"
            alt="Pantai promo Skywings"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-400 opacity-60" />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInRight}
          className="space-y-6 text-center"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(175, 30, 30), rgb(212, 188, 6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            WAKTUNYA LIBURAN DENGAN SKYWINGS
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Dapatkan diskon spesial untuk perjalanan pertama Anda!
          </motion.p>

          <motion.div
            className="text-5xl font-extrabold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(175, 30, 30), rgb(212, 171, 6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            role="presentation"
            aria-hidden="true"
          >
            20% OFF
          </motion.div>

          <motion.button
            className="bg-red-800 hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pesan Tiket Sekarang
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
