import { useState, useEffect } from 'react';
import { X, Mail, User, CheckCircle } from 'lucide-react';

interface Props {
  lang: 'en' | 'es';
}

export default function NewsletterModal({ lang }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState<'en' | 'es'>(lang);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content = lang === 'en' ? {
    title: 'Stay Updated',
    description: 'Get exclusive tips, resources, and special offers for language learners.',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    languageLabel: 'Preferred Language:',
    spanish: 'Spanish',
    english: 'English',
    submit: 'Subscribe',
    successTitle: 'Thank You!',
    successMessage: 'You\'ve successfully subscribed to our newsletter. Check your email for confirmation.',
    close: 'Close',
  } : {
    title: 'Mantente Actualizado',
    description: 'Recibe consejos exclusivos, recursos y ofertas especiales para estudiantes de idiomas.',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu correo',
    languageLabel: 'Idioma Preferido:',
    spanish: 'Español',
    english: 'Inglés',
    submit: 'Suscribirse',
    successTitle: '¡Gracias!',
    successMessage: 'Te has suscrito exitosamente a nuestro boletín. Revisa tu correo para confirmación.',
    close: 'Cerrar',
  };

  useEffect(() => {
    const openButton = document.getElementById('open-newsletter');
    const handleOpen = () => setIsOpen(true);

    openButton?.addEventListener('click', handleOpen);

    return () => {
      openButton?.removeEventListener('click', handleOpen);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setName('');
      setEmail('');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
          aria-label={content.close}
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                {content.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {content.description}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  {content.namePlaceholder}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-sky-blue transition-all"
                  placeholder={content.namePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  {content.emailPlaceholder}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-sky-blue transition-all"
                  placeholder={content.emailPlaceholder}
                />
              </div>

              {/* Language Preference */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {content.languageLabel}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="language"
                      value="en"
                      checked={language === 'en'}
                      onChange={() => setLanguage('en')}
                      className="w-4 h-4 text-brand-sky-blue focus:ring-brand-sky-blue"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {content.english}
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="language"
                      value="es"
                      checked={language === 'es'}
                      onChange={() => setLanguage('es')}
                      className="w-4 h-4 text-brand-sky-blue focus:ring-brand-sky-blue"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {content.spanish}
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-brand-sky-blue hover:bg-brand-sky-blue/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {content.submit}...
                  </span>
                ) : (
                  content.submit
                )}
              </button>
            </form>
          </>
        ) : (
          // Success State
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
              {content.successTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {content.successMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

