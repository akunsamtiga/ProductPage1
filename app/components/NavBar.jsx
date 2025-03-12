// app/components/NavBar.jsx
"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary tracking-wider">SkyWings</div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Contact", "Blog"].map((item) => (
            <a 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="relative text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button 
          className="md:hidden text-primary text-2xl focus:outline-none"
          onClick={toggleNav}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col px-6 py-4 space-y-2">
              {["Home", "About", "Services", "Contact", "Blog"].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={toggleNav}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}