import React, { useState, useEffect } from 'react';

export const SpotlightBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cyber Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] transition-opacity duration-700"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
        }}
      />

      {/* Light Mode Spotlight */}
      <div
        className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.8), transparent)`
        }}
      />

      {/* Dark Mode Spotlight */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePos.x}px ${mousePos.y}px, rgba(147, 188, 252, 0.15), transparent)`
        }}
      />
    </div>
  );
};

export default SpotlightBackground;
