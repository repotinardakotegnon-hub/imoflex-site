import {
  TrendingUp,
  Globe2,
  Rocket,
  LineChart,
  Target,
  ArrowRight,
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { useNavigate } from 'react-router-dom';

const PILLARS = [
  {
    icon: Globe2,
    title: 'Un marché massif',
    desc: "L'Afrique compte 1,4 milliard d'habitants et une urbanisation parmi les plus rapides au monde. Le besoin de logements et de services immobiliers numériques est immense.",
    stat: '1.4 Md',
    statLabel: 'habitants',
  },
  {
    icon: TrendingUp,
    title: 'Croissance soutenue',
    desc: "Le secteur immobilier africain croît de 6 à 8% par an. La digitalisation des paiements et de la gestion est encore embryonnaire — un terrain de jeu vierge.",
    stat: '+7%',
    statLabel: 'TCAM',
  },
  {
    icon: Rocket,
    title: 'Expansion panafricaine',
    desc: 'Déploiement multi-pays, intégration mobile money, partenariats agences. ImoFlex se positionne comme l’infrastructure immobilière de référence.',
    stat: '24',
    statLabel: 'villes cibles',
  },
  {
    icon: LineChart,
    title: 'Modèle économique robuste',
    desc: "Commissions sur transactions, abonnements propriétaires, services fintech. Plusieurs revenus récurrents, une plateforme scalable.",
    stat: '4',
    statLabel: 'revenus',
  },
];

export function Investors() {
  const navigate = useNavigate();
  return (
    <Section id="investisseurs" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/50 to-white" />
      <div className="container-px">
        <SectionHeader
          eyebrow="Investisseurs"
          title={<>Investir dans l'avenir de l'immobilier africain</>}
          subtitle="Une opportunité rare : un marché massif, une traction réelle, une vision long terme. ImoFlex construit l'infrastructure immobilière et fintech de l'Afrique."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="reveal group card relative overflow-hidden p-7 hover:-translate-y-1 transition-all"
              data-reveal-delay={i * 80}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-700 text-white shadow-soft">
                  <p.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-brand-700">{p.stat}</p>
                  <p className="text-xs text-ink-400">{p.statLabel}</p>
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Vision band */}
        <div className="reveal mt-10 overflow-hidden rounded-4xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-950 p-8 sm:p-12 text-white shadow-glow">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/20">
                <Target className="h-3.5 w-3.5" />
                Vision long terme
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold">
                Devenir la plateforme immobilière de référence en Afrique
              </h3>
              <p className="mt-3 max-w-xl text-white/80">
                Nous construisons une infrastructure numérique qui connecte locataires,
                propriétaires, agences et institutions financières — le socle d'un écosystème
                immobilier et fintech panafricain.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="btn-white inline-flex shrink-0"
            >
              Contacter l'équipe
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
