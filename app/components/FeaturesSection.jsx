"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { FaRocket, FaMobileAlt, FaLock, FaRegSmile } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    { 
      id: 1, 
      icon: FaRocket, 
      title: "Fast Performance", 
      description: "Nikmati kecepatan luar biasa dengan platform yang dioptimalkan." 
    },
    { 
      id: 2, 
      icon: FaMobileAlt, 
      title: "Responsive Design", 
      description: "Desain modern yang beradaptasi di semua perangkat." 
    },
    { 
      id: 3, 
      icon: FaLock, 
      title: "Secure Payments", 
      description: "Transaksi aman dengan sistem keamanan terbaik." 
    },
    { 
      id: 4, 
      icon: FaRegSmile, 
      title: "User Friendly", 
      description: "Antarmuka mudah digunakan untuk pengalaman optimal." 
    },
  ];

  // Variants untuk animasi ikon dengan hover (rotasi dan scaling)
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <section id="features" className="px-6 lg:px-16 py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right,rgb(143, 143, 143),rgb(73, 73, 73))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experience The Magic<br/>Of Flight!
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-lg lg:text-xl text-gray-700"
        >
          Teknologi terkini untuk pengalaman tak terlupakan
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <motion.div 
            key={feature.id} 
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-t from-gray-300/30 via-gray-400/30 to-gray-500/30 backdrop-blur-xl rounded-tl-[4rem] rounded-b-2xl rounded-tr-[10px] p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:shadow-gray-400/40"
          >
            <motion.div 
              className="mb-8 text-6xl text-gray-800"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <feature.icon />
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold mb-2 text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
