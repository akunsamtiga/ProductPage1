// app/components/Footer.jsx
"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-5 bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2025 SkyWings. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:text-primary transition-colors">Sitemap</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}