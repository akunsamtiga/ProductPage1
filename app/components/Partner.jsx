// app/components/Partner.jsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Data logo partner menggunakan file lokal PNG
const partners = [
  { id: 1, name: "Telkomsel", logo: "/images/telkomsel.png" },
  { id: 2, name: "Bank Mandiri", logo: "/images/mandiri.png" },
  { id: 3, name: "Gojek", logo: "/images/gojek.png" },
  { id: 4, name: "Tokopedia", logo: "/images/tokopedia.png" },
  { id: 5, name: "Traveloka", logo: "/images/traveloka.png" },
  { id: 6, name: "BRI", logo: "/images/bri.png" },
];

// Data statistik (8 data)
const statisticsData = [
  { name: "Users", value: 200 },
  { name: "Projects", value: 85 },
  { name: "Partners", value: 65 },
  { name: "Awards", value: 80 },
  { name: "Active Flights", value: 50 },
  { name: "Customer Reviews", value: 70 },
  { name: "Monthly Bookings", value: 90 },
  { name: "Global Reach", value: 80 },
];

export default function PartnerStatsSection() {
  return (
    <section
      id="partners-stats"
      className="px-6 lg:px-16 py-12 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Header for Partners */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Mitra Terpercaya Kami di Indonesia
        </h2>
        <p className="text-lg text-gray-600">
        Kami telah berkolaborasi dengan perusahaan terkemuka Indonesia.
        </p>
      </motion.div>

      {/* Logos Section with Marquee Animation and Gradient Overlays */}
      <div className="relative max-w-5xl mx-auto overflow-hidden mb-16">
        <motion.div
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {partners.concat(partners).map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}`}
              className="w-28 h-28 relative flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                objectFit="contain"
              />
            </motion.div>
          ))}
        </motion.div>
        {/* Overlay gradient putih di kiri */}
        <div className="absolute left-0 top-0 w-16 h-full pointer-events-none bg-gradient-to-r from-gray-50 to-transparent" />
        {/* Overlay gradient putih di kanan */}
        <div className="absolute right-0 top-0 w-16 h-full pointer-events-none bg-gradient-to-l from-gray-50 to-transparent" />
      </div>

      {/* Header for Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Statistics</h2>
      </motion.div>

      {/* Statistics Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={statisticsData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#4b5563" />
            <YAxis stroke="#4b5563" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f3f4f6",
                border: "none",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#374151" }}
            />
            <Legend />
            <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
}
