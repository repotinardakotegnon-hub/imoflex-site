import { PlusCircle, BarChart3, Users, ShieldCheck } from 'lucide-react';
import { Section } from '../ui/Section';
import { scrollToSection } from '../../utils/navigation';

const PERKS = [
  { icon: BarChart3, label: 'Tableau de bord financier' },
  { icon: Users, label: 'Locataires qualifiés' },
  { icon: ShieldCheck, label: 'Paiements sécurisés' },
];

export function PublishCTA() {
  return (
    <Section id="publier" className="relative overflow-hidden bg-ink-50/60">
      <div className="container-px">
        <div className="reveal relative overflow-hidden rounded-4xl bg-white p-8 ring-1 ring-ink-200/70 shadow-card sm:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-100 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow">Propriétaires</span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-ink-900">
                Publiez votre bien en 3 minutes
              </h2>
              <p className="mt-3 max-w-xl text-ink-500">
                Photos, description, loyer — votre annonce est visible par des milliers de
                locataires qualifiés. Suivez les demandes et les paiements depuis un tableau de bord.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                {PERKS.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 text-sm text-ink-700">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <p.icon className="h-4 w-4" />
                    </span>
                    {p.label}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => scrollToSection('telecharger')} className="btn-primary shrink-0">
              <PlusCircle className="h-4 w-4" />
              Publier un bien
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
