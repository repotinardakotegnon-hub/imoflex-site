import { useEffect, useState } from 'react';
import { Menu, X, Download, Handshake } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { NAV_LINKS } from '../../data/site';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const go = (link: (typeof NAV_LINKS)[number]) => {
    if ('to' in link && link.to !== undefined) {
      navigate(`/${link.to}`);
    } else if ('section' in link && link.section !== undefined) {
      if (!isHome) {
        navigate('/');
        setTimeout(() => scrollToSection(link.section!), 100);
      } else {
        scrollToSection(link.section!);
      }
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4 xl:h-24">
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActiveRoute = 'to' in link && (link.to === '' ? isHome : location.pathname.startsWith(`/${link.to}`));

              return (
                <button
                  key={link.label}
                  onClick={() => go(link)}
                  className={`rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-colors whitespace-nowrap ${
                    isActiveRoute
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <button onClick={() => {
              navigate('/partenaires');
            }} className="btn-ghost text-sm">
              <Handshake className="h-4 w-4" />
              Devenir partenaire
            </button>
            <button onClick={() => {
               if(!isHome) { navigate('/'); setTimeout(() => scrollToSection('telecharger'), 100); }
               else scrollToSection('telecharger');
            }} className="btn-primary text-sm">
              <Download className="h-4 w-4" />
              Télécharger
            </button>
          </div>

          <button
            className="xl:hidden grid h-10 w-10 place-items-center rounded-xl text-ink-700 hover:bg-ink-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px pb-4">
          <div className="card p-3">
            <div className="grid gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => go(link)}
                  className="rounded-xl px-3 py-2.5 text-left text-sm font-medium text-ink-700 hover:bg-ink-100"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="mt-3 grid gap-2">
              <button onClick={() => {
                if(!isHome) { navigate('/'); setTimeout(() => scrollToSection('telecharger'), 100); }
                else scrollToSection('telecharger');
                setOpen(false);
              }} className="btn-primary w-full text-sm">
                <Download className="h-4 w-4" />
                Télécharger l'application
              </button>
              <button onClick={() => {
                navigate('/partenaires');
                setOpen(false);
              }} className="btn-secondary w-full text-sm">
                <Handshake className="h-4 w-4" />
                Devenir partenaire
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
