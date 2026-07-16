import { Apple, Play, QrCode } from 'lucide-react';

export function DownloadCTA({
  variant = 'light',
  title = 'Téléchargez ImoFlex dès aujourd’hui',
  subtitle = 'Disponible sur Google Play et App Store. Scannez le QR code pour installer en un instant.',
}: {
  variant?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
}) {
  const dark = variant === 'dark';
  return (
    <div
      className={`relative overflow-hidden rounded-4xl p-8 sm:p-12 ${
        dark
          ? 'bg-gradient-to-br from-brand-800 via-brand-700 to-brand-950 text-white'
          : 'bg-gradient-to-br from-brand-50 via-white to-brand-50 text-ink-900 ring-1 ring-brand-100'
      }`}
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <h3 className={`text-2xl sm:text-3xl font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>
            {title}
          </h3>
          <p className={`mt-3 max-w-xl ${dark ? 'text-white/80' : 'text-ink-500'}`}>{subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all hover:-translate-y-0.5 ${
                dark ? 'bg-white text-ink-900' : 'bg-ink-900 text-white'
              }`}
            >
              <Apple className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wide opacity-70">App Store</span>
                <span className="block text-sm font-semibold">Télécharger</span>
              </span>
            </a>
            <a
              href="#"
              className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all hover:-translate-y-0.5 ${
                dark ? 'bg-white text-ink-900' : 'bg-ink-900 text-white'
              }`}
            >
              <Play className="h-6 w-6 fill-current" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wide opacity-70">Google Play</span>
                <span className="block text-sm font-semibold">Télécharger</span>
              </span>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className={`grid h-36 w-36 place-items-center rounded-2xl bg-white p-3 shadow-glow ${
              dark ? 'ring-4 ring-white/20' : 'ring-1 ring-ink-200'
            }`}
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-ink-50 text-ink-700">
              <QrCode className="h-12 w-12" />
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider">ImoFlex</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
