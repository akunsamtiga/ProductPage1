"use client";
import React from "react";

const RainEffect = () => {
  // Membuat 50 raindrop dengan nilai acak
  const raindrops = Array.from({ length: 50 }, (_, i) => {
    const left = Math.random() * 100; // posisi horizontal acak (%)
    const delay = Math.random() * 1; // delay animasi acak (detik)
    const duration = 0.5 + Math.random(); // durasi animasi acak
    return { left, delay, duration };
  });

  return (
    <>
      <div className="rain">
        {raindrops.map((drop, i) => (
          <div
            key={i}
            className="raindrop"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration + 1}s`,
            }}
          ></div>
        ))}
      </div>
      <style jsx>{`
        .rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }
        .raindrop {
          position: absolute;
          top: -10px;
          width: 2px;
          height: 15px;
          background: rgba(255, 255, 255, 0.8);
          animation: fall linear infinite;
        }
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </>
  );
};

export default RainEffect;
