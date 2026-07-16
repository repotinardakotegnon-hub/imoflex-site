import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { useReveal } from '../hooks/useReveal';
import { Shield, Eye, Lock, Server, UserCheck, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    icon: Eye,
    title: '1. Données collectées',
    content: [
      "**Données d'identité :** nom, prénom, adresse email, numéro de téléphone lors de la création de compte.",
      "**Données d'utilisation :** pages visitées, durée de session, actions effectuées dans l'application.",
      "**Données de localisation :** uniquement avec votre consentement explicite, pour la recherche de logements à proximité.",
      "**Données financières :** informations nécessaires au traitement des paiements (nous ne stockons jamais vos coordonnées bancaires complètes).",
    ],
  },
  {
    icon: Lock,
    title: '2. Utilisation des données',
    content: [
      "Fourniture et amélioration des services ImoFlex (recherche, gestion locative, paiements).",
      "Communication transactionnelle : confirmations de paiement, rappels de loyer, alertes importantes.",
      "Newsletter et communications marketing, uniquement avec votre consentement préalable.",
      "Respect de nos obligations légales et prévention de la fraude.",
    ],
  },
  {
    icon: UserCheck,
    title: '3. Vos droits',
    content: [
      "**Droit d'accès :** vous pouvez demander la liste de toutes vos données que nous détenons.",
      "**Droit de rectification :** vous pouvez corriger toute information inexacte.",
      "**Droit à l'effacement :** vous pouvez demander la suppression de votre compte et de vos données.",
      "**Droit de portabilité :** vous pouvez récupérer vos données dans un format lisible.",
      "Pour exercer ces droits, contactez-nous à : **[legal@imoflex.com]**",
    ],
  },
  {
    icon: Server,
    title: '4. Stockage & Sécurité',
    content: [
      "Vos données sont hébergées sur des serveurs sécurisés dans l'Union Européenne ou dans des pays offrant un niveau de protection équivalent.",
      "Nous utilisons le chiffrement TLS/SSL pour toutes les transmissions de données.",
      "L'accès à vos données est strictement limité aux employés qui en ont besoin pour vous servir.",
      "Vos données de paiement sont traitées par des partenaires certifiés PCI DSS.",
    ],
  },
  {
    icon: Shield,
    title: '5. Cookies',
    content: [
      "**Cookies essentiels :** nécessaires au fonctionnement du site (session, sécurité). Ils ne peuvent pas être refusés.",
      "**Cookies analytiques :** nous permettent de comprendre comment vous utilisez notre site (Google Analytics). Vous pouvez les refuser.",
      "**Cookies marketing :** utilisés pour personnaliser les publicités. Ils nécessitent votre consentement.",
      "Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement.",
    ],
  },
  {
    icon: Mail,
    title: '6. Contact & Réclamations',
    content: [
      "**Responsable du traitement :** [NOM LÉGAL DE LA SOCIÉTÉ], [ADRESSE DU SIÈGE]",
      "**Email :** legal@imoflex.com",
      "**Délégué à la Protection des Données (DPO) :** [NOM DU DPO]",
      "Vous avez le droit de déposer une réclamation auprès de l'autorité de contrôle compétente de votre pays.",
    ],
  },
];

export function PrivacyPage() {
  useReveal([]);

  return (
    <div className="pt-24">
      <Seo
        title="Politique de confidentialité — ImoFlex"
        description="Découvrez comment ImoFlex collecte, utilise et protège vos données personnelles. Transparence totale sur notre politique de confidentialité."
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
              <Shield className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-ink-900"
            >
              Politique de confidentialité
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-ink-500"
            >
              Dernière mise à jour : <strong>15 juillet 2026</strong>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-3 text-ink-500"
            >
              Chez ImoFlex, la protection de vos données personnelles est une priorité absolue.
              Ce document explique de manière transparente comment nous collectons, utilisons
              et protégeons vos informations.
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
