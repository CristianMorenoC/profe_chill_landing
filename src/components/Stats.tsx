import { useEffect, useRef, useState } from 'react';

interface Props {
  lang: 'en' | 'es';
}

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}</div>;
}

export default function Stats({ lang }: Props) {
  const content = lang === 'en' ? {
    title: 'Experience & Impact',
    stats: [
      { value: 10, suffix: '+', label: 'Years Teaching Professionals' },
      { value: 400, suffix: '+', label: 'Students Trained' },
      { value: 95, suffix: '%', label: 'Success Rate' },
      { value: 20, suffix: '+', label: 'Industries Served' },
    ],
  } : {
    title: 'Experiencia e Impacto',
    stats: [
      { value: 10, suffix: '+', label: 'Años Enseñando a Profesionales' },
      { value: 400, suffix: '+', label: 'Estudiantes Capacitados' },
      { value: 95, suffix: '%', label: 'Tasa de Éxito' },
      { value: 20, suffix: '+', label: 'Industrias Atendidas' },
    ],
  };

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 dark:text-white mb-12">
          {content.title}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {content.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-brand-sky-blue mb-2 flex items-center justify-center">
                <CountUp end={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

