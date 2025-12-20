import { useState } from 'react';
import { ChevronDown, MessageCircle, Lightbulb, Users, Volume2, BookOpen } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
      >
        <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white text-left">
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-brand-sky-blue transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[2000px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900/50">
          {children}
        </div>
      </div>
    </div>
  );
}

interface Props {
  lang: 'en' | 'es';
}

export default function HowItWorks({ lang }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = lang === 'en' ? {
    title: 'How My Lessons Work',
    sections: [
      {
        title: 'A Fully Tailored Learning Experience',
        content: (
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Every lesson built around real needs</li>
            <li>• Content adapts to your life, time, and goals</li>
            <li>• Faster learning by studying only what matters</li>
          </ul>
        ),
      },
      {
        title: 'What We Do in Class',
        content: (
          <div className="space-y-4">
            <div className="flex gap-3">
              <MessageCircle className="w-6 h-6 text-brand-sky-blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Real Communication Practice</h4>
                <p className="text-gray-700 dark:text-gray-300">Workplace situations (conversations, emails, presentations)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Lightbulb className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Clear Explanations Adapted to You</h4>
                <p className="text-gray-700 dark:text-gray-300">Complex grammar simplified through industry examples</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="w-6 h-6 text-brand-light-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Guided Practice</h4>
                <p className="text-gray-700 dark:text-gray-300">Personalized exercises and role-plays</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Volume2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Pronunciation & Phonetics Coaching</h4>
                <p className="text-gray-700 dark:text-gray-300">Sounds, rhythm, intonation, clarity</p>
              </div>
            </div>
            <div className="flex gap-3">
              <BookOpen className="w-6 h-6 text-brand-beige flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Independent Learning Strategies</h4>
                <p className="text-gray-700 dark:text-gray-300">Maximize short study moments (10 min/day) with tools to stay consistent</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'The Profe Chill Method',
        content: (
          <ol className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="font-bold text-brand-sky-blue">1.</span>
              <span>Initial diagnosis (level, goals, needs, context)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-light-green">2.</span>
              <span>Personalized study plan</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-gold">3.</span>
              <span>Purpose-driven lessons</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-orange">4.</span>
              <span>Self-learning techniques</span>
            </li>
          </ol>
        ),
      },
      {
        title: 'Session Details',
        content: (
          <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Duration</p>
              <p>50 minutes per class</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Platform</p>
              <p>Zoom</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Format</p>
              <p>One-on-one personalized lessons</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Location</p>
              <p>Available worldwide</p>
            </div>
          </div>
        ),
      },
    ],
  } : {
    title: 'Cómo Funcionan Mis Clases',
    sections: [
      {
        title: 'Una Experiencia de Aprendizaje Totalmente Personalizada',
        content: (
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Cada lección construida alrededor de necesidades reales</li>
            <li>• El contenido se adapta a tu vida, tiempo y objetivos</li>
            <li>• Aprendizaje más rápido estudiando solo lo que importa</li>
          </ul>
        ),
      },
      {
        title: 'Qué Hacemos en Clase',
        content: (
          <div className="space-y-4">
            <div className="flex gap-3">
              <MessageCircle className="w-6 h-6 text-brand-sky-blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Práctica de Comunicación Real</h4>
                <p className="text-gray-700 dark:text-gray-300">Situaciones laborales (conversaciones, correos, presentaciones)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Lightbulb className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Explicaciones Claras Adaptadas a Ti</h4>
                <p className="text-gray-700 dark:text-gray-300">Gramática compleja simplificada con ejemplos de tu industria</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="w-6 h-6 text-brand-light-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Práctica Guiada</h4>
                <p className="text-gray-700 dark:text-gray-300">Ejercicios personalizados y juegos de roles</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Volume2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Coaching de Pronunciación y Fonética</h4>
                <p className="text-gray-700 dark:text-gray-300">Sonidos, ritmo, entonación, claridad</p>
              </div>
            </div>
            <div className="flex gap-3">
              <BookOpen className="w-6 h-6 text-brand-beige flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Estrategias de Aprendizaje Independiente</h4>
                <p className="text-gray-700 dark:text-gray-300">Maximiza momentos cortos de estudio (10 min/día) con herramientas para mantenerte consistente</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'El Método Profe Chill',
        content: (
          <ol className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="font-bold text-brand-sky-blue">1.</span>
              <span>Diagnóstico inicial (nivel, objetivos, necesidades, contexto)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-light-green">2.</span>
              <span>Plan de estudio personalizado</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-gold">3.</span>
              <span>Lecciones orientadas a objetivos</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-orange">4.</span>
              <span>Técnicas de auto-aprendizaje</span>
            </li>
          </ol>
        ),
      },
      {
        title: 'Detalles de las Sesiones',
        content: (
          <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Duración</p>
              <p>50 minutos por clase</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Plataforma</p>
              <p>Zoom</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Formato</p>
              <p>Lecciones personalizadas uno a uno</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white">Ubicación</p>
              <p>Disponible en todo el mundo</p>
            </div>
          </div>
        ),
      },
    ],
  };

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 dark:text-white mb-12">
          {content.title}
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {content.sections.map((section, index) => (
            <AccordionItem
              key={index}
              title={section.title}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {section.content}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}

