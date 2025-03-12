// app/page.jsx
"use client";
import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import PopularDestinations from "./components/PopularDestinations";
import JourneySection from "./components/JourneySection";
import PromoSection from "./components/PromoSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
const TestimonialsSection = dynamic(() => import("./components/TestimonialsSection"), { ssr: false });
import FAQSection from "./components/FAQSection";
import Partner from "./components/Partner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <JourneySection />
      <PromoSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Partner />
    </>
  );
}
