// app/components/ScrollToTopButton.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          type="button"
          role="button"
          aria-label="Scroll to top"
          title="Scroll to top"
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-gray-700 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 z-50"
        >
          <FaArrowUp size={20} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
