// app/components/VideoModal.jsx
"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl h-[400px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
        >
          <FaTimes size={24} />
        </button>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/f4zyjLyBp64"
          title="Sample Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
}