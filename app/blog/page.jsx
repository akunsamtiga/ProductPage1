// app/blog/page.jsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { blogPosts } from "../data/blog";

export default function Blog() {
  return (
    <section className="px-6 lg:px-16 py-10 lg:py-16 bg-gray-50">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl lg:text-5xl font-bold mb-4 text-blue-900"
        >
          Blog Terbaru
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-lg lg:text-xl text-gray-700"
        >
          Tips perjalanan, promo tiket, dan informasi terbaru
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <motion.div 
            key={post.id} 
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
          >
            <div className="relative aspect-video">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-blue-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                Baca Selengkapnya
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}