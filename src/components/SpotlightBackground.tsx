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
      {/* Aurora Orbs */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 transition-opacity duration-700">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-sky-blue/30 blur-[120px] animate-aurora-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-orange/20 blur-[120px] animate-aurora-2" />
        <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] rounded-full bg-brand-sky-blue/20 blur-[100px] animate-aurora-3" />
      </div>

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
