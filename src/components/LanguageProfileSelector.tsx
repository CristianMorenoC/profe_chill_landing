import { useState } from 'react';
import { languages } from '../utils/constants';

interface LanguageProfileSelectorProps {
  title: string;
  allowedLanguageIds: string[];
  defaultLanguageId?: string;
}

export default function LanguageProfileSelector({ title, allowedLanguageIds, defaultLanguageId }: LanguageProfileSelectorProps) {
  const filteredLanguages = languages.filter(lang => allowedLanguageIds.includes(lang.id));
  const initialLangId = defaultLanguageId || (filteredLanguages.length > 0 ? filteredLanguages[0].id : '');

  const [activeLang, setActiveLang] = useState<string>(initialLangId);
  const [displayedLangId, setDisplayedLangId] = useState<string>(initialLangId);
  
  const [animState, setAnimState] = useState<'idle' | 'closing' | 'closed' | 'opening'>('idle');

  const handleLangChange = (newLangId: string) => {
    // Prevent interaction during animation or if selecting current language
    if (newLangId === activeLang || animState !== 'idle') return;
    
    setActiveLang(newLangId);
    setAnimState('closing');

    // Animation timing sequence
    setTimeout(() => {
      setAnimState('closed');
      setDisplayedLangId(newLangId);

      setTimeout(() => {
        setAnimState('opening');
        
        setTimeout(() => {
          setAnimState('idle');
        }, 700);
      }, 300);
    }, 700);
  };

  const currentLang = languages.find(l => l.id === activeLang) || languages[0];
  const displayedLang = languages.find(l => l.id === displayedLangId) || languages[0];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Title with fixed height for alignment across columns */}
      <div className="min-h-[4rem] flex items-end justify-center">
        <h3 className="text-2xl font-heading font-semibold text-gray-800 dark:text-white text-center leading-tight">
          {title}
        </h3>
      </div>

      <div className="relative group w-full max-w-md mx-auto">
        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-slate-800 relative z-10 w-full">
          {/* Main Image */}
          <img 
            src={displayedLang.imagePath} 
            alt={displayedLang.imageAlt}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

          {/* Curtain Animation Container */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 20 }}
          >
            <div 
              className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 -rotate-[30deg] flex flex-col"
            >
              <div 
                className="flex-1 bg-black w-full transition-transform duration-700 ease-in-out will-change-transform"
                style={{
                  transform: (animState === 'closing' || animState === 'closed') 
                    ? 'translateY(0)' 
                    : 'translateY(-101%)'
                }}
              ></div>
              
              <div 
                className="flex-1 bg-black w-full transition-transform duration-700 ease-in-out will-change-transform"
                style={{
                  transform: (animState === 'closing' || animState === 'closed') 
                    ? 'translateY(0)' 
                    : 'translateY(101%)'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Decorative Blur Effect */}
        <div className={`absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-2xl -z-10 transition-colors duration-700 opacity-60 ${currentLang.color}`}></div>
      </div>

      {/* Language Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {filteredLanguages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => handleLangChange(lang.id)}
            disabled={animState !== 'idle' && activeLang !== lang.id}
            className={`
              flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 transform cursor-pointer
              ${activeLang === lang.id 
                ? 'bg-white dark:bg-slate-700 shadow-lg ring-2 ring-brand-sky-blue scale-105' 
                : 'bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:scale-105'
              }
              ${animState !== 'idle' && activeLang !== lang.id ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            aria-label={`Select ${lang.name}`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600 flex-shrink-0">
              <img 
                src={lang.imagePath} 
                alt={`${lang.name} flag`} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-medium text-sm ${activeLang === lang.id ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
              {lang.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
