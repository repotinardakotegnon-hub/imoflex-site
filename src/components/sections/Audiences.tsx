import {
  Clock,
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  Eye,
  Search,
  CreditCard,
  History,
  BellRing,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { scrollToSection } from '../../utils/navigation';

type Benefit = { icon: LucideIcon; title: string; desc: string };

const OWNER_BENEFITS: Benefit[] = [
  { icon: Clock, title: 'Gain de temps', desc: 'Automatisez la gestion, les relances et les reçus.' },
  { icon: LayoutDashboard, title: 'Gestion centralisée', desc: 'Tous vos biens, locataires et contrats au même endroit.' },
  { icon: TrendingUp, title: 'Suivi financier', desc: 'Tableau de bord des revenus et impayés en temps réel.' },
  { icon: ShieldCheck, title: 'Réduction des impayés', desc: 'Rappels automatiques et paiement digital sécurisé.' },
  { icon: Eye, title: 'Visibilité accrue', desc: 'Annonces diffusées à des milliers de locataires qualifiés.' },
];

const TENANT_BENEFITS: Benefit[] = [
  { icon: Search, title: 'Recherche simplifiée', desc: 'Filtres avancés, photos HD, géolocalisation précise.' },
  { icon: CreditCard, title: 'Paiement sécurisé', desc: 'Mobile money, carte, virement — en quelques secondes.' },
  { icon: History, title: 'Historique des loyers', desc: 'Tous vos paiements et reçus accessibles à tout moment.' },
  { icon: BellRing, title: 'Notifications intelligentes', desc: 'Rappels avant échéance, confirmations instantanées.' },
  { icon: Sparkles, title: 'Expérience moderne', desc: 'Une app pensée pour le mobile, rapide et intuitive.' },
];

function AudienceBlock({
  id,
  tag,
  title,
  subtitle,
  benefits,
  cta,
  ctaTarget,
  image,
  reverse,
}: {
  id: string;
  tag: string;
  title: React.ReactNode;
  subtitle: string;
  benefits: Benefit[];
  cta: string;
  ctaTarget: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <Section id={id} className={reverse ? 'bg-ink-50/60' : ''}>
      <div className="container-px">
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <span className="eyebrow reveal">{tag}</span>
            <h2 className="section-title reveal mt-4" data-reveal-delay="60">{title}</h2>
            <p className="section-sub reveal" data-reveal-delay="120">{subtitle}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="reveal flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink-200/70 hover:ring-brand-200 transition-all"
                  data-reveal-delay={160 + i * 60}
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900">{b.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-8" data-reveal-delay={160 + benefits.length * 60}>
              <button onClick={() => scrollToSection(ctaTarget)} className="btn-primary">
                {cta}
              </button>
            </div>
          </div>

          <div className={`reveal ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`} data-reveal-delay="120">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-4xl bg-gradient-to-br from-brand-200/40 to-brand-400/20 blur-2xl" />
              <div className="overflow-hidden rounded-4xl shadow-glow ring-1 ring-ink-200/70">
                <img
                  src={image}
                  alt={typeof title === 'string' ? title : 'ImoFlex'}
                  className="h-[360px] w-full object-cover sm:h-[440px]"
                  loading="lazy"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-glow ring-1 ring-ink-200/60 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-ink-400">Taux d'occupation</p>
                    <p className="text-xl font-bold text-ink-900">98.4%</p>
                  </div>
                  <div className="h-10 w-px bg-ink-200" />
                  <div>
                    <p className="text-xs text-ink-400">Impayés</p>
                    <p className="text-xl font-bold text-emerald-600">-72%</p>
                  </div>
                  <div className="h-10 w-px bg-ink-200" />
                  <div>
                    <p className="text-xs text-ink-400">Revenus / mois</p>
                    <p className="text-xl font-bold text-brand-700">+12%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function OwnersSection() {
  return (
    <AudienceBlock
      id="proprietaires"
      tag="Pour les propriétaires"
      title={<>Gérez vos biens comme une vraie entreprise</>}
      subtitle="Centralisez la gestion, automatisez les paiements, réduisez les impayés. ImoFlex vous redonne du temps et de la visibilité."
      benefits={OWNER_BENEFITS}
      cta="Commencer avec ImoFlex"
      ctaTarget="publier"
      image="https://images.pexels.com/photos/7587955/pexels-photo-7587955.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  );
}

export function TenantsSection() {
  return (
    <AudienceBlock
      id="locataires"
      tag="Pour les locataires"
      title={<>Trouvez votre logement et payez en toute simplicité</>}
      subtitle="Une expérience moderne, de la recherche au paiement. Plus de déplacements, plus d'espèces, plus de stress."
      benefits={TENANT_BENEFITS}
      cta="Télécharger l'application"
      ctaTarget="telecharger"
      image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
      reverse
    />
  );
}
