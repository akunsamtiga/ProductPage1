// app/components/PopularDestinations.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { popularDestinationsData } from "../data/destinations";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom slider arrow dengan ikon
function PrevArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: "10px",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-xl text-gray-700" />
    </div>
  );
}

function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: "10px",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <FaChevronRight className="text-xl text-gray-700" />
    </div>
  );
}

// Quick View Modal untuk menampilkan detail destinasi
function QuickViewModal({ isOpen, onClose, destination }) {
  if (!isOpen || !destination) return null;
  return (
    <AnimatePresence>
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
          <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden">
            <Image
              src={destination.imgUrl}
              alt={destination.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {destination.title}
          </h3>
          <p className="text-gray-700 mb-4">{destination.description}</p>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-gray-700">4.5</span>
          </div>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-2 rounded-full transition-colors hover:bg-primary-dark"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PopularDestinations() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      popularDestinationsData.length < 3
        ? popularDestinationsData.length
        : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            popularDestinationsData.length < 2
              ? popularDestinationsData.length
              : 2,
        },
      },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDestination(null);
    setModalOpen(false);
  };

  return (
    <section id="destinations" className="px-6 lg:px-16 py-8 bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
        >
          Popular Destinations
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
          Pilihan destinasi favorit untuk liburan Anda
        </motion.p>
      </motion.div>

      {/* Slider dengan kartu destinasi */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Slider {...settings}>
          {popularDestinationsData.map((dest) => (
            <motion.div
              key={dest.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 cursor-pointer"
              onClick={() => openModal(dest)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group">
                <div className="relative h-64 overflow-hidden">
                  {/* Image dengan animasi zoom */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={dest.imgUrl}
                      alt={dest.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Overlay View Details */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                  >
                    <span className="text-white font-semibold text-lg">
                      View Details
                    </span>
                  </motion.div>
                  {/* Badge diskon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 rounded-tr-lg"
                  >
                    {dest.discount}
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {dest.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{dest.description}</p>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-gray-700">4.5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={modalOpen}
        onClose={closeModal}
        destination={selectedDestination}
      />
    </section>
  );
}
