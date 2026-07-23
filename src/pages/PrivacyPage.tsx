import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { useReveal } from '../hooks/useReveal';
import { Shield, Eye, Lock, Server, UserCheck, Mail, Target, Scale, Share2, Clock, AlertTriangle, UserX, RefreshCw, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    icon: Eye,
    title: '1. Objet',
    content: [
      "La présente Politique de Confidentialité décrit la manière dont ImoFlex collecte, utilise, conserve et protège les données personnelles des Utilisateurs (Locataires et Propriétaires) de la plateforme ImoFlex (site web et application mobile), ci-après le « Service ».",
      "En utilisant le Service, l'Utilisateur reconnaît avoir pris connaissance de la présente Politique."
    ],
  },
  {
    icon: UserCheck,
    title: '2. Responsable du traitement',
    content: [
      "Le responsable du traitement des données personnelles collectées via le Service est AKOTEGNON Repotinard Salomon Pittoresque (entrepreneur individuel, IFU 0202661022204), joignable à l'adresse : **contact.imoflex@gmail.com**."
    ],
  },
  {
    icon: Server,
    title: '3. Données collectées',
    content: [
      "**3.1 Données fournies directement par l'Utilisateur** : Nom et prénom(s), Numéro de téléphone, Adresse email, Rôle sur la plateforme (Locataire ou Propriétaire), Numéro Mobile Money (pour l'exécution des versements et retraits), Contenu des Annonces publiées (pour les Propriétaires) : description, photographies, localisation, prix.",
      "**3.2 Données générées par l'utilisation du Service** : Historique des versements de loyer et des retraits (montants, dates, statuts), Historique des baux et périodes de location suivies sur la plateforme, Demandes de contact envoyées entre Locataires et Propriétaires, Notifications reçues dans l'application.",
      "**3.3 Données techniques** : Adresse IP, type d'appareil, système d'exploitation (à des fins de sécurité et de bon fonctionnement du Service), Journaux de connexion et d'activité sur le Compte.",
      "**3.4 Ce qu'ImoFlex ne collecte pas directement** : ImoFlex ne collecte ni ne stocke aucune donnée bancaire complète (numéro de carte, code confidentiel Mobile Money). Les transactions de paiement sont exécutées directement par le prestataire de paiement tiers (agrégateur Mobile Money), qui applique ses propres mesures de sécurité et, le cas échéant, ses propres procédures de vérification d'identité (KYC)."
    ],
  },
  {
    icon: Target,
    title: '4. Finalités du traitement',
    content: [
      "Les données collectées sont utilisées pour :",
      "Créer et gérer le Compte de l'Utilisateur ;",
      "Permettre la mise en relation entre Locataires et Propriétaires ;",
      "Exécuter et suivre les versements de loyer et les retraits via le prestataire de paiement ;",
      "Envoyer des notifications relatives à l'activité du Compte (confirmation de paiement, rappel d'échéance, retard) ;",
      "Assurer la sécurité du Service et prévenir la fraude ;",
      "Améliorer le fonctionnement et les fonctionnalités du Service ;",
      "Répondre aux obligations légales et réglementaires applicables."
    ],
  },
  {
    icon: Scale,
    title: '5. Base légale du traitement',
    content: [
      "Le traitement des données personnelles repose selon les cas sur :",
      "L'exécution du contrat liant l'Utilisateur à ImoFlex (les présentes CGU/CGV) ;",
      "Le consentement de l'Utilisateur, notamment pour les communications non essentielles ;",
      "L'intérêt légitime d'ImoFlex à assurer la sécurité et le bon fonctionnement du Service ;",
      "Le respect d'obligations légales, le cas échéant."
    ],
  },
  {
    icon: Share2,
    title: '6. Partage des données avec des tiers',
    content: [
      "ImoFlex ne vend ni ne loue les données personnelles des Utilisateurs à des tiers à des fins commerciales. Les données peuvent néanmoins être partagées avec :",
      "**Le prestataire de paiement** (agrégateur Mobile Money), dans la stricte mesure nécessaire à l'exécution des versements et retraits (nom, numéro de téléphone Mobile Money, montant de la transaction) ;",
      "**L'hébergeur de l'infrastructure technique** (base de données et fonctions serveur), qui traite les données dans le cadre de l'hébergement du Service, sous réserve de ses propres engagements de sécurité et de confidentialité ;",
      "**Les autorités compétentes**, si la loi l'exige (réquisition judiciaire, obligation réglementaire) ;",
      "**L'autre partie à un Bail** (Propriétaire ↔ Locataire), dans la stricte mesure nécessaire au bon déroulement de la relation locative (nom, numéro de téléphone), une fois le Code d'accès activé."
    ],
  },
  {
    icon: Clock,
    title: '7. Durée de conservation',
    content: [
      "Les données personnelles sont conservées :",
      "Pendant toute la durée d'utilisation active du Compte ;",
      "Après suppression du Compte, pendant une durée limitée nécessaire au respect des obligations légales et comptables applicables (notamment concernant l'historique des transactions financières) ;",
      "Les données strictement nécessaires à la sécurité (journaux de connexion) sont conservées pour une durée limitée avant suppression ou anonymisation."
    ],
  },
  {
    icon: Shield,
    title: '8. Sécurité des données',
    content: [
      "ImoFlex met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les données personnelles contre l'accès non autorisé, la perte, l'altération ou la divulgation, notamment :",
      "Chiffrement des données sensibles au repos et en transit ;",
      "Contrôle d'accès strict aux données selon le rôle de l'Utilisateur (un Propriétaire ne peut consulter que les données des Locataires liés à ses propres biens, et réciproquement) ;",
      "Authentification sécurisée pour l'accès aux Comptes.",
      "Aucun système n'étant infaillible, ImoFlex ne peut garantir une sécurité absolue, mais s'engage à informer les Utilisateurs concernés en cas d'incident de sécurité significatif affectant leurs données, conformément à la réglementation applicable."
    ],
  },
  {
    icon: FileText,
    title: '9. Droits des Utilisateurs',
    content: [
      "Conformément à la réglementation béninoise applicable en matière de protection des données personnelles, chaque Utilisateur dispose des droits suivants concernant ses données :",
      "**Droit d'accès** : obtenir la confirmation que ses données sont traitées et en obtenir une copie ;",
      "**Droit de rectification** : corriger des données inexactes ou incomplètes ;",
      "**Droit à l'effacement** : demander la suppression de ses données, sous réserve des obligations légales de conservation ;",
      "**Droit d'opposition** : s'opposer à certains traitements, notamment à des fins de communication non essentielle ;",
      "**Droit à la portabilité**, dans la mesure applicable.",
      "Ces droits peuvent être exercés en contactant ImoFlex à l'adresse : **contact.imoflex@gmail.com**. ImoFlex s'engage à répondre dans un délai raisonnable.",
      "L'Utilisateur dispose également du droit d'introduire une réclamation auprès de l'Autorité de Protection des Données Personnelles (APDP) du Bénin."
    ],
  },
  {
    icon: AlertTriangle,
    title: '10. Cookies et traceurs (site web)',
    content: [
      "À ce jour, le site vitrine d'ImoFlex n'utilise aucun cookie de mesure d'audience ni outil de suivi tiers (type Google Analytics). Seuls les cookies strictement nécessaires au fonctionnement technique du site (le cas échéant) peuvent être utilisés.",
      "Si ImoFlex venait à intégrer un outil de mesure d'audience ou de tracking à l'avenir, la présente Politique serait mise à jour en conséquence, et l'Utilisateur en serait informé conformément à l'article 12."
    ],
  },
  {
    icon: UserX,
    title: '11. Mineurs',
    content: [
      "Le Service n'est pas destiné aux personnes mineures. ImoFlex ne collecte pas sciemment de données concernant des mineurs. Si ImoFlex prend connaissance qu'un Compte a été créé par une personne mineure, il se réserve le droit de suspendre ou supprimer ce Compte."
    ],
  },
  {
    icon: RefreshCw,
    title: '12. Modification de la présente Politique',
    content: [
      "ImoFlex se réserve le droit de modifier la présente Politique de Confidentialité à tout moment. Toute modification substantielle sera portée à la connaissance des Utilisateurs via une notification dans l'application ou par email, avant son entrée en vigueur."
    ],
  },
  {
    icon: Mail,
    title: '13. Contact',
    content: [
      "Pour toute question relative à la présente Politique de Confidentialité ou pour exercer l'un de vos droits : **contact.imoflex@gmail.com**"
    ],
  }
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
              Dernière mise à jour : <strong>21 juillet 2026</strong>
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
                      {s.content.length > 1 && <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />}
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
