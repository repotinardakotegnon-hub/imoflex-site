import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../../utils/navigation';
import { supabase } from '../../lib/supabase';

const SOCIALS = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
];

const COLS = [
  {
    title: 'Plateforme',
    links: [
      { label: 'Fonctionnalités', section: 'fonctionnalites' },
      { label: 'Propriétaires', section: 'proprietaires' },
      { label: 'Locataires', section: 'locataires' },
      { label: 'Comment ça marche', section: 'comment-ca-marche' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'Vision & Fondateur', to: 'vision' },
      { label: 'Partenaires', to: 'partenaires' },
      { label: 'Investisseurs', to: 'investisseurs' },
      { label: 'Blog', to: 'blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', to: 'contact' },
      { label: 'FAQ', section: 'faq' },
      { label: 'Télécharger', section: 'telecharger' },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'err' | 'dup'>('idle');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const go = (link: { to?: string; section?: string }) => {
    if (link.to !== undefined) {
      navigate(`/${link.to}`);
    } else if (link.section !== undefined) {
      if (!isHome) {
        navigate('/');
        setTimeout(() => scrollToSection(link.section!), 100);
      } else {
        scrollToSection(link.section!);
      }
    }
  };

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email });
    if (!error) {
      setStatus('ok');
      setEmail('');
    } else if (error.code === '23505') {
      setStatus('dup');
    } else {
      setStatus('err');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="absolute inset-0 bg-radial-brand opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative container-px py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              ImoFlex modernise l'immobilier en Afrique. Trouvez un logement, gérez vos biens,
              payez vos loyers — le tout depuis une seule plateforme.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-ink-300 ring-1 ring-white/10 transition-all hover:bg-brand-600 hover:text-white hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <button
                        onClick={() => go(l)}
                        className="text-sm text-ink-400 transition-colors hover:text-white"
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white">Newsletter</h4>
            <p className="mt-4 text-sm text-ink-400">
              Recevez les actualités d'ImoFlex et les tendances du marché immobilier africain.
            </p>
            <form onSubmit={subscribe} className="mt-4">
              <div className="flex items-center gap-2 rounded-full bg-white/5 p-1.5 ring-1 ring-white/10 focus-within:ring-brand-500">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  placeholder="Votre email"
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-ink-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-500"
                  aria-label="S'abonner"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {status === 'ok' && (
                <p className="mt-2 text-xs text-emerald-400">Inscription confirmée. Merci !</p>
              )}
              {status === 'dup' && (
                <p className="mt-2 text-xs text-amber-400">Vous êtes déjà inscrit.</p>
              )}
              {status === 'err' && (
                <p className="mt-2 text-xs text-rose-400">Une erreur est survenue. Réessayez.</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} ImoFlex. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-500">
            <button onClick={() => navigate('/confidentialite')} className="hover:text-white transition-colors">Politique de confidentialité</button>
            <button onClick={() => navigate('/conditions')} className="hover:text-white transition-colors">Conditions d'utilisation</button>
            <button onClick={() => navigate('/mentions-legales')} className="hover:text-white transition-colors">Mentions légales</button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              Nous contacter <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
