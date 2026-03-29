import { useLanguage } from '../LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          {t.hero.subtitle}
        </p>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between border-b pb-4 border-gray-100">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">
            {t.content.recentPosts}
          </h2>
        </div>

        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 overflow-hidden rounded-lg bg-gray-100 aspect-[16/9]">
                <Link to={`/${language}/posts/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title[language as keyof typeof post.title]} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </Link>
              </div>
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">{post.date}</span>
                <h3 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">
                  <Link to={`/${language}/posts/${post.id}`}>
                    {post.title[language as keyof typeof post.title]}
                  </Link>
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-3xl">
                  {post.excerpt[language as keyof typeof post.excerpt]}
                </p>
                <Link 
                  to={`/${language}/posts/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-transparent hover:border-gray-900 transition-all pt-2"
                >
                  {t.content.readMore} <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

