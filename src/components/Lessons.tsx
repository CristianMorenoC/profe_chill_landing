import { LessonCard } from './LessonCard';
import { useTranslations } from '../utils/i18n';
import { useState, useRef, useEffect } from 'react';

export const Lessons = ({ lang }: { lang: 'en' | 'es' }) => {
  const t = useTranslations(lang);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Initialize center position to avoid jump on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }
  }, []);

  

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Using clientX/Y directly for standard viewport tracking
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="lessons" 
      onMouseMove={handleMouseMove}
      className="py-20 bg-gradient-to-b from-brand-beige/30 to-white dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none transition-colors duration-500">
         {/* Light Mode Gradient - Tracks Mouse */}
         <div 
            className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-0"
            style={{
                background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.8), transparent)`
            }}
         />
         {/* Dark Mode Gradient - Tracks Mouse */}
         <div 
            className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-0"
            style={{
                background: `radial-gradient(circle 800px at ${mousePos.x}px ${mousePos.y}px, rgba(147, 188, 252, 0.15), transparent)`
            }}
         />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className='my-20'>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 dark:text-white mb-12">
            Class Methodology
          </h2>
        </div>
        <div className="relative h-screen w-full">
          {/* Passing mousePos down to trigger the physics calculation in children */}
          {t('classMethodology.lessonCard').map((lesson: { path: string, title: string }, index: number) => (
              <LessonCard 
                key={index} 
                path={lesson.path} 
                title={lesson.title} 
                index={index} 
                mousePos={mousePos} 
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};
