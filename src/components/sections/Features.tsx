import { Check } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { FEATURES } from '../../data/site';

export function Features() {
  return (
    <Section id="fonctionnalites" className="relative">
      <div className="absolute inset-0 -z-10 bg-radial-brand opacity-40" />
      <div className="container-px">
        <SectionHeader
          eyebrow="Solutions"
          title={<>Tout ce qu'il faut pour maîtriser votre immobilier</>}
          subtitle="Cinq piliers intégrés dans une seule application, pensés pour le marché africain."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="reveal group card relative overflow-hidden p-6 hover:-translate-y-1 transition-all"
              data-reveal-delay={i * 70}
            >
              <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${f.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
              <div className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-soft`}>
                <f.icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-ink-900">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{f.desc}</p>
              <ul className="relative mt-4 space-y-1.5">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-ink-700">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal relative overflow-hidden rounded-3xl bg-ink-950 p-7 text-white shadow-glow" data-reveal-delay={FEATURES.length * 70}>
            <div className="absolute inset-0 bg-radial-brand opacity-40" />
            <div className="relative">
              <h3 className="text-xl font-bold">Une fintech, pas seulement une app immobilière</h3>
              <p className="mt-3 text-sm text-white/70">
                Portefeuille numérique, mobile money, reçus automatiques — ImoFlex construit
                l'infrastructure financière de l'immobilier africain.
              </p>
              <a href="#telecharger" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-all hover:-translate-y-0.5">
                Explorer l'application
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
