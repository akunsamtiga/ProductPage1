// app/blog/[slug]/page.jsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { blogPosts } from "../../data/blog";
import Link from "next/link";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Artikel tidak ditemukan</p>
      </div>
    );
  }

  return (
    <section className="px-6 lg:px-16 py-10 lg:py-16 bg-gray-50">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl font-bold mb-6 text-blue-900"
        >
          {post.title}
        </motion.h1>
        
        <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
        
        <motion.div 
          variants={fadeInUp}
          className="prose prose-lg prose-blue"
        >
          <p>{post.content}</p>
        </motion.div>

        <Link href="/blog" className="mt-8 inline-block">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Kembali ke Blog
          </button>
        </Link>
      </motion.div>
    </section>
  );
}