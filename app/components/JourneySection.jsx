"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations";

export default function JourneySection() {
  // State form
  const [step, setStep] = useState(1);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [flightClass, setFlightClass] = useState("Economy");
  const [showResultModal, setShowResultModal] = useState(false);

  // Hasil form sebagai string
  const formResultText = `Kota Asal: ${fromCity}
Kota Tujuan: ${toCity}
Tanggal Berangkat: ${departureDate}
Tanggal Kembali: ${returnDate}
Jumlah Penumpang: ${passengers}
Kelas: ${flightClass}`;

  // Fungsi untuk menyalin ke clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(formResultText);
    alert("Informasi telah disalin ke clipboard!");
  };

  // WhatsApp link
  const waNumber = "6281234567890"; // Ganti sesuai nomor Anda
  const waMessage = encodeURIComponent(
    `Halo, saya ingin informasi lebih lanjut mengenai penerbangan:\n${formResultText}`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  // Fungsi untuk menampilkan modal hasil
  const handleFinish = () => {
    setShowResultModal(true);
  };

  // Variants untuk transisi form step
  const formStepVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section
      id="journey"
      className="px-6 lg:px-16 py-16 bg-gradient-to-r from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-10 shadow-xl transform transition-all hover:scale-105"
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1e40af, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Journey To The Skies<br />Made Simple!
          </motion.h2>
          <motion.ul
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              "Mudah dalam pemesanan",
              "Layanan pelanggan 24/7",
              "Keamanan & kenyamanan terjamin",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 text-lg text-gray-700"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <span className="bg-blue-600 text-white rounded-full p-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Form */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl space-y-8"
        >
          <h3 className="text-2xl font-bold text-blue-900">Form Penerbangan</h3>
          <AnimatePresence exitBeforeEnter>
            {step === 1 && (
              <motion.div
                key="step1"
                variants={formStepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <input
                  type="text"
                  placeholder="Kota Asal"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Kota Tujuan"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition-colors"
                />
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Selanjutnya
                </button>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={formStepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition-colors"
                />
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition-colors"
                />
                <div className="flex justify-between gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg transition-colors"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Selanjutnya
                  </button>
                </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={formStepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <input
                  type="number"
                  placeholder="Jumlah Penumpang"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition-colors"
                />
                <select
                  value={flightClass}
                  onChange={(e) => setFlightClass(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition-colors"
                >
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
                <div className="flex justify-between gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg transition-colors"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={handleFinish}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Selesai
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Hasil Form */}
      <AnimatePresence>
        {showResultModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowResultModal(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl transition-colors"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Detail Penerbangan
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-6 whitespace-pre-line text-gray-800">
                {formResultText}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                >
                  Salin Informasi
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
                >
                  Chat WA
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
