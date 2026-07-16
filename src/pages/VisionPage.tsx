import { Target, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { TIMELINE } from '../data/site';
import { useReveal } from '../hooks/useReveal';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/navigation';
import { Seo } from '../components/ui/Seo';
import { motion } from 'framer-motion';

export function VisionPage() {
  useReveal([TIMELINE.length]);
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <Seo
        title="Vision — ImoFlex"
        description="Découvrez la vision d'ImoFlex : bâtir l'infrastructure immobilière numérique de référence pour toute l'Afrique."
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 to-white" />
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Notre Vision
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, type: 'spring', stiffness: 70 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-ink-900 text-balance"
            >
              Bâtir l'infrastructure immobilière de{' '}
              <span className="text-brand-700">l'Afrique</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-lg text-ink-500"
            >
              ImoFlex est né d'un constat simple : l'immobilier africain mérite une
              infrastructure numérique de classe internationale. Voici la mission
              et l'ambition qui portent ce projet.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <button onClick={() => navigate('/investisseurs')} className="btn-primary">
                Voir le pitch investisseurs
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => navigate('/fondateur')} className="btn-secondary">
                Mot du Fondateur
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-ink-50/60">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow reveal">Histoire du projet</span>
            <h2 className="section-title reveal mt-4" data-reveal-delay="60">
              D'un problème personnel à une mission continentale
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
              <p className="reveal" data-reveal-delay="100">
                Tout a commencé par une frustration banale : chercher un appartement pendant des
                semaines, jongler entre des annonces dispersées, des appels sans suite, des
                visites infructueuses et des paiements en espèces sans reçu. Une expérience
                vécue par des millions d'Africains chaque jour.
              </p>
              <p className="reveal" data-reveal-delay="160">
                De cette frustration est née une conviction : l'immobilier africain ne souffrait
                pas d'un manque de demande, mais d'une absence d'infrastructure. Pas de
                plateforme unifiée, pas de paiement digital, pas de gestion moderne. ImoFlex
                a été conçu pour combler ce vide.
              </p>
              <p className="reveal" data-reveal-delay="220">
                Aujourd'hui, ImoFlex n'est plus une simple application — c'est une mission :
                construire l'infrastructure numérique immobilière de référence pour tout le
                continent africain.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission / Vision / Ambition */}
      <Section>
        <div className="container-px">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Target,
                tag: 'Mission',
                title: "Moderniser l'immobilier en Afrique",
                desc: "Simplifier la recherche, la gestion et le paiement de logements grâce à la technologie, pour tous.",
              },
              {
                icon: Eye,
                tag: 'Vision',
                title: "L'infrastructure de référence",
                desc: "Devenir la plateforme immobilière et fintech panafricaine de référence, de Dakar à Nairobi.",
              },
              {
                icon: Sparkles,
                tag: 'Ambition',
                title: 'Transformer un continent',
                desc: "Permettre à des centaines de millions d'Africains d'accéder à un immobilier transparent et digital.",
              },
            ].map((c, i) => (
              <div
                key={c.tag}
                className="reveal card p-7 hover:-translate-y-1 transition-all"
                data-reveal-delay={i * 80}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-700 text-white shadow-soft">
                  <c.icon className="h-6 w-6" />
                </div>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {c.tag}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" className="bg-ink-50/60">
        <div className="container-px">
          <SectionHeader
            eyebrow="Parcours"
            title={<>Une trajectoire ambitieuse</>}
            subtitle="De l'idée à l'expansion panafricaine — les jalons clés d'ImoFlex."
          />

          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-300 via-brand-400 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <div
                  key={t.year + t.title}
                  className={`reveal relative flex gap-6 sm:gap-0 ${i % 2 ? 'sm:flex-row-reverse' : ''}`}
                  data-reveal-delay={i * 80}
                >
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="absolute left-4 top-1.5 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-brand-600 ring-4 ring-brand-100 sm:left-1/2" />
                  <div className={`flex-1 pl-10 sm:w-1/2 sm:pl-0 ${i % 2 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                    <div className="card p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                        {t.year}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-ink-900">{t.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container-px">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">
              Partenaire de cette aventure ?
            </h2>
            <p className="mt-3 text-ink-500">
              Que vous soyez investisseur, partenaire ou utilisateur — rejoignez la trajectoire d'ImoFlex.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={() => navigate('/investisseurs')} className="btn-primary">
                Devenir investisseur
              </button>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => scrollToSection('telecharger'), 100);
                }}
                className="btn-secondary"
              >
                Télécharger l'application
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
