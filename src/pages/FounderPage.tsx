import {
  ArrowDown, Target, Users, Zap, Globe, Quote,
  GraduationCap, Lightbulb, MapPin,
  Clock, DollarSign, AlertTriangle, ShieldOff,
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { useReveal } from '../hooks/useReveal';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ─── Timeline ────────────────────────────────────────────────────── */
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

/* ─── Motivations ─────────────────────────────────────────────────── */
const MOTIVATIONS = [
  {
    icon: Target,
    title: 'Résoudre des problèmes réels',
    text: "Construire des solutions utiles avant de créer des fonctionnalités.",
    color: 'from-brand-700 to-brand-500',
  },
  {
    icon: Users,
    title: 'Faciliter la vie des citoyens',
    text: "Réduire le temps, les coûts et les frustrations liés au logement.",
    color: 'from-emerald-700 to-emerald-500',
  },
  {
    icon: Globe,
    title: "Moderniser l'immobilier africain",
    text: "Apporter plus de transparence, de simplicité et d'efficacité.",
    color: 'from-sky-700 to-sky-500',
  },
  {
    icon: Zap,
    title: 'Construire des solutions durables',
    text: "Créer des produits capables d'avoir un impact à grande échelle.",
    color: 'from-amber-700 to-amber-500',
  },
];

/* ─── Stats / Problem Figures ─────────────────────────────────────── */
const STATS = [
  {
    icon: Clock,
    value: '3 – 8',
    unit: 'semaines',
    label: 'Durée moyenne de recherche',
    sub: "de logement sans plateforme digitale",
    color: 'text-brand-600',
    bg: 'bg-brand-50',
  },
  {
    icon: DollarSign,
    value: '1 – 3',
    unit: 'mois de loyer',
    label: "Frais d'intermédiaires",
    sub: "versés en plus avant de signer",
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: AlertTriangle,
    value: '70 %',
    unit: '',
    label: 'Annonces non vérifiées',
    sub: "sur les réseaux sociaux informels",
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: ShieldOff,
    value: '1 / 3',
    unit: '',
    label: "Locataires victimes d'arnaques",
    sub: "au moins une fois dans leur recherche",
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
];

/* ─── Component ───────────────────────────────────────────────────── */
export function FounderPage() {
  useReveal([]);
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <Seo
        title="Répotinard Akotègnon — Fondateur d'ImoFlex"
        description="Découvrez l'histoire de Répotinard Akotègnon, fondateur et CEO d'ImoFlex, et le parcours qui l'a conduit à créer cette plateforme immobilière africaine."
      />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white" />
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-radial-brand opacity-60"
        />

        <div className="container-px">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 55 }}
              className="relative mx-auto max-w-sm w-full"
            >
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-400/30 to-brand-700/20 blur-3xl" />
              <div className="overflow-hidden rounded-[2.5rem] shadow-glow ring-1 ring-ink-200/60">
                <img
                  src="/fondateur.png"
                  alt="Répotinard Akotègnon — Fondateur d'ImoFlex"
                  className="h-[520px] w-full object-cover object-top"
                  loading="eager"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-glow ring-1 ring-ink-200/50 backdrop-blur-md">
                <p className="text-sm font-bold text-ink-900">Répotinard Akotègnon</p>
                <p className="text-xs text-ink-500">Fondateur &amp; CEO · ImoFlex</p>
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
                transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 65 }}
                className="mt-5 text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-ink-900 text-balance"
              >
                Répotinard Akotègnon
                <span className="mt-2 block text-2xl sm:text-3xl font-semibold text-brand-700">
                  Fondateur &amp; CEO d'ImoFlex
                </span>
              </motion.h1>
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 border-l-4 border-brand-500 pl-5 text-lg italic text-ink-500 leading-relaxed"
              >
                Transformer les difficultés du logement en Afrique en solutions digitales accessibles à tous.
              </motion.blockquote>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8"
              >
                <a href="#histoire" className="btn-primary inline-flex items-center gap-2">
                  Découvrir mon parcours
                  <ArrowDown className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MON HISTOIRE ─────────────────────────────────────── */}
      <Section id="histoire" className="bg-ink-50/50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow reveal">Mon histoire</span>
            <h2 className="section-title reveal mt-4" data-reveal-delay="60">
              D'où vient ImoFlex ?
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-600">
              <p className="reveal" data-reveal-delay="80">
                Né à <strong className="text-ink-900"> Cotonou </strong> au Bénin, Répotinard Akotègnon s'intéresse très tôt aux défis du quotidien auxquels sont confrontées des millions de personnes.
              </p>
              <p className="reveal" data-reveal-delay="140">
                Durant ses années d'études et au contact des réalités du terrain, il observe un problème récurrent : trouver un logement reste un parcours long, coûteux et souvent stressant.
              </p>
              <p className="reveal" data-reveal-delay="180">
                Les futurs locataires passent par des démarcheurs, des agences ou des réseaux informels. Les recherches prennent parfois plusieurs semaines et exposent les personnes à de nombreuses difficultés :
              </p>

              <ul className="reveal space-y-3 pl-1" data-reveal-delay="220">
                {[
                  "Manque d'informations fiables",
                  "Perte de temps considérable",
                  "Déplacements inutiles",
                  "Frais supplémentaires non prévus",
                  "Risques d'arnaques",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <blockquote className="reveal rounded-2xl bg-brand-50 border-l-4 border-brand-500 p-6 text-lg italic text-brand-800 font-medium" data-reveal-delay="260">
                Pourquoi trouver un logement devrait-il être aussi compliqué à l'ère du numérique ?
              </blockquote>

              <p className="reveal font-semibold text-ink-800" data-reveal-delay="300">
                Cette réflexion marque le début d'une aventure entrepreneuriale qui donnera naissance à ImoFlex.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. COMMENT IMOFLEX EST NÉ ───────────────────────────────── */}
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

      {/* ── 4. PARCOURS ENTREPRENEURIAL ─────────────────────────── */}
      <Section className="bg-ink-50/50">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow reveal">Profil</span>
              <h2 className="section-title reveal mt-4" data-reveal-delay="60">
                Mon parcours entrepreneurial
              </h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p className="reveal" data-reveal-delay="100">
                  Mon approche n'est pas celle d'un développeur qui code pour coder, ni d'un business man qui cherche à maximiser les marges. C'est celle d'un{' '}
                  <strong className="text-ink-900">résolveur de problèmes</strong>.
                </p>
                <p className="reveal" data-reveal-delay="140">
                  Je suis passionné par la technologie, l'intelligence artificielle, la création de solutions numériques, l'automatisation et l'entrepreneuriat digital — non comme des fins en soi, mais comme des outils au service d'un impact réel.
                </p>
                <blockquote className="reveal my-6 border-l-4 border-brand-500 pl-5 text-base italic text-ink-700 font-medium" data-reveal-delay="180">
                  Je suis convaincu que la technologie doit avant tout résoudre des problèmes réels. Mon approche consiste à identifier les difficultés du quotidien, comprendre leurs causes profondes et construire des solutions simples, accessibles et à fort impact.
                </blockquote>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal" data-reveal-delay="100">
              {[
                { label: 'Technologie', desc: "Outils numériques au service de l'humain" },
                { label: 'Intelligence Artificielle', desc: "Automatisation intelligente des processus" },
                { label: 'Entrepreneuriat Digital', desc: "Bâtir des produits à impact mesurable" },
                { label: 'Résolution de problèmes', desc: "Partir du terrain, pas de la théorie" },
              ].map((skill) => (
                <div key={skill.label} className="card p-5 hover:-translate-y-1 transition-transform">
                  <p className="text-sm font-bold text-ink-900">{skill.label}</p>
                  <p className="mt-1 text-xs text-ink-500 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 5. CE QUI ME MOTIVE ─────────────────────────────────── */}
      <Section>
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow reveal">Motivations</span>
            <h2 className="section-title reveal mt-4" data-reveal-delay="60">
              Ce qui me motive chaque jour
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MOTIVATIONS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-7 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
              >
                <div className={`h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-soft`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-ink-900">{item.title}</p>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 6. CHIFFRES SUR LE PROBLÈME ─────────────────────────── */}
      <Section className="bg-ink-50/50">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow reveal">Le problème en chiffres</span>
            <h2 className="section-title reveal mt-4" data-reveal-delay="60">
              Pourquoi l'immobilier africain doit changer
            </h2>
            <p className="reveal mt-3 text-ink-500" data-reveal-delay="100">
              Ces chiffres illustrent les difficultés réelles que vivent locataires et propriétaires chaque jour.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-7 flex flex-col gap-3 hover:-translate-y-1 transition-transform"
              >
                <div className={`h-11 w-11 grid place-items-center rounded-xl ${s.bg}`}>
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <div>
                  <span className={`text-4xl font-extrabold tracking-tight ${s.color}`}>
                    {s.value}
                  </span>
                  {s.unit && (
                    <span className="ml-1 text-sm font-semibold text-ink-400">{s.unit}</span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink-900">{s.label}</p>
                  <p className="mt-1 text-xs text-ink-500">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 7. MESSAGE PERSONNEL ─────────────────────────────────── */}
      <Section>
        <div className="container-px">
          <div className="reveal mx-auto max-w-4xl overflow-hidden rounded-4xl bg-gradient-to-br from-brand-800 to-brand-950 p-10 text-white shadow-glow sm:p-14 relative">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-brand-600/20 blur-3xl" />

            <Quote className="relative h-10 w-10 text-brand-300" />
            <div className="relative mt-6 space-y-5 text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
              <p>
                ImoFlex est né d'une conviction simple : la technologie doit rendre les choses plus simples, plus rapides et plus accessibles.
              </p>
              <p>
                Derrière cette plateforme se trouve la volonté de transformer un problème quotidien en une opportunité de progrès pour des millions de personnes.
              </p>
              <p>
                Ce n'est que le début d'une aventure dont l'objectif est de contribuer à la modernisation de l'écosystème immobilier africain.
              </p>
            </div>
            <p className="relative mt-8 text-sm font-semibold text-white/70">
              — Répotinard Akotègnon, Fondateur &amp; CEO d'ImoFlex
            </p>

            <div className="relative mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/vision')}
                className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Notre Vision
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
