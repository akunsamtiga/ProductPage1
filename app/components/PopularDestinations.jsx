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

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      aria-label="Previous destination"
    >
      <FaChevronLeft className="text-lg text-gray-700" />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      aria-label="Next destination"
    >
      <FaChevronRight className="text-lg text-gray-700" />
    </button>
  );
}

function QuickViewModal({ isOpen, onClose, destination }) {
  if (!isOpen || !destination) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          className="bg-white rounded-2xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden">
            <Image
              src={destination.imgUrl}
              alt={`${destination.title} destination`}
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 id="modal-title" className="text-2xl font-bold text-gray-900 mb-2">
            {destination.title}
          </h3>
          <p className="text-gray-700 mb-4">{destination.description}</p>
          <div className="flex items-center mb-4" aria-label="Rating: 4.5 stars">
            <FaStar className="text-yellow-500 mr-1" aria-hidden="true" />
            <span className="text-gray-700">4.5</span>
          </div>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-2 rounded-full transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Close modal"
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
    slidesToShow: Math.min(popularDestinationsData.length, 3),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(popularDestinationsData.length, 2),
        },
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1,
          arrows: false
        } 
      },
    ],
  };

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedDestination(null);
    setModalOpen(false);
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      id="destinations" 
      className="px-6 lg:px-16 py-8 lg:py-16 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="destinations-heading"
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="max-w-7xl mx-auto text-center mb-8"
      >
        <motion.h2
          id="destinations-heading"
          variants={fadeInUp}
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
        >
          Destinasi Terpopuler
        </motion.h2>
        <motion.p 
          variants={fadeInUp} 
          className="text-gray-700 mb-4"
        >
          Pilihan destinasi favorit untuk liburan Anda
        </motion.p>
      </motion.div>

      {/* Slider */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <Slider {...settings}>
          {popularDestinationsData.map((dest) => (
            <motion.div
              key={dest.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="p-4"
            >
              <button
                onClick={() => openModal(dest)}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label={`View details about ${dest.title}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dest.imgUrl}
                    alt={`${dest.title} destination`}
                    fill
                    priority={false}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </span>
                  </div>
                  {dest.discount && (
                    <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 rounded-tr-lg">
                      {dest.discount}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {dest.title}
                  </h3>
                  <p className="text-gray-700 mb-2 line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="flex items-center" aria-label="Rating: 4.5 stars">
                    <FaStar className="text-yellow-500 mr-1" aria-hidden="true" />
                    <span className="text-gray-700">4.5</span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      <QuickViewModal
        isOpen={modalOpen}
        onClose={closeModal}
        destination={selectedDestination}
      />
    </section>
  );
}