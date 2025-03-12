"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function PricingSection() {
  const plans = [
    {
      id: 1,
      title: "Basic",
      price: "$9.99/mo",
      description: "Perfect for individuals starting out.",
      features: ["1 Project", "Basic Support", "5GB Storage"],
    },
    {
      id: 2,
      title: "Standard",
      price: "$19.99/mo",
      description: "Best for growing businesses.",
      features: ["5 Projects", "Priority Support", "50GB Storage", "Advanced Analytics"],
    },
    {
      id: 3,
      title: "Premium",
      price: "$29.99/mo",
      description: "Ideal for professionals & enterprises.",
      features: ["Unlimited Projects", "24/7 Support", "1TB Storage", "Advanced Security", "AI Optimization"],
    },
  ];

  return (
    <section id="pricing" className="px-6 lg:px-16 py-16 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-200">
      {/* Header Section */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl md:text-4xl py-2 lg:text-6xl font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right,rgb(226, 246, 255),rgb(255, 255, 255))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
          <motion.div 
            key={plan.id} 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`relative bg-gray-800 text-white rounded-3xl hover:border-2 hover:border-blue-200 p-8 shadow-lg transition-all duration-300 flex flex-col
                        ${index === 1 ? "hover:border-2 hover:border-blue-200 shadow-blue-500/50 scale-105" : "hover:shadow-lg hover:shadow-gray-700/50"}`}
          >
            <div>
              {/* Plan Title & Description */}
              <h3 className="text-3xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-400 text-lg mb-4">{plan.description}</p>
              {/* Price */}
              <div className="text-4xl md:text-3xl lg:text-4xl font-extrabold my-6 bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, rgb(199, 238, 255),rgb(255, 225, 225)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {plan.price}
              </div>
              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-lg">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Tombol diposisikan di bagian bawah */}
            <div className="mt-auto">
              <motion.button 
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-xl font-semibold transition-all text-lg"
                style={{
                  background: "linear-gradient(135deg,rgb(226, 234, 255),rgb(255, 225, 231))",
                  color: "black",
                  boxShadow: "0px 4px 20px rgba(0, 110, 169, 0.64)"
                }}
              >
                Choose Plan
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
