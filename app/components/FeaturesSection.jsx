// app/components/FeaturesSection.jsx
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
      title: "Lightning-Fast Performance",
      description:
        "Rasakan performa luar biasa dengan platform yang dioptimalkan untuk kecepatan tinggi. Proses pemuatan halaman super cepat memastikan pengalaman pengguna yang mulus, tanpa hambatan, bahkan saat lalu lintas tinggi.",
    },
    {
      id: 2,
      icon: FaMobileAlt,
      title: "Seamless Responsive Design",
      description:
        "Desain modern dan adaptif yang terlihat sempurna di semua perangkat baik ponsel, tablet, maupun desktop. Setiap elemen UI disesuaikan agar interaktif dan nyaman digunakan di layar apa pun.",
    },
    {
      id: 3,
      icon: FaLock,
      title: "Top-Tier Secure Payments",
      description:
        "Sistem pembayaran terenkripsi yang menjamin transaksi aman dan terlindungi. Dengan lapisan keamanan ganda, setiap data pelanggan dan detail kartu kredit dijaga ketat dari ancaman siber.",
    },
    {
      id: 4,
      icon: FaRegSmile,
      title: "Intuitive User Experience",
      description:
        "Antarmuka ramah pengguna dengan navigasi sederhana dan fitur interaktif. Dirancang untuk memastikan pengguna, baik pemula maupun ahli, dapat mengakses layanan dan fitur dengan mudah dan cepat.",
    },
  ];

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="features"
      className="px-6 lg:px-16 py-20 bg-gradient-to-b from-gray-200 to-gray-300"
      aria-labelledby="features-title"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-10 md:mb-12"
      >
        <motion.h2
          id="features-title"
          variants={fadeInUp}
          className="text-3xl md:text-5xl p-2 font-black mb-4 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(143, 143, 143), rgb(73, 73, 73))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Menerapkan Teknologi Dalam
          <br />
          Penerbangan!
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg lg:text-xl text-gray-700"
        >
          Teknologi terkini untuk pengalaman yang tak terlupakan
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        role="list"
        aria-label="Feature list"
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-b from-white to-gray-50/30 backdrop-blur-xl rounded-tl-[4rem] rounded-b-2xl rounded-tr-[10px] p-8 transition-all duration-600 hover:-translate-y-3 shadow-lg hover:shadow-lg hover:shadow-gray-400/40"
              role="listitem"
              aria-label={feature.title}
            >
              <div className="flex items-center mb-2">
                <motion.div
                  className="text-2xl text-gray-800 mr-2"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  aria-hidden="true"
                >
                  <Icon />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 line-clamp-1">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                {feature.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
