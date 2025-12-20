interface LanguageSwitcherProps {
  currentLang: 'en' | 'es';
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const otherLang = currentLang === 'en' ? 'es' : 'en';
  const otherLangPath = `/${otherLang}/`;

  return (
    <div className="flex items-center gap-2">
      <a
        href="/en/"
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
          currentLang === 'en'
            ? 'bg-brand-sky-blue text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        🇺🇸 EN
      </a>
      <a
        href="/es/"
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
          currentLang === 'es'
            ? 'bg-brand-sky-blue text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        🇪🇸 ES
      </a>
    </div>
  );
}

