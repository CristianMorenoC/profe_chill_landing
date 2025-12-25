import { useState, useRef, useEffect } from 'react';

// Restored mousePos prop to enable JS physics calculations
export const LessonCard = ({path, title, index, mousePos}: {path: string, title: string, index: number, mousePos: {x: number, y: number}}) => {

  const cardRef = useRef<HTMLDivElement>(null);
  const [cardState, setCardState] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [opacity, setOpacity] = useState(0);
  const [cardPosition, setCardPosition] = useState({y: 0, inclination: 0});

  // Capture geometry once on mount/resize
  useEffect(() => {
    const updateGeometry = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCardState({
          // Center X and Y of the card
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        });
      }
    };

    const adjustCards = () => {
      
    }

    updateGeometry();
    window.addEventListener('resize', updateGeometry);
    // Adding scroll listener is important if the container scrolls but the page doesn't re-layout
    window.addEventListener('scroll', updateGeometry, { passive: true });

    
    return () => {
      window.removeEventListener('resize', updateGeometry);
      window.removeEventListener('scroll', updateGeometry);
    };
  }, []);

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(1);

  // Physics Calculations (Matched to SpotlightCard.jsx logic)
  // We use 15 as the dampening factor (10 was in my example, 20 in your code; 15 is a sweet spot)
  const dampening = 20;
  const shadowX = (cardState.x - mousePos.x) / dampening;
  const shadowY = (cardState.y - mousePos.y) / dampening;
  
  // Spotlight position relative to the card's top-left corner
  const spotlightX = mousePos.x - (cardState.x - cardState.width / 2);
  const spotlightY = mousePos.y - (cardState.y - cardState.height / 2);


  return (
    <div 
      id={`card-${index}`} 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card w-[80%] h-2/3 absolute left-1/2 rounded-3xl overflow-hidden border border-white/10 dark:border-slate-800 bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm transition-all duration-0 ease-out will-change-transform`}
      style={{
        // 1. Dynamic Shadow: Moves opposite to light source
        boxShadow: `
          ${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.25),
          0 0 0 1px rgba(0,0,0,0.05)
        `,
        // 2. 3D Tilt: Rotates based on shadow direction
        transform: `
          translateX(-50%)
          translateY(${index * -50}px) 
          rotate(${index * -3}deg)
        `,
        top: `${index}rem`,
        transformOrigin: 'bottom right',
        zIndex: (index * -1) + 100,
      }}
    >
      {/* Internal Spotlight - Light Mode */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(100px circle at ${spotlightX}px ${spotlightY}px, rgba(255,255,255,0.4), transparent 40%)`,
        }}
      />
      
      {/* Internal Spotlight - Dark Mode */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 dark:block hidden"
        style={{
          opacity,
          background: `radial-gradient(100px circle at ${spotlightX}px ${spotlightY}px, rgba(147, 188, 252, 0.1), transparent 40%)`,
        }}
      />

      <img id={`card-image-${index}`} src={`${path}`} alt={title} className={`card-image w-full h-full object-cover`}/>
    </div>
  )
}