import { Quote, MapPin, GraduationCap, Lightbulb, ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { useReveal } from '../hooks/useReveal';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const JOURNEY = [
  {
    icon: MapPin,
    label: 'Origine',
    text: "Né en Afrique de l'Ouest, avec une compréhension profonde des réalités du marché immobilier local.",
  },
  {
    icon: GraduationCap,
    label: 'Formation',
    text: 'Parcours en ingénierie, finance et entrepreneuriat — une combinaison unique au service du PropTech.',
  },
  {
    icon: Lightbulb,
    label: 'Déclic',
    text: "Une expérience frustrante de recherche de logement révèle l'absence d'infrastructure numérique en immobilier africain.",
  },
];

export function FounderPage() {
  useReveal([]);
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <Seo
        title="Le Fondateur — ImoFlex"
        description="Découvrez le fondateur d'ImoFlex, sa vision et sa lettre ouverte pour transformer l'immobilier africain grâce à la technologie."
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 to-white" />
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
              className="reveal"
            >
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-4xl bg-gradient-to-br from-brand-300/40 to-brand-500/20 blur-2xl" />
                <div className="overflow-hidden rounded-4xl shadow-glow ring-1 ring-ink-200/70">
                  <img
                    src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Fondateur d'ImoFlex"
                    className="h-[480px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-glow ring-1 ring-ink-200/60 backdrop-blur">
                  <p className="text-sm font-bold text-ink-900">Répotinard AKOTEGNON</p>
                  <p className="text-xs text-ink-500">Fondateur & CEO · Visionnaire PropTech</p>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="eyebrow"
              >
                Le Fondateur
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 70 }}
                className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight text-ink-900 text-balance"
              >
                Un entrepreneur africain avec une mission continentale
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-5 text-lg text-ink-500"
              >
                Derrière ImoFlex, il y a une conviction profonde : l'Afrique ne doit plus subir
                son immobilier. Elle doit le piloter. Cette conviction est née d'une expérience
                personnelle, portée par des années de terrain et de technologie.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button onClick={() => navigate('/vision')} className="btn-primary">
                  Notre Vision
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-secondary">
                  Me contacter
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Open letter */}
      <Section className="bg-ink-50/60">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow reveal">Lettre ouverte</span>
            <h2 className="section-title reveal mt-4" data-reveal-delay="60">
              Pourquoi j'ai créé ImoFlex
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-600">
              <p className="reveal" data-reveal-delay="80">
                En 2024, j'ai vécu ce que vivent des millions d'Africains chaque jour : chercher un
                logement pendant des semaines, jongler entre des annonces dispersées sur WhatsApp
                et Facebook, appeler des numéros qui ne répondent plus, visiter des appartements
                qui n'existent pas, et finalement payer un loyer en liquide sans aucun reçu.
              </p>
              <p className="reveal" data-reveal-delay="140">
                Cette frustration m'a ouvert les yeux. Le problème n'était pas un manque de
                logements — il y avait une vraie demande. Le problème était l'absence totale
                d'infrastructure numérique. Pas de plateforme unifiée et fiable. Pas de paiement
                digital. Pas de gestion moderne pour les propriétaires. Zéro.
              </p>
              <p className="reveal" data-reveal-delay="200">
                J'ai regardé ce qui se faisait à l'autre bout du monde — Zillow aux États-Unis,
                Rightmove en UK, PropertyGuru en Asie. Des plateformes milliardaires bâties sur
                un constat simple : organiser un marché fragmenté crée une valeur immense. Pourquoi
                l'Afrique n'aurait-elle pas son équivalent ?
              </p>
              <p className="reveal" data-reveal-delay="260">
                ImoFlex est ma réponse à cette question. Une réponse africaine, construite pour
                l'Afrique, par des gens qui comprennent ses réalités — le mobile money, les marchés
                informels, les propriétaires sans système de gestion, les locataires qui méritent
                mieux.
              </p>
              <p className="reveal font-semibold text-ink-800" data-reveal-delay="320">
                Ce n'est pas juste une application. C'est l'infrastructure immobilière d'un
                continent en mouvement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section>
        <div className="container-px">
          <div className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-4xl bg-gradient-to-br from-brand-800 to-brand-950 p-10 text-white shadow-glow sm:p-14">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <Quote className="relative h-10 w-10 text-brand-300" />
            <p className="relative mt-4 text-xl font-medium leading-relaxed sm:text-2xl">
              "L'Afrique ne doit plus subir son immobilier. Elle doit le piloter. ImoFlex met
              entre les mains de chaque locataire, chaque propriétaire, chaque agence, les outils
              d'un secteur moderne. C'est notre contribution à un continent qui avance."
            </p>
            <p className="relative mt-6 text-sm font-semibold text-white/80">
              — Répotinard AKOTEGNON, Fondateur & CEO d'ImoFlex
            </p>
          </div>
        </div>
      </Section>

      {/* Journey */}
      <Section className="bg-ink-50/60">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow reveal">Parcours</span>
            <h2 className="section-title reveal mt-4" data-reveal-delay="60">
              Ce qui forge une vision
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {JOURNEY.map((item, i) => (
              <div
                key={item.label}
                className="reveal card p-7 hover:-translate-y-1 transition-all"
                data-reveal-delay={i * 80}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-700 text-white shadow-soft">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {item.label}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container-px">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">
              Prêt à rejoindre l'aventure ?
            </h2>
            <p className="mt-3 text-ink-500">
              Que vous soyez investisseur, partenaire ou utilisateur — votre place est ici.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={() => navigate('/investisseurs')} className="btn-primary">
                Devenir investisseur
              </button>
              <button onClick={() => navigate('/contact')} className="btn-secondary">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
