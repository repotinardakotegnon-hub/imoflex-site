import { useState } from 'react';
import { Section, SectionHeader } from '../ui/Section';
import { STEPS_TENANT, STEPS_OWNER } from '../../data/site';
import { scrollToSection } from '../../utils/navigation';
import { useReveal } from '../../hooks/useReveal';

export function HowItWorks() {
  const [tab, setTab] = useState<'tenant' | 'owner'>('tenant');
  useReveal([tab]);

  const steps = tab === 'tenant' ? STEPS_TENANT : STEPS_OWNER;
  const cta = tab === 'tenant' ? 'Télécharger l’application' : 'Commencer avec ImoFlex';
  const ctaTarget = tab === 'tenant' ? 'telecharger' : 'publier';

  return (
    <Section id="comment-ca-marche" className="bg-ink-50/60">
      <div className="container-px">
        <SectionHeader
          eyebrow="Comment ça marche"
          title={<>Une expérience simple, du premier clic au paiement</>}
          subtitle="Choisissez votre profil et découvrez le parcours en 5 étapes."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full bg-white p-1 ring-1 ring-ink-200 shadow-soft">
            {[
              { key: 'tenant', label: 'Pour les locataires' },
              { key: 'owner', label: 'Pour les propriétaires' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as 'tenant' | 'owner')}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  tab === t.key ? 'bg-brand-700 text-white shadow-soft' : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal card relative p-5 hover:-translate-y-1 transition-all"
              data-reveal-delay={i * 80}
            >
              <div className="absolute right-4 top-4 text-5xl font-extrabold text-ink-100 select-none">
                {i + 1}
              </div>
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-700 text-sm font-bold text-white shadow-soft">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-ink-200 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button onClick={() => scrollToSection(ctaTarget)} className="btn-primary">
            {cta}
          </button>
        </div>
      </div>
    </Section>
  );
}
