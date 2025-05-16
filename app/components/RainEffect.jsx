// app/components/RainEffect.jsx
"use client";
import React, { useMemo } from "react";

const RainEffect = () => {
  // Memoize raindrops array to prevent recalculations on re-renders
  const raindrops = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {  // Reduced from 50 to 30 drops
      const left = Math.random() * 100;
      const delay = Math.random() * 1;
      const duration = 0.5 + Math.random() * 0.5;  // Reduced duration range
      return { left, delay, duration };
    });
  }, []);

  return (
    <div 
      className="rain-effect" 
      aria-hidden="true" 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
        willChange: 'transform'  // Hint to browser for better performance
      }}
    >
      {raindrops.map((drop, i) => (
        <div
          key={`raindrop-${i}`}
          style={{
            position: 'absolute',
            top: '-10px',
            left: `${drop.left}%`,
            width: '1px',  // Reduced from 2px
            height: '12px', // Reduced from 15px
            backgroundColor: 'rgba(255, 255, 255, 0.6)',  // Reduced opacity
            animation: `fall linear infinite ${drop.duration + 0.5}s ${drop.delay}s`,
            willChange: 'transform'  // Hint to browser for better performance
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(RainEffect);