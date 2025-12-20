import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface Props {
  lang: 'en' | 'es';
}

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-left"
      >
        <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white pr-4">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-brand-sky-blue flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900/50">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ lang }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = lang === 'en' ? [
    {
      question: 'How are the classes personalized?',
      answer: 'Every lesson is designed based on your role, industry, goals, and current level. No generic content. I take time to understand your specific communication needs and create materials that directly apply to your work situations.',
    },
    {
      question: 'What if I have a busy schedule?',
      answer: 'Classes are flexible and adapt to your availability. You can schedule, reschedule, and choose frequency that works for you. Many of my students are busy executives who appreciate the flexibility.',
    },
    {
      question: 'Do I need prior knowledge?',
      answer: 'No. I work with all levels: from complete beginners to advanced professionals looking to refine their communication skills. The approach adapts to your starting point.',
    },
    {
      question: 'How long until I see results?',
      answer: '95% of students report improvement in workplace communication within 6-8 weeks. However, results vary depending on your starting level, goals, and practice commitment.',
    },
    {
      question: 'What platform do you use?',
      answer: 'All classes are conducted via Zoom with screen sharing and interactive materials. This allows for face-to-face interaction while being able to work on documents, presentations, and other materials together.',
    },
    {
      question: 'Can I get materials in my native language?',
      answer: 'Yes. Bilingual materials (English-Spanish) are provided to accelerate learning. I can also teach in Portuguese, Italian, or French if that helps clarify concepts.',
    },
    {
      question: 'Do you offer group classes?',
      answer: 'Currently, all lessons are one-on-one for maximum personalization. This ensures every minute is focused on your specific needs and progress.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'I\'ve worked with professionals in tech, consulting, finance, law, health, HR, operations, marketing, engineering, racing, insurance broking, aviation, and more. Each lesson incorporates terminology and scenarios specific to your field.',
    },
  ] : [
    {
      question: '¿Cómo se personalizan las clases?',
      answer: 'Cada lección está diseñada según tu rol, industria, objetivos y nivel actual. Sin contenido genérico. Me tomo el tiempo para entender tus necesidades específicas de comunicación y crear materiales que se apliquen directamente a tus situaciones de trabajo.',
    },
    {
      question: '¿Qué pasa si tengo un horario muy ocupado?',
      answer: 'Las clases son flexibles y se adaptan a tu disponibilidad. Puedes programar, reprogramar y elegir la frecuencia que funcione para ti. Muchos de mis estudiantes son ejecutivos ocupados que aprecian la flexibilidad.',
    },
    {
      question: '¿Necesito conocimientos previos?',
      answer: 'No. Trabajo con todos los niveles: desde principiantes completos hasta profesionales avanzados que buscan refinar sus habilidades de comunicación. El enfoque se adapta a tu punto de partida.',
    },
    {
      question: '¿Cuánto tiempo hasta ver resultados?',
      answer: 'El 95% de los estudiantes reporta mejoras en la comunicación laboral dentro de 6-8 semanas. Sin embargo, los resultados varían según tu nivel inicial, objetivos y compromiso de práctica.',
    },
    {
      question: '¿Qué plataforma utilizas?',
      answer: 'Todas las clases se realizan por Zoom con compartición de pantalla y materiales interactivos. Esto permite interacción cara a cara mientras podemos trabajar en documentos, presentaciones y otros materiales juntos.',
    },
    {
      question: '¿Puedo obtener materiales en mi idioma nativo?',
      answer: 'Sí. Se proporcionan materiales bilingües (inglés-español) para acelerar el aprendizaje. También puedo enseñar en portugués, italiano o francés si eso ayuda a aclarar conceptos.',
    },
    {
      question: '¿Ofreces clases grupales?',
      answer: 'Actualmente, todas las lecciones son uno a uno para máxima personalización. Esto asegura que cada minuto esté enfocado en tus necesidades específicas y progreso.',
    },
    {
      question: '¿En qué industrias te especializas?',
      answer: 'He trabajado con profesionales en tecnología, consultoría, finanzas, derecho, salud, RRHH, operaciones, marketing, ingeniería, carreras, corretaje de seguros, aviación y más. Cada lección incorpora terminología y escenarios específicos de tu campo.',
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-brand-beige/30 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 dark:text-white mb-4">
          {lang === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          {lang === 'en' ? 'Find answers to common questions' : 'Encuentra respuestas a preguntas comunes'}
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search questions...' : 'Buscar preguntas...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-sky-blue"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQAccordion
                key={index}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              {lang === 'en' ? 'No questions found matching your search.' : 'No se encontraron preguntas que coincidan con tu búsqueda.'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

