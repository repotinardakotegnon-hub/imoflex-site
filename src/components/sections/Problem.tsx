import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { PROBLEMS } from '../../data/site';

export function Problem() {
  return (
    <Section id="probleme" className="relative bg-ink-50/60">
      <div className="container-px">
        <SectionHeader
          eyebrow="Le problème"
          title={<>L'immobilier africain mérite mieux que des processus manuels</>}
          subtitle="Des millions de locataires et propriétaires se heurtent chaque jour à un secteur fragmenté, opaque et lent. ImoFlex transforme cette réalité."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="reveal card group p-6 hover:-translate-y-1 hover:shadow-glow transition-all"
              data-reveal-delay={i * 70}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-rose-50 text-rose-500 ring-1 ring-rose-100">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-ink-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                <CheckCircle2 className="h-3.5 w-3.5" />
                ImoFlex résout ce problème
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}

          {/* Solution card */}
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 p-6 text-white shadow-glow" data-reveal-delay={PROBLEMS.length * 70}>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <h3 className="text-lg font-bold">La solution ImoFlex</h3>
            <p className="mt-2 text-sm text-white/80">
              Une seule plateforme pour rechercher, gérer et payer. Transparent, rapide, sécurisé.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {['Recherche unifiée', 'Gestion automatisée', 'Paiement digital', 'Suivi en temps réel'].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-200" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
