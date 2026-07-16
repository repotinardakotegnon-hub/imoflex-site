import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check } from 'lucide-react';

const STORAGE_KEY = 'imoflex_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Slight delay for better UX — let page load first
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md"
      role="dialog"
      aria-label="Consentement aux cookies"
    >
      <div className="relative overflow-hidden rounded-2xl bg-ink-950 text-white shadow-[0_8px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600" />

        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-600/20 text-brand-400">
              <Cookie className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Paramètres de confidentialité</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-300">
                Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic.
                En continuant, vous acceptez notre{' '}
                <Link to="/confidentialite" className="text-brand-400 underline hover:text-brand-300">
                  politique de confidentialité
                </Link>{' '}
                et nos{' '}
                <Link to="/conditions" className="text-brand-400 underline hover:text-brand-300">
                  conditions d'utilisation
                </Link>.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={accept}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-500"
            >
              <Check className="h-3.5 w-3.5" />
              Tout accepter
            </button>
            <button
              onClick={decline}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/8 px-4 py-2.5 text-xs font-semibold text-ink-300 ring-1 ring-white/10 transition-colors hover:bg-white/12 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
