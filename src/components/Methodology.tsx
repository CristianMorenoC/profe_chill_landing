import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from '../utils/i18n';

interface Props {
  lang: 'en' | 'es';
}

const videos = [
  '/scrollytelling/Edición_de_video_eliminar_escena_de_puerta.mp4',
  '/scrollytelling/Video_de_Ingeniero_McLaren_en_Taller.mp4',
  '/scrollytelling/Video_Correction_German_Tourist_in_Peru.mp4',
];

export const Methodology: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  // Total scroll height: 200vh per video (more scroll = slower animation)
  const totalHeight = `${videos.length * 200}vh`;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrolledIntoContainer = -rect.top;
      const totalScrollableHeight = container.offsetHeight - viewportHeight;

      const overallProgress = Math.max(0, Math.min(1, scrolledIntoContainer / totalScrollableHeight));

      const progressPerVideo = 1 / videos.length;
      const videoIndex = Math.min(
        videos.length - 1,
        Math.floor(overallProgress / progressPerVideo)
      );

      const progressWithinVideo = (overallProgress - (videoIndex * progressPerVideo)) / progressPerVideo;

      setCurrentVideoIndex(videoIndex);
      setVideoProgress(Math.max(0, Math.min(1, progressWithinVideo)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation phases:
  // 0% - 45%: Text enters from top, fades in, overlay decreases
  // 45% - 85%: Text continues to bottom, fades out, overlay increases
  // 85% - 100%: Fully black transition period

  // Text Y position: -150% (off-screen top) → 0% (center) → 150% (off-screen bottom)
  let textY: number;
  if (videoProgress < 0.45) {
    // Phase 1: -150% to 0% (entering from top to center)
    textY = -150 + (videoProgress / 0.45) * 150;
  } else if (videoProgress < 0.85) {
    // Phase 2: 0% to 150% (center to bottom)
    textY = ((videoProgress - 0.45) / 0.4) * 150;
  } else {
    // Phase 3: Keep at bottom (off-screen)
    textY = 150;
  }

  // Text opacity: fades in during phase 1, fades out during phase 2
  let textOpacity: number;
  if (videoProgress < 0.45) {
    // Fade in: 0 to 1
    textOpacity = videoProgress / 0.45;
  } else if (videoProgress < 0.85) {
    // Fade out: 1 to 0
    textOpacity = 1 - ((videoProgress - 0.45) / 0.4);
  } else {
    // Fully hidden during transition
    textOpacity = 0;
  }

  // Overlay opacity:
  // Phase 1 (0-45%): 80% → 20%
  // Phase 2 (45-85%): 20% → 100%
  // Phase 3 (85-100%): 100% (fully black for video transition)
  let overlayOpacity: number;
  if (videoProgress < 0.45) {
    overlayOpacity = 0.8 - (videoProgress / 0.45) * 0.6; // 0.8 to 0.2
  } else if (videoProgress < 0.85) {
    overlayOpacity = 0.2 + ((videoProgress - 0.45) / 0.4) * 0.8; // 0.2 to 1.0
  } else {
    overlayOpacity = 1; // Fully black
  }

  // Get the title key for current video
  const titleKeys = ['methodology.title', 'methodology.title2', 'methodology.title3'];
  const titleKey = titleKeys[currentVideoIndex] || titleKeys[0];

  return (
    <div id="methodology" ref={containerRef} style={{ height: totalHeight }} className="relative">
      {/* Description Title Section */}
      <div className="absolute top-0 left-0 w-full pt-20 pb-10 z-20 text-center px-4">
        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 dark:text-white max-w-4xl mx-auto">
          {t('methodology.description')}
        </h3>
      </div>

      {/* Sticky container that stays fixed while scrolling */}
      <div className="sticky top-0 w-screen h-screen overflow-hidden">
        {/* Video background */}
        <video
          key={videos[currentVideoIndex]}
          src={videos[currentVideoIndex]}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay with dynamic opacity */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        >
          {/* Text content with scroll-driven position and fade */}
          <div
            className="w-full md:w-[80%] lg:w-[70%] px-4 text-center"
            style={{
              transform: `translateY(${textY}%)`,
              opacity: textOpacity,
              transition: 'transform 0.05s ease-out, opacity 0.05s ease-out'
            }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              {t(titleKey)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
