import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Props {
  lang: 'en' | 'es';
}

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

export default function Testimonials({ lang }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "Lady B",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "Quality, flexibility, and excellent teaching are the hallmarks of Juan Diego. Thank you for contributing to this future, and thank you for your professional support and wonderful guidance. Juan is 100% recommended."
        : "Calidad, flexibilidad y excelente enseñanza son los sellos distintivos de Juan Diego. Gracias por contribuir a este futuro, y gracias por su apoyo profesional y maravillosa guía. Juan es 100% recomendado.",
      image: "/reviews/ladyb.webp",
    },
    {
      name: "Dwayne",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "Juan Diego is a great teacher who enjoy offering his vast knowledge of the Spanish language to cater the lesson to your specific needs. For me a speaker of Italian we are able to curate parallelisms between both of these two languages to find a effective ease of access. I have been taking lessons with Juan 2-3 times a week and we have been flying through grammar and some literature."
        : "Juan Diego es un gran profesor que disfruta ofreciendo su vasto conocimiento del idioma español para adaptar la lección a tus necesidades específicas. Para mí, que hablo italiano, podemos crear paralelismos entre ambos idiomas para encontrar una facilidad de acceso efectiva. He tomado clases con Juan 2-3 veces por semana y hemos avanzado rápido en gramática y algo de literatura.",
      image: "/reviews/dwayne.webp",
    },
    {
      name: "Henrique",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "Highly recommended! I have the privilege of receiving Spanish lessons from this exceptional teacher. Their approach with interactive classes truly makes language learning a unique experience. Thanks to their guidance and support, I am achieving my language goals effectively."
        : "¡Altamente recomendado! Tengo el privilegio de recibir clases de español de este profesor excepcional. Su enfoque con clases interactivas realmente hace que el aprendizaje del idioma sea una experiencia única. Gracias a su guía y apoyo, estoy logrando mis objetivos lingüísticos de manera efectiva.",
      image: "/reviews/henrique.webp",
    },
    {
      name: "Adam",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "Juan is an extremely patient and knowledgable teacher. The exercises are well tailored to my level and my limited time to study during the week. Thank you for all your help :)"
        : "Juan es un profesor extremadamente paciente y conocedor. Los ejercicios están bien adaptados a mi nivel y a mi tiempo limitado para estudiar durante la semana. Gracias por toda tu ayuda :)",
      image: "/reviews/adam.webp",
    },
    {
      name: "Kathleen",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "Juan is a very friendly and professional Teacher. Highly recommended to everyone. He takes his time to explain you everything very well until you will understand it."
        : "Juan es un profesor muy amable y profesional. Muy recomendado para todos. Se toma su tiempo para explicarte todo muy bien hasta que lo entiendas.",
      image: "/reviews/kathleen.webp",
    },
    {
      name: "Blair",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "Juan Diego is an excellent tutor. He relates to students meeting them where they are. Mastery of Spanish. Well prepared. Organized. Uses good teaching aids. Interesting. Recommend highly."
        : "Juan Diego es un excelente tutor. Se relaciona con los estudiantes encontrándolos donde están. Dominio del español. Bien preparado. Organizado. Utiliza buenos materiales didácticos. Interesante. Lo recomiendo altamente.",
      image: "/reviews/blair.webp",
    },
    {
      name: "John",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "¡Juan es muy excelente! Learning with him felt like talking to a friend of many years. He created a personalized slideshow for me and genuinely cares. If you're looking for someone who will meet you no matter your level in Spanish, learn with Juan!"
        : "¡Juan es muy excelente! Aprender con él se sintió como hablar con un amigo de muchos años. Creó una presentación personalizada para mí y realmente le importa. Si buscas a alguien que te encuentre sin importar tu nivel de español, ¡aprende con Juan!",
      image: "/reviews/John.webp",
    },
    {
      name: "Lenka",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "My Spanish teacher, Juan Diego, is outstanding! He explains concepts clearly and creates a fun, engaging learning environment. His dedication and passion for teaching make every class enjoyable. Highly recommended!"
        : "¡Mi profesor de español, Juan Diego, es sobresaliente! Explica los conceptos claramente y crea un ambiente de aprendizaje divertido y atractivo. Su dedicación y pasión por la enseñanza hacen que cada clase sea agradable. ¡Altamente recomendado!",
      image: "/reviews/lenka.webp",
    },
    {
      name: "Linda",
      role: "Student",
      rating: 5,
      text: lang === 'en'
        ? "I am a lucky girl; I found Juan Diego, an amazing Spanish teacher! Juan has identified the perfect mix of lessons for me, whether advanced grammar review or excerpts from 100 Years of Solitude. My classes are rigorous yet fun. What more can you ask for? Juan is the best!"
        : "Soy una chica con suerte; ¡encontré a Juan Diego, un increíble profesor de español! Juan ha identificado la mezcla perfecta de lecciones para mí, ya sea revisión de gramática avanzada o extractos de 100 años de soledad. Mis clases son rigurosas pero divertidas. ¿Qué más se puede pedir? ¡Juan es el mejor!",
      image: "/reviews/paula.webp",
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
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-sky-blue/20">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
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

