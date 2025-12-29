import { useState, useRef, useEffect } from 'react';

interface LessonCardProps {
  path: string;
  title: string;
  index: number;
  scrollProgress: number; // Progress of THIS card dismissing
  activeProgress: number; // Progress of THIS card becoming the top one
  isPast: boolean;
  totalCards: number;
}

export const LessonCard = ({
  path,
  title,
  index,
  scrollProgress,
  activeProgress,
  isPast,
  totalCards
}: LessonCardProps) => {

  const cardRef = useRef<HTMLDivElement>(null);
  const [cardState, setCardState] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [opacity, setOpacity] = useState(0);

  // Capture geometry once on mount/resize
  const [slideDistance, setSlideDistance] = useState(800);
  const stackOffset = 20;

  useEffect(() => {
    const updateGeometry = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCardState({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        });
      }
    };

    updateGeometry();
    window.addEventListener('resize', updateGeometry);
    window.addEventListener('scroll', updateGeometry, { passive: true });

    return () => {
      window.removeEventListener('resize', updateGeometry);
      window.removeEventListener('scroll', updateGeometry);
    };
  }, []);

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(1);

  // Capture geometry once on mount/resize
  useEffect(() => {
    const handleResize = () => {
      setSlideDistance(window.innerHeight * 0.8);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate dynamic transform values
  // If scrollProgress > 0, this card is being dismissed
  const translateY = isPast
    ? 0 // After it's "past", it's tucked at the bottom of the stack (0 offset)
    : (index * -stackOffset) + (scrollProgress * slideDistance);

  const scale = isPast
    ? 0.8 // Smaller in background
    : 1 - (index * 0.02) - (scrollProgress * 0.05);

  const zIndex = isPast
    ? 0 // Lowest z-index if past
    : (totalCards * 2) - index; // Heroic z-index if still in stack

  const cardOpacity = isPast
    ? 0
    : 1 - (scrollProgress * 4); // Fast fade out as it slides down

  // Base rotation is based on index, but as we become active, it goes to 0
  const baseRotation = (index * -3) * (1 - activeProgress);
  // While dismissing, we can add a slight extra rotation
  const dismissalRotation = scrollProgress * 5;

  return (
    <div
      id={`card-${index}`}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card w-[90%] h-[70%] md:w-[85vw] md:h-[75vh] lg:w-[70vw] lg:h-[80vh] absolute left-1/2 rounded-3xl overflow-hidden border border-white/10 dark:border-slate-800 bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm will-change-transform ${isPast ? 'pointer-events-none' : ''}`}
      style={{
        transition: 'opacity 0.3s ease-out, transform 0.1s ease-out',
        boxShadow: isPast ? 'none' : '0 8px 30px rgba(0,0,0,0.12)',
        transform: `
          translateX(-50%)
          translateY(${translateY}px)
          scale(${scale})
          rotate(${baseRotation + dismissalRotation}deg)
        `,
        zIndex: zIndex,
        opacity: Math.max(cardOpacity, 0),
      }}
    >
      <img id={`card-image-${index}`} src={`${path}`} alt={title} className={`card-image w-full h-full object-contain`} />
    </div>
  )
}