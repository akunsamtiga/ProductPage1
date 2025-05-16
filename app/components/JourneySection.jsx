// app/components/JourneySection.jsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations";

export default function JourneySection() {
  const [step, setStep] = useState(1);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [flightClass, setFlightClass] = useState("Economy");
  const [showResultModal, setShowResultModal] = useState(false);

  const formResultText = `Kota Asal: ${fromCity}
Kota Tujuan: ${toCity}
Tanggal Berangkat: ${departureDate}
Tanggal Kembali: ${returnDate}
Jumlah Penumpang: ${passengers}
Kelas: ${flightClass}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formResultText);
    alert("Informasi telah disalin ke clipboard!");
  };

  const waNumber = "6281234567890";
  const waMessage = encodeURIComponent(
    `Halo, saya ingin informasi lebih lanjut mengenai penerbangan:\n${formResultText}`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  const handleFinish = () => {
    setShowResultModal(true);
  };

  const formStepVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="px-6 lg:px-16 py-8 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kiri: Info */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-10 shadow-xl transform transition-all hover:scale-[1.01]"
        >
          <motion.h2
            id="journey-title"
            variants={fadeInLeft}
            className="text-3xl md:text-5xl font-black leading-[1.1] mb-4 p-2 py-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #1e40af, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Perjalanan ke Manapun
            <br />Makin Mudah!
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
                <span
                  className="bg-blue-600 text-white rounded-full p-1"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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

        {/* Kanan: Form */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl space-y-8"
        >
          <h3 className="text-2xl font-bold text-blue-900">Form Penerbangan</h3>
          <AnimatePresence mode="wait">
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
                <label className="block">
                  <span className="sr-only">Kota Asal</span>
                  <input
                    type="text"
                    placeholder="Kota Asal"
                    autoComplete="address-level1"
                    aria-label="Kota Asal"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="input-primary"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Kota Tujuan</span>
                  <input
                    type="text"
                    placeholder="Kota Tujuan"
                    autoComplete="address-level2"
                    aria-label="Kota Tujuan"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="input-primary"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-primary"
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
                <label className="block">
                  <span className="sr-only">Tanggal Berangkat</span>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    aria-label="Tanggal Berangkat"
                    className="input-primary"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Tanggal Kembali</span>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    aria-label="Tanggal Kembali"
                    className="input-primary"
                  />
                </label>
                <div className="flex justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary"
                  >
                    Kembali
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-primary"
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
                <label className="block">
                  <span className="sr-only">Jumlah Penumpang</span>
                  <input
                    type="number"
                    placeholder="Jumlah Penumpang"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="input-primary"
                    aria-label="Jumlah Penumpang"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Kelas Penerbangan</span>
                  <select
                    value={flightClass}
                    onChange={(e) => setFlightClass(e.target.value)}
                    className="input-primary"
                    aria-label="Kelas Penerbangan"
                  >
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </label>
                <div className="flex justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-secondary"
                  >
                    Kembali
                  </button>
                  <button
                    type="button"
                    onClick={handleFinish}
                    className="btn-success"
                  >
                    Selesai
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showResultModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
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
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
                aria-label="Tutup"
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
                  type="button"
                  onClick={handleCopy}
                  className="btn-primary"
                >
                  Salin Informasi
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-success"
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
