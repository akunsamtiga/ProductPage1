// app/components/PricingSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function PricingSection() {
  const plans = [
    {
      id: 1,
      title: "Economy Class",
      price: "$99/ticket",
      description: "Pilihan ideal untuk perjalanan hemat dengan kenyamanan standar.",
      features: ["1 Bagasi Kabin", "Makanan Ringan", "Check-in Online"],
    },
    {
      id: 2,
      title: "Business Class",
      price: "$299/ticket",
      description: "Kenyamanan ekstra dengan layanan premium untuk perjalanan bisnis.",
      features: ["2 Bagasi Kabin", "Akses Lounge Eksklusif", "Makanan Premium", "Prioritas Boarding"],
    },
    {
      id: 3,
      title: "First Class",
      price: "$799/ticket",
      description: "Pengalaman terbang mewah dengan fasilitas eksklusif.",
      features: ["Suite Pribadi", "Makanan Fine Dining", "Layanan Pribadi 24/7", "Akses Ruang VIP", "Check-in Prioritas"],
    },
  ];

  return (
    <section 
      id="pricing" 
      className="px-6 lg:px-16 py-16 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-200"
      aria-labelledby="pricing-heading"
    >
      {/* Header Section */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <motion.h2 
          id="pricing-heading"
          variants={fadeInUp}
          className="text-3xl md:text-4xl py-2 lg:text-5xl font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #e2f6ff, #ffffff)",
            WebkitBackgroundClip: "text",
          }}
        >
          Flexible Pricing Plans
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-lg lg:text-xl text-gray-300 mt-3"
        >
          Find the perfect plan that suits your needs.
        </motion.p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.article 
            key={plan.id} 
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`relative bg-gray-800 text-white rounded-3xl border border-transparent p-8 shadow-lg transition-all duration-300 flex flex-col
                        ${index === 1 ? "border-blue-200 shadow-blue-500/30 md:scale-[1.02]" : "hover:shadow-gray-700/30"}`}
            aria-labelledby={`plan-${plan.id}-title`}
          >
            <div>
              {/* Plan Title & Description */}
              <h3 id={`plan-${plan.id}-title`} className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-400 text-lg mb-4">{plan.description}</p>
              
              {/* Price */}
              <div className="text-3xl lg:text-4xl font-extrabold my-6 bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #c7eeff, #ffe1e1)",
                  WebkitBackgroundClip: "text",
                }}
              >
                {plan.price}
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <svg 
                      className="w-5 h-5 text-green-400 shrink-0" 
                      aria-hidden="true" 
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-base md:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Button */}
            <div className="mt-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-xl font-semibold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                style={{
                  background: "linear-gradient(135deg, #e2eaff, #ffe1e7)",
                  color: "#111827",
                  boxShadow: "0 4px 20px rgba(0, 110, 169, 0.4)"
                }}
                aria-label={`Choose ${plan.title} plan`}
              >
                Choose Plan
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}