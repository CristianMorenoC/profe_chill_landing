import React from 'react';
import { useTranslations } from '../utils/i18n';

interface Props {
  lang: 'en' | 'es';
  className?: string;
}

const BookConsultationButton: React.FC<Props> = ({ lang, className = "" }) => {
  const t = useTranslations(lang);
  
  return (
    <a 
      href="#contact"
      className={`group px-8 py-4 bg-brand-sky-blue hover:bg-brand-sky-blue/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center inline-block ${className}`}
    >
      {t('hero.ctaPrimary')}
    </a>
  );
};

export default BookConsultationButton;
