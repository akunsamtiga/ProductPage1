"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="relative px-4 md:px-6 lg:px-16 py-12 lg:py-28 bg-gradient-to-br from-blue-100 via-gray-100 to-white overflow-hidden"
    >
      {/* Animated Blob Background */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <svg
          className="absolute inset-x-0 bottom-0 h-[800px] w-full text-gray-100"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
        >
          <path
            fill="currentColor"
            d="M0 0h1440v600H0V0z"
            fillOpacity={0.15}
            clipPath="url(#blob1)"
          />
          <defs>
            <clipPath id="blob1">
              <path d="M-47 542.2c-39.8-17.4 24.2-38.4 64-44.8 65.3-10.5 100.7-5.3 144 17.8 55.2 29.2 84.8 57.5 144 57.5s88.8-28.3 144-57.5c43.3-22.5 78.7-28.3 144-17.8 39.8 6.4 104.2 34.4 144 44.8 83.8 23.6 144 14.6 144-22.5V0H0v542.2z" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          className="order-2 lg:order-1 text-center lg:text-left relative"
        >
          {/* Airplane animation untuk mobile */}
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-72 -left-10 w-[200px] md:top-10 md:-left-6 md:w-[250px] lg:hidden z-[5]"
          >
            <motion.div
              animate={{ x: ["-10%", "10%", "-10%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/plane.png"
                alt="Airplane"
                width={250}
                height={250}
                className="opacity-100"
              />
            </motion.div>
          </motion.div>

          {/* Animated Heading dengan text clip masking */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1e40af, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: -20, scale: 0.95, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            Experience The Magic
            <br />
            Of Flight!
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-700 text-lg lg:text-xl mb-10 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Temukan penawaran terbaik untuk perjalanan Anda. Nikmati kemudahan
            pemesanan tiket dan pengalaman yang tak terlupakan bersama SkyWings.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-6 items-center justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-5 rounded-full font-semibold text-white shadow-lg transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="relative z-10">Book a Flight</span>
              <span className="absolute inset-0 bg-white/20 group-hover:bg-white/40 transition-opacity rounded-full"></span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVideo(true)}
              className="relative group bg-white px-8 py-5 rounded-full font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:bg-gray-100 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaPlay className="mr-3 w-5 h-5 text-blue-600" />
              <span className="relative z-10">Watch Video</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Airplane animation untuk desktop */}
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="order-1 lg:order-2 relative h-[300px] lg:h-[500px] w-full hidden lg:block"
        >
          <motion.div
            animate={{ y: ["0%", "-5%", "0%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/plane.png"
              alt="Airplane"
              fill
              className="object-contain object-right-bottom lg:object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
        </motion.div>
      </div>

      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
    </motion.section>
  );
}
