import { useMemo, useState } from 'react';
import { Search, Clock } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/site';
import { useReveal } from '../hooks/useReveal';
import { useParams } from 'react-router-dom';
import { Seo } from '../components/ui/Seo';

export function BlogPage() {
  const [cat, setCat] = useState('Tous');
  const [q, setQ] = useState('');
  const { slug } = useParams();

  const post = slug ? BLOG_POSTS.find((p) => p.slug === slug) : null;

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchCat = cat === 'Tous' || p.category === cat;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [cat, q]);

  useReveal([cat, q, filtered.length]);

  const featured = BLOG_POSTS[0];

  return (
    <div className="pt-24">
      <Seo 
        title={post ? `${post.title} — Blog ImoFlex` : "Blog — Insights immobilier & fintech africain — ImoFlex"}
        description={post ? post.excerpt : "Analyses, guides et tendances pour comprendre le marché immobilier en pleine transformation en Afrique."}
      />
      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 to-white" />
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow reveal">Blog ImoFlex</span>
            <h1 className="reveal mt-5 text-4xl sm:text-5xl font-extrabold leading-tight text-ink-900 text-balance" data-reveal-delay="80">
              Insights immobilier, fintech & PropTech africain
            </h1>
            <p className="reveal mt-4 text-lg text-ink-500" data-reveal-delay="160">
              Analyses, guides et tendances pour comprendre un marché en pleine transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <Section className="!pt-4">
        <div className="container-px">
          {featured ? (
            <div className="reveal grid gap-8 overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-ink-200/70 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-64 w-full object-cover lg:h-full"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  À la une
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 text-xs text-ink-400">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                    {featured.category}
                  </span>
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-ink-900">{featured.title}</h2>
                <p className="mt-3 text-ink-500">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                  <Clock className="h-3 w-3" /> {featured.readingTime} de lecture
                </span>
              </div>
            </div>
          ) : (
            <div className="reveal text-center py-12 rounded-4xl bg-ink-50 border border-ink-100">
              <h2 className="text-xl font-bold text-ink-900">Articles à venir</h2>
              <p className="mt-2 text-ink-500">Notre blog est en cours de préparation. Revenez bientôt pour nos premières publications !</p>
            </div>
          )}
        </div>
      </Section>

      {/* Search + categories */}
      <Section className="!pt-4">
        <div className="container-px">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    cat === c
                      ? 'bg-brand-700 text-white shadow-soft'
                      : 'bg-white text-ink-600 ring-1 ring-ink-200 hover:ring-brand-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-ink-200 focus-within:ring-brand-400 sm:w-72">
              <Search className="h-4 w-4 text-ink-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Rechercher un article…"
                className="w-full bg-transparent text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <article
                key={p.slug}
                className="reveal group card overflow-hidden hover:-translate-y-1 transition-all"
                data-reveal-delay={i * 60}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-ink-400">
                    <span>{p.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-ink-900 group-hover:text-brand-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-ink-500">Aucun article ne correspond à votre recherche.</p>
          )}
        </div>
      </Section>
    </div>
  );
}
