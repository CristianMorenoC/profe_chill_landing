import { LessonCard } from './LessonCard';
import { useTranslations } from '../utils/i18n';
import { useState, useEffect, useRef } from 'react';
import '../styles/lessonStyles.css';

export const Lessons = ({ lang }: { lang: 'en' | 'es' }) => {
  const t = useTranslations(lang);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section has been scrolled past the top of the viewport
      // If rect.top is 0, we just started.
      // If rect.top is -sectionHeight + viewportHeight, we are at the end.
      const start = 0; // top of section touches top of viewport
      const end = -sectionHeight + viewportHeight;

      let progress = 0;
      if (rect.top <= start) {
        progress = (rect.top - start) / (end - start);
      }

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const lessonCards = t('classMethodology.lessonCard');
  const lessonsArray = Array.isArray(lessonCards) ? lessonCards : [];
  const numCards = lessonsArray.length;
  // We want (numCards - 1) transitions. The last card stays as the final view.
  const numTransitions = Math.max(numCards - 1, 1);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative"
      style={{ height: `${numCards * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden from-slate-900 from-brand-beige/30 to-white dark:bg-slate-900">
        <div className="absolute inset-0 pointer-events-none transition-colors duration-500">
          <div
            className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-0"
            style={{
              background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.8), transparent)`
            }}
          />
          <div
            className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-0"
            style={{
              background: `radial-gradient(circle 800px at ${mousePos.x}px ${mousePos.y}px, rgba(147, 188, 252, 0.15), transparent)`
            }}
          />
        </div>

        <div className="container relative mx-auto px-4 h-full flex flex-col items-center justify-center" id="lessons">
          <div className='mt-10 mb-6'>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 dark:text-white">
              Class Methodology
            </h2>
          </div>

          <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center">
            {lessonsArray.map((lesson: { path: string, title: string }, index: number) => {
              // Calculate specific animation state for this card
              const cardStep = 1 / numTransitions;
              const cardStart = index * cardStep;
              const cardEnd = (index + 1) * cardStep;

              // Local progress for THIS card (0 to 1) describing its dismissal
              let localDismissalProgress = 0;
              let isPast = false;

              if (numTransitions > 0 && index < numTransitions) {
                localDismissalProgress = (scrollProgress - cardStart) / cardStep;
                localDismissalProgress = Math.min(Math.max(localDismissalProgress, 0), 1);
                isPast = scrollProgress >= cardEnd;
              }

              // How much has the PREVIOUS card been dismissed? 
              // This is used to rotate the NEXT card to 0 degrees.
              let activeProgress = 0;
              if (index === 0) {
                activeProgress = 1; // First card is active from the start
              } else {
                const prevCardStart = (index - 1) * cardStep;
                activeProgress = Math.min(Math.max((scrollProgress - prevCardStart) / cardStep, 0), 1);
              }

              return (
                <LessonCard
                  key={index}
                  path={lesson.path}
                  title={lesson.title}
                  index={index}
                  mousePos={mousePos}
                  scrollProgress={localDismissalProgress}
                  activeProgress={activeProgress}
                  isPast={isPast}
                  totalCards={numCards}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

