// app/components/TestimonialsSection.jsx
"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { testimonialsData } from "../data/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1 } }],
  };

  return (
    <section id="testimonials" className="px-6 lg:px-16 py-16 bg-white">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
        >
          What Our Customers Say
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-700"
        >
          Testimoni dari pelanggan setia kami
        </motion.p>
      </motion.div>

      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <motion.div 
            key={testimonial.id} 
            variants={fadeInUp}
            className="p-4"
          >
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.comment}"</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}