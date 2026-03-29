import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Github, Twitter, Mail, MapPin, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  const navItems = [
    { name: t.nav.home, path: `/${language}` },
    { name: t.nav.about, path: `/${language}/about` },
    { name: t.nav.posts, path: `/${language}/posts` },
  ];

  return (
    <div className="min-h-screen bg-white text-[#333] font-serif selection:bg-[#fff2cc]">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to={`/${language}`} className="text-xl font-bold tracking-tight hover:text-gray-600 transition-colors">
            Minimalist<span className="text-gray-400">.</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                    location.pathname === item.path ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 border-l pl-6 border-gray-100">
              {(['en', 'de', 'ne'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-xs px-2 py-1 rounded uppercase tracking-widest transition-all ${
                    language === lang 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-8">
              <div className="space-y-4">
                <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src="https://picsum.photos/seed/author/300/300" 
                    alt="Author" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Max Mustermann</h2>
                  <p className="text-sm text-gray-500 italic mt-1">{t.sidebar.bio}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 border-t pt-6 border-gray-100">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-gray-400" />
                  <span>{t.sidebar.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-gray-400" />
                  <a href="#" className="hover:text-gray-900 underline decoration-gray-200 underline-offset-4">example.com</a>
                </div>
              </div>

              <div className="space-y-4 border-t pt-6 border-gray-100">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">{t.sidebar.links}</h3>
                <div className="flex gap-4 text-gray-400">
                  <a href="#" className="hover:text-gray-900 transition-colors"><Twitter size={18} /></a>
                  <a href="#" className="hover:text-gray-900 transition-colors"><Github size={18} /></a>
                  <a href="#" className="hover:text-gray-900 transition-colors"><Mail size={18} /></a>
                </div>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9">
            <motion.div
              key={location.pathname + language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-24 py-12 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© 2026 Minimalist Multilingual Site. Powered by AI Studio.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
