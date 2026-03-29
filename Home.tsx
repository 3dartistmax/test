import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export type Language = 'en' | 'de' | 'ne';
const DEFAULT_LANG: Language = 'en';
const SUPPORTED_LANGS: Language[] = ['en', 'de', 'ne'];

interface Translation {
  nav: {
    home: string;
    about: string;
    posts: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  sidebar: {
    bio: string;
    location: string;
    links: string;
  };
  content: {
    readMore: string;
    recentPosts: string;
  };
}

const translations: Record<Language, Translation> = {
  en: {
    nav: { home: 'Home', about: 'About', posts: 'Posts' },
    hero: { title: 'Minimalist Multilingual', subtitle: 'A clean space for your thoughts.' },
    sidebar: { bio: 'Creative developer and writer exploring the intersection of technology and art.', location: 'Berlin, Germany', links: 'Links' },
    content: { readMore: 'Read More', recentPosts: 'Recent Posts' }
  },
  de: {
    nav: { home: 'Startseite', about: 'Über mich', posts: 'Beiträge' },
    hero: { title: 'Minimalistisch Mehrsprachig', subtitle: 'Ein sauberer Ort für Ihre Gedanken.' },
    sidebar: { bio: 'Kreativer Entwickler und Autor, der die Schnittstelle zwischen Technologie und Kunst erforscht.', location: 'Berlin, Deutschland', links: 'Links' },
    content: { readMore: 'Weiterlesen', recentPosts: 'Aktuelle Beiträge' }
  },
  ne: {
    nav: { home: 'गृहपृष्ठ', about: 'बारेमा', posts: 'लेखहरू' },
    hero: { title: 'न्यूनतम बहुभाषी', subtitle: 'तपाईंको विचारहरूको लागि एक सफा ठाउँ।' },
    sidebar: { bio: 'प्रविधि र कलाको संगम खोज्ने रचनात्मक विकासकर्ता र लेखक।', location: 'बर्लिन, जर्मनी', links: 'लिङ्कहरू' },
    content: { readMore: 'थप पढ्नुहोस्', recentPosts: 'भर्खरका लेखहरू' }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [language, setInternalLanguage] = useState<Language>((lang as Language) || DEFAULT_LANG);

  // Sync state with URL parameter
  useEffect(() => {
    if (lang && SUPPORTED_LANGS.includes(lang as Language)) {
      setInternalLanguage(lang as Language);
    } else if (!lang || !SUPPORTED_LANGS.includes(lang as Language)) {
      // Redirect to default language if invalid or missing
      const path = location.pathname === '/' ? '' : location.pathname;
      navigate(`/${DEFAULT_LANG}${path}`, { replace: true });
    }
  }, [lang, navigate, location.pathname]);

  const setLanguage = (newLang: Language) => {
    const currentPathWithoutLang = location.pathname.split('/').slice(2).join('/');
    navigate(`/${newLang}/${currentPathWithoutLang}`);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
