import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Props {
  lang: 'en' | 'es';
}

interface Testimonial {
  name: string;
  text: string;
  photo?: string;
}

export default function Testimonials({ lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = lang === 'en' ? [
    {
      name: 'Silvia Andrade',
      text: "Taking classes with Juan Diego to improve my language skills has been one of the best decisions I've made at this point in my life. The support, the dynamic of the classes, the availability of schedules, the guides we've worked with—all of this together has allowed me to get closer and closer to achieving my goal.",
    },
    {
      name: 'Lina Rodriguez',
      text: 'I especially like that he covers all aspects of the language: grammar, pronunciation, reading, and writing, adapting to each student\'s weaknesses and needs. I also appreciate how he focuses on what I like and what I need for my career. His classes are comprehensive, flexible, student-centered, and very practical.',
    },
    {
      name: 'Jonathan Coy',
      text: 'The classes with Profe-Chill are exceptional, tailored to what you want to improve, and with a very pleasant atmosphere that helps you relax and learn in the best way possible, without pressure and always striving to improve.',
    },
    {
      name: 'German Lancheros (75 years old)',
      text: 'At 75 years old, as we were planning a trip to visit our daughter, I wanted to improve my English. After 36 personalized lessons, I am now in Melbourne and have been able to socialize with my family in English. When I return to Colombia, I will continue my classes.',
    },
    {
      name: 'David Calderón',
      text: 'I took personalized English classes with Juan Diego, Profe Chill, and from the beginning they felt different. The classes are totally adapted to you, without pressure and with lots of space to converse. This process allowed me to move easily abroad during work trips.',
    },
  ] : [
    {
      name: 'Silvia Andrade',
      text: 'Tomar clases con Juan Diego para mejorar mis habilidades lingüísticas ha sido una de las mejores decisiones que he tomado en este punto de mi vida. El apoyo, la dinámica de las clases, la disponibilidad de horarios, las guías con las que hemos trabajado: todo esto junto me ha permitido acercarme cada vez más a lograr mi objetivo.',
    },
    {
      name: 'Lina Rodriguez',
      text: 'Me gusta especialmente que cubra todos los aspectos del idioma: gramática, pronunciación, lectura y escritura, adaptándose a las debilidades y necesidades de cada estudiante. También aprecio cómo se enfoca en lo que me gusta y lo que necesito para mi carrera. Sus clases son integrales, flexibles, centradas en el estudiante y muy prácticas.',
    },
    {
      name: 'Jonathan Coy',
      text: 'Las clases con Profe-Chill son excepcionales, adaptadas a lo que quieres mejorar, y con un ambiente muy agradable que te ayuda a relajarte y aprender de la mejor manera posible, sin presión y siempre esforzándote por mejorar.',
    },
    {
      name: 'German Lancheros (75 años)',
      text: 'A los 75 años, mientras planeábamos un viaje para visitar a nuestra hija, quería mejorar mi inglés. Después de 36 lecciones personalizadas, ahora estoy en Melbourne y he podido socializar con mi familia en inglés. Cuando regrese a Colombia, continuaré mis clases.',
    },
    {
      name: 'David Calderón',
      text: 'Tomé clases personalizadas de inglés con Juan Diego, Profe Chill, y desde el inicio se sintieron diferentes. Las clases son totalmente adaptadas a uno, sin presión y con muchísimo espacio para conversar. Este proceso me permitió moverme con facilidad en el exterior durante viajes de trabajo.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section
      id="testimonials"
      className="py-20 bg-transparent"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 dark:text-white mb-12">
          {lang === 'en' ? 'What Students Say' : 'Lo Que Dicen Los Estudiantes'}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-brand-beige/30 to-white/80 dark:from-slate-800 dark:to-slate-800/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <Quote className="w-12 h-12 text-brand-sky-blue/30 mb-6" />

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-sky-blue to-brand-light-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-heading font-semibold text-gray-900 dark:text-white text-lg">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-brand-sky-blue" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-brand-sky-blue" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                    ? 'bg-brand-sky-blue w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

