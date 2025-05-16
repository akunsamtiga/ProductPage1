"use client";
import React from "react";
import Image from "next/image";
import { popularDestinationsData } from "../data/destinations";
import { FaStar } from "react-icons/fa";

export default function PopularDestinations() {
  return (
    <section
      id="destinations"
      className="bg-white py-16 px-4 sm:px-8 lg:px-16"
      aria-labelledby="destinations-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="destinations-heading"
            className="text-4xl font-extrabold text-gray-900 mb-2"
          >
            Destinasi Terpopuler
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Jelajahi tempat liburan favorit yang dipilih oleh para pelancong
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {popularDestinationsData.map((dest) => (
            <article
              key={dest.id}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative w-full h-64">
                <Image
                  src={dest.imgUrl}
                  alt={dest.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {dest.discount && (
                  <div className="absolute top-4 left-4 bg-black text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {dest.discount} OFF
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {dest.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {dest.description}
                </p>
                <div className="flex items-center text-sm text-yellow-500">
                  <FaStar className="mr-1" />
                  <span className="text-gray-700">4.5 rating</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
