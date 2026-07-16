import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { useReveal } from '../hooks/useReveal';
import { FileText, Scale, Home, CreditCard, AlertTriangle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    icon: BookOpen,
    title: '1. Objet',
    content: [
      "Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités de mise à disposition et d'utilisation de la plateforme ImoFlex (application mobile et site web).",
      "En utilisant ImoFlex, vous acceptez pleinement et sans réserve les présentes CGU.",
    ],
  },
  {
    icon: Home,
    title: '2. Accès aux Services',
    content: [
      "ImoFlex est une plateforme de mise en relation entre propriétaires, locataires et agences immobilières.",
      "L'accès à certaines fonctionnalités nécessite la création d'un compte utilisateur. Vous êtes responsable de la confidentialité de vos identifiants.",
      "Nous nous réservons le droit de suspendre ou supprimer tout compte en cas de non-respect des présentes CGU ou de comportement frauduleux.",
    ],
  },
  {
    icon: Scale,
    title: '3. Engagements et Responsabilités',
    content: [
      "**Pour les propriétaires/agences :** vous vous engagez à fournir des annonces exactes, à jour, et à ne proposer que des biens dont vous avez la gestion légale.",
      "**Pour les locataires :** vous vous engagez à fournir des informations véridiques lors de votre candidature et à respecter vos obligations locatives.",
      "**Limitation de responsabilité d'ImoFlex :** ImoFlex agit en tant qu'intermédiaire technique. Nous ne sommes pas partie aux contrats de bail conclus entre locataires et propriétaires. Notre responsabilité ne saurait être engagée en cas de litige relatif au logement ou au bail.",
    ],
  },
  {
    icon: CreditCard,
    title: '4. Paiements et Frais',
    content: [
      "L'utilisation de base de l'application est gratuite. Certaines fonctionnalités (options premium, gestion avancée) peuvent être soumises à tarification.",
      "Les paiements de loyer via la plateforme sont traités par des partenaires de paiement sécurisés. Des frais de transaction standard (mobile money ou carte bancaire) peuvent s'appliquer.",
      "ImoFlex n'est pas un établissement bancaire et ne conserve pas les fonds au-delà des délais nécessaires de transfert vers les propriétaires.",
    ],
  },
  {
    icon: AlertTriangle,
    title: '5. Propriété Intellectuelle',
    content: [
      "L'ensemble des éléments constituant la plateforme ImoFlex (code, design, textes, logos, algorithmes) sont notre propriété exclusive.",
      "Toute reproduction, modification, ou utilisation non autorisée est strictement interdite.",
      "Les annonces (textes, photos) restent la propriété des annonceurs, qui nous accordent une licence d'utilisation pour leur diffusion sur la plateforme.",
    ],
  },
  {
    icon: FileText,
    title: '6. Modifications et Droit Applicable',
    content: [
      "Nous nous réservons le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle.",
      "Les présentes CGU sont soumises au droit du pays d'immatriculation de la société : **[PAYS D'IMMATRICULATION]**.",
      "En cas de litige, et à défaut de résolution à l'amiable, les tribunaux de **[VILLE DU SIÈGE]** seront seuls compétents.",
    ],
  },
];

export function TermsPage() {
  useReveal([]);

  return (
    <div className="pt-24">
      <Seo
        title="Conditions d'utilisation (CGU) — ImoFlex"
        description="Conditions générales d'utilisation de la plateforme ImoFlex pour les propriétaires, locataires et partenaires."
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 to-white" />
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-brand-700 text-white shadow-soft"
            >
              <FileText className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-ink-900"
            >
              Conditions d'utilisation (CGU)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-ink-500"
            >
              Dernière mise à jour : <strong>15 juillet 2026</strong>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="container-px">
          <div className="mx-auto max-w-3xl space-y-6">
            {SECTIONS.map((s, i) => (
              <div
                key={s.title}
                className="reveal card p-7"
                data-reveal-delay={i * 60}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-ink-900">{s.title}</h2>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {s.content.map((line, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-ink-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      <span dangerouslySetInnerHTML={{
                        __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
