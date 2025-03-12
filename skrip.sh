#!/bin/bash
# Skrip ini akan membuat struktur direktori dan file Next.js lengkap dengan kode

echo "Membuat direktori..."
mkdir -p app/components app/data app/utils public/images

echo "Membuat file data..."

# app/data/destinations.js
cat << 'EOF' > app/data/destinations.js
export const popularDestinationsData = [
  {
    id: 1,
    title: "Forest Wild Life",
    description: "Nikmati keindahan hutan yang asri.",
    imgUrl: "/images/forest.jpg",
    discount: "10%",
  },
  {
    id: 2,
    title: "Beach Paradise",
    description: "Rasakan sensasi pantai tropis.",
    imgUrl: "/images/beach.jpg",
    discount: "15%",
  },
  {
    id: 3,
    title: "Mountain Escape",
    description: "Pemandangan pegunungan menakjubkan.",
    imgUrl: "/images/mountain.jpg",
    discount: "20%",
  },
  {
    id: 4,
    title: "City Lights",
    description: "Menjelajahi keramaian kota besar.",
    imgUrl: "/images/city.jpg",
    discount: "25%",
  },
];
EOF

# app/data/testimonials.js
cat << 'EOF' > app/data/testimonials.js
export const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    image: "/images/testimonial1.jpg",
    comment:
      "Pelayanan SkyWings sangat memuaskan! Perjalanan terasa nyaman dan menyenangkan.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/images/testimonial2.jpg",
    comment:
      "Tiket mudah dipesan, harga terjangkau, dan stafnya ramah. Highly recommended!",
  },
  {
    id: 3,
    name: "Robert Johnson",
    image: "/images/testimonial1.jpg",
    comment:
      "Pengalaman terbang yang luar biasa. Fasilitas dan hiburannya lengkap!",
  },
];
EOF

# app/data/faq.js
cat << 'EOF' > app/data/faq.js
export const faqData = [
  {
    id: 1,
    question: "Bagaimana cara memesan tiket?",
    answer:
      "Anda dapat memesan tiket melalui form pencarian di website kami atau melalui aplikasi mobile SkyWings.",
  },
  {
    id: 2,
    question: "Apakah ada layanan refund?",
    answer:
      "Kami menyediakan layanan refund sesuai dengan syarat dan ketentuan yang berlaku. Silakan hubungi customer service untuk info lebih lanjut.",
  },
  {
    id: 3,
    question: "Bisakah mengubah jadwal penerbangan?",
    answer:
      "Perubahan jadwal dapat dilakukan sebelum waktu keberangkatan, tergantung ketersediaan kursi dan ketentuan maskapai.",
  },
];
EOF

echo "Membuat file utilitas (animasi)..."

# app/utils/animations.js
cat << 'EOF' > app/utils/animations.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
EOF

echo "Membuat file komponen..."

