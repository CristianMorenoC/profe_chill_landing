export interface Language {
  id: string;
  name: string;
  color: string;
  imageAlt: string;
  imagePath: string;
}

export const languages: Language[] = [
  { 
    id: 'es', 
    name: 'Spanish', 
    color: 'from-brand-sky-blue to-brand-light-green',
    imageAlt: 'Juan Diego teaching Spanish',
    imagePath: '/colombian_flag.png'
  },
  { 
    id: 'en', 
    name: 'English', 
    color: 'from-blue-500 to-red-500',
    imageAlt: 'Juan Diego teaching English',
    imagePath: '/usa_flag.png'
  },
  { 
    id: 'pt', 
    name: 'Portuguese', 
    color: 'from-green-500 to-yellow-400',
    imageAlt: 'Juan Diego teaching Portuguese',
    imagePath: '/brasil_flag.png'
  },
  { 
    id: 'it', 
    name: 'Italian', 
    color: 'from-green-600 to-red-600',
    imageAlt: 'Juan Diego teaching Italian',
    imagePath: '/italian_flag.png'
  },
  { 
    id: 'fr', 
    name: 'French', 
    color: 'from-blue-600 to-red-600',
    imageAlt: 'Juan Diego teaching French',
    imagePath: '/france_flag.png'
  },
];
