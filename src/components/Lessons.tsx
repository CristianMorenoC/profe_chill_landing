import { LessonCard } from './LessonCard';
import { useTranslations } from '../utils/i18n';
import { useState, useEffect, useRef } from 'react';
import '../styles/lessonStyles.css';

export const Lessons = ({ lang }: { lang: 'en' | 'es' }) => {
  const t = useTranslations(lang);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

  const lessonCards = t('classMethodology.lessonCard');
  const lessonsArray = Array.isArray(lessonCards) ? lessonCards : [];
  const numCards = lessonsArray.length;
  // We want (numCards - 1) transitions. The last card stays as the final view.
  const numTransitions = Math.max(numCards - 1, 1);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${numCards * 100}vh` }}
    >
      <div className="container relative mx-auto px-4 flex flex-col items-center justify-center pt-20 pb-10" id="lessons">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-center text-gray-900 dark:text-white leading-tight max-w-4xl">
          {t('classMethodology.title')}
        </h2>
      </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">
        <div className="absolute inset-0 pointer-events-none transition-colors duration-500">
        </div>

        <div className="container relative mx-auto px-4 h-full flex flex-col items-center justify-center">

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
    </>
  );
};