# app/components/NavBar.jsx
cat << 'EOF' > app/components/NavBar.jsx
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">SkyWings</div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#destinations" className="hover:text-blue-600">
            Destinations
          </a>
          <a href="#journey" className="hover:text-blue-600">
            Journey
          </a>
          <a href="#promo" className="hover:text-blue-600">
            Promo
          </a>
          <a href="#testimonials" className="hover:text-blue-600">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-blue-600">
            FAQ
          </a>
        </div>

        {/* Icon Hamburger */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={toggleNav}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4">
              <a
                href="#home"
                className="py-2 border-b border-gray-200 hover:text-blue-600"
                onClick={toggleNav}
              >
                Home
              </a>
              <a
                href="#destinations"
                className="py-2 border-b border-gray-200 hover:text-blue-600"
                onClick={toggleNav}
              >
                Destinations
              </a>
              <a
                href="#journey"
                className="py-2 border-b border-gray-200 hover:text-blue-600"
                onClick={toggleNav}
              >
                Journey
              </a>
              <a
                href="#promo"
                className="py-2 border-b border-gray-200 hover:text-blue-600"
                onClick={toggleNav}
              >
                Promo
              </a>
              <a
                href="#testimonials"
                className="py-2 border-b border-gray-200 hover:text-blue-600"
                onClick={toggleNav}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="py-2 hover:text-blue-600"
                onClick={toggleNav}
              >
                FAQ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
EOF

# app/components/VideoModal.jsx
cat << 'EOF' > app/components/VideoModal.jsx
"use client";

import React from "react";
import { FaTimes } from "react-icons/fa";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-md shadow-lg w-full max-w-2xl h-[400px] flex items-center justify-center">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-gray-600 hover:text-gray-800"
        >
          <FaTimes />
        </button>
        {/* Konten Video (contoh: embed YouTube) */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/f4zyjLyBp64"
          title="Sample Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
EOF

# app/components/HeroSection.jsx
cat << 'EOF' > app/components/HeroSection.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-10 lg:py-16"
    >
      {/* Kiri: Teks */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="w-full lg:w-1/2 flex flex-col gap-5"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl lg:text-5xl font-bold leading-tight"
        >
          Experience The Magic Of Flight!
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-gray-600 text-base lg:text-lg"
        >
          Temukan penawaran terbaik untuk perjalanan Anda. Dapatkan kemudahan
          dalam pemesanan tiket, rencana perjalanan, dan pengalaman tak
          terlupakan bersama SkyWings.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <button className="mt-4 w-max bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md">
            Book a Flight
          </button>
          <button
            onClick={() => setShowVideo(true)}
            className="mt-4 w-max bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-md shadow-md"
          >
            Watch Video
          </button>
        </motion.div>
      </motion.div>

      {/* Kanan: Gambar Pesawat */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
      >
        <Image
          src="/images/plane.png"
          alt="Airplane"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Video Modal */}
      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
    </section>
  );
}
EOF

# app/components/PopularDestinations.jsx
cat << 'EOF' > app/components/PopularDestinations.jsx
"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { popularDestinationsData } from "../data/destinations";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PopularDestinations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="destinations"
      className="px-6 lg:px-16 py-10 lg:py-16 bg-gray-50"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl lg:text-3xl font-bold mb-2"
        >
          Popular Destinations
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-600">
          Pilihan destinasi favorit untuk liburan Anda
        </motion.p>
      </motion.div>

      <Slider {...settings}>
        {popularDestinationsData.map((dest) => (
          <motion.div
            key={dest.id}
            variants={fadeInUp}
            className="p-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={dest.imgUrl}
                  alt={dest.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{dest.title}</h3>
                <p className="text-gray-600 text-sm">{dest.description}</p>
                <span className="text-sm text-blue-600 font-semibold">
                  Diskon {dest.discount}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
EOF

# app/components/JourneySection.jsx
cat << 'EOF' > app/components/JourneySection.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations";

export default function JourneySection() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <section id="journey" className="px-6 lg:px-16 py-10 lg:py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-8"
      >
        {/* Kiri: Card Informasi */}
        <motion.div
          variants={fadeInLeft}
          className="bg-blue-50 p-6 rounded-lg w-full lg:w-1/2"
        >
          <h2 className="text-xl font-bold mb-3">
            Journey To The Skies Made Simple!
          </h2>
          <p className="text-gray-700 mb-4">
            Pesan tiket dengan mudah, atur jadwal perjalanan, dan nikmati
            fasilitas terbaik selama penerbangan Anda. Kami memberikan kemudahan
            untuk setiap langkah perjalanan.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Mudah dalam pemesanan</li>
            <li>Layanan pelanggan 24/7</li>
            <li>Keamanan & kenyamanan terjamin</li>
          </ul>
        </motion.div>

        {/* Kanan: Multi-Step Form */}
        <motion.div
          variants={fadeInRight}
          className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/2"
        >
          <h3 className="text-lg font-bold mb-4">Form Penerbangan</h3>
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Kota Asal</label>
                <input
                  type="text"
                  placeholder="Masukkan kota asal"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Kota Tujuan</label>
                <input
                  type="text"
                  placeholder="Masukkan kota tujuan"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                />
              </div>
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Selanjutnya
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Tanggal Berangkat
                </label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Tanggal Pulang
                </label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Kembali
                </button>
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Jumlah Penumpang
                </label>
                <input
                  type="number"
                  min="1"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Kelas Penerbangan
                </label>
                <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none">
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Selesai
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
EOF

# app/components/PromoSection.jsx
cat << 'EOF' > app/components/PromoSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";

export default function PromoSection() {
  return (
    <section id="promo" className="px-6 lg:px-16 py-10 lg:py-16 bg-blue-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-8"
      >
        {/* Kiri: Gambar (contoh promo) */}
        <motion.div
          variants={fadeInLeft}
          className="w-full lg:w-1/2 relative h-64 lg:h-80"
        >
          <Image
            src="/images/beach.jpg"
            alt="Promo"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>

        {/* Kanan: Text Promo */}
        <motion.div variants={fadeInRight} className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-2">
            UNLEASH WANDERLUST WITH SKYWINGS
          </h2>
          <p className="text-gray-700 mb-4">
            Dapatkan diskon spesial untuk perjalanan pertama Anda!
          </p>
          <div className="text-4xl font-extrabold text-blue-600 mb-4">
            20% OFF
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md">
            Book A Flight Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
EOF

# app/components/TestimonialsSection.jsx
cat << 'EOF' > app/components/TestimonialsSection.jsx
"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { testimonialsData } from "../data/testimonials";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="px-6 lg:px-16 py-10 lg:py-16 bg-white"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl lg:text-3xl font-bold mb-2"
        >
          What Our Customers Say
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-600">
          Testimoni dari pelanggan setia kami
        </motion.p>
      </motion.div>

      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={fadeInUp}
            className="px-4"
            whileHover={{ scale: 1.01 }}
          >
            <div className="bg-gray-50 shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="italic text-gray-700 mb-2">"{testimonial.comment}"</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
EOF

# app/components/FAQSection.jsx
cat << 'EOF' > app/components/FAQSection.jsx
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqData } from "../data/faq";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="px-6 lg:px-16 py-10 lg:py-16 bg-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl lg:text-3xl font-bold mb-2"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-600">
          Jawaban atas pertanyaan yang sering diajukan
        </motion.p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqData.map((faq) => (
          <motion.div
            key={faq.id}
            variants={fadeInUp}
            className="mb-4 bg-white shadow-md rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
            >
              {faq.question}
              <span>{activeFAQ === faq.id ? "-" : "+"}</span>
            </button>
            <AnimatePresence>
              {activeFAQ === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 pb-4"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
EOF

# app/components/Footer.jsx
cat << 'EOF' > app/components/Footer.jsx
"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-6 bg-gray-800 text-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 SkyWings. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:underline">
            Terms
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm hover:underline">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
EOF

# app/components/ScrollToTopButton.jsx
cat << 'EOF' > app/components/ScrollToTopButton.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
EOF

echo "Membuat file halaman utama (app/page.jsx)..."

# app/page.jsx
cat << 'EOF' > app/page.jsx
"use client";

import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PopularDestinations from "./components/PopularDestinations";
import JourneySection from "./components/JourneySection";
import PromoSection from "./components/PromoSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-800 overflow-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <HeroSection />

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* Journey Section */}
      <JourneySection />

      {/* Promo Section */}
      <PromoSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTopButton />
    </main>
  );
}
EOF

echo "Selesai: Semua file telah dibuat."
