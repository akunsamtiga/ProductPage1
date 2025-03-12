"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";

export default function About() {
  // Data untuk timeline milestones
  const milestones = [
    {
      year: "2015",
      title: "Pendirian Perusahaan",
      description: "SkyWings didirikan dengan visi baru dalam industri penerbangan."
    },
    {
      year: "2017",
      title: "Inovasi Teknologi",
      description: "Meluncurkan sistem pemesanan online yang revolusioner."
    },
    {
      year: "2019",
      title: "Ekspansi Layanan",
      description: "Memperluas jaringan penerbangan domestik dan internasional."
    },
    {
      year: "2021",
      title: "Penghargaan Industri",
      description: "Diakui sebagai perusahaan penerbangan dengan inovasi terdepan."
    },
  ];

  // Data untuk tim profesional
  const team = [
    { name: "Dewi", role: "CEO", image: "/images/team1.jpg" },
    { name: "Budi", role: "CTO", image: "/images/team2.jpg" },
    { name: "Siti", role: "COO", image: "/images/team3.jpg" },
    { name: "Andi", role: "Head of Marketing", image: "/images/team4.jpg" },
    { name: "Rina", role: "Head of Operations", image: "/images/team5.jpg" },
    { name: "Wawan", role: "Chief Engineer", image: "/images/team6.jpg" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-gray-50">
      {/* Background Pattern (Contoh SVG abstrak sebagai dekorasi) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 800 600"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e0e7ff" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#bgGradient)" />
          <circle cx="200" cy="150" r="80" fill="#c7d2fe" opacity="0.5" />
          <circle cx="600" cy="450" r="120" fill="#a5b4fc" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="relative z-10 px-6 lg:px-16 py-10 lg:py-16">
        {/* Overview Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-6xl font-extrabold mb-8 text-blue-900 tracking-tight"
          >
            Tentang SkyWings
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            SkyWings didirikan untuk memberikan pengalaman penerbangan yang aman, nyaman, dan terjangkau.
            Dengan tim profesional dan teknologi canggih, setiap perjalanan Anda adalah pengalaman yang tak terlupakan.
          </motion.p>
        </motion.div>

        {/* Misi & Visi Section */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {["Misi", "Visi"].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-10 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1"
            >
              <motion.h3
                variants={fadeInLeft}
                className="text-3xl font-bold mb-6 text-blue-800"
              >
                {item} Kami
              </motion.h3>
              <motion.p
                variants={fadeInRight}
                className="text-lg text-gray-600"
              >
                {item === "Misi"
                  ? "Menyediakan pengalaman penerbangan inovatif dengan harga terjangkau, menggunakan teknologi mutakhir dan pelayanan terbaik."
                  : "Mewujudkan dunia yang lebih terhubung melalui layanan penerbangan berkualitas yang mengutamakan keselamatan, kenyamanan, dan efisiensi."}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Timeline / Perjalanan Kami */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-12"
          >
            Perjalanan Kami
          </motion.h2>
          <div className="relative">
            {/* Garis timeline vertikal */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 p-6 bg-white rounded-xl shadow-xl">
                    <h4 className="text-2xl font-bold text-blue-800">{milestone.title}</h4>
                    <p className="mt-2 text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-blue-900 mb-12"
          >
            Tim Profesional Kami
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-2xl p-6 transform transition-all hover:-translate-y-2 hover:shadow-3xl"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                </div>
                <h4 className="text-2xl font-bold text-blue-800">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
