import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { useReveal } from '../hooks/useReveal';
import { FileText, Scale, Home, CreditCard, Shield, BookOpen, Building, Lock, RefreshCw, Power, Gavel, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    icon: FileText,
    title: '1. Présentation',
    content: [
      "ImoFlex est une plateforme numérique (le « Service ») éditée par AKOTEGNON Repotinard Salomon Pittoresque (entrepreneur individuel, IFU 0202661022204), ayant pour objet de mettre en relation des propriétaires de logements (les « Propriétaires ») et des personnes recherchant un logement (les « Locataires ») à Cotonou et dans ses environs, et de faciliter le paiement échelonné des loyers par Mobile Money.",
      "Les présentes Conditions Générales d'Utilisation régissent l'accès et l'usage du Service par toute personne y accédant (l'« Utilisateur »), que ce soit via le site web ou l'application mobile ImoFlex.",
      "L'utilisation du Service implique l'acceptation pleine et entière des présentes CGU. Si l'Utilisateur n'accepte pas ces conditions, il doit s'abstenir d'utiliser le Service."
    ],
  },
  {
    icon: BookOpen,
    title: '2. Définitions',
    content: [
      "**Annonce** : fiche descriptive d'un logement publiée par un Propriétaire sur la Marketplace.",
      "**Bail** : relation contractuelle entre un Propriétaire et un Locataire concernant l'occupation d'un logement, dont le suivi des paiements est géré via ImoFlex.",
      "**Compte** : espace personnel créé par un Utilisateur pour accéder au Service.",
      "**Marketplace** : l'espace de recherche et de consultation des Annonces.",
      "**Code d'accès** : code unique généré par un Propriétaire et transmis à un Locataire pour activer le suivi d'un Bail au sein de l'application."
    ],
  },
  {
    icon: Home,
    title: '3. Accès au Service',
    content: [
      "**3.1 Inscription** : L'accès à certaines fonctionnalités du Service nécessite la création d'un Compte. L'Utilisateur s'engage à fournir des informations exactes, complètes et à jour lors de son inscription (nom, numéro de téléphone, adresse email).",
      "**3.2 Âge minimum** : Le Service est réservé aux personnes majeures (18 ans et plus) capables de conclure des engagements contractuels au sens du droit béninois.",
      "**3.3 Rôles** : Le Service distingue deux types principaux d'Utilisateurs : Le **Locataire**, qui recherche un logement et effectue des versements de loyer. Le **Propriétaire**, qui publie des Annonces et perçoit les versements de ses Locataires. Un même Utilisateur peut, selon les cas, exercer les deux rôles avec des comptes distincts ou selon les modalités prévues par la plateforme.",
      "**3.4 Sécurité du Compte** : L'Utilisateur est seul responsable de la confidentialité de ses identifiants de connexion et de toute activité réalisée depuis son Compte. Il s'engage à informer ImoFlex sans délai en cas d'utilisation non autorisée de son Compte."
    ]
  },
  {
    icon: Building,
    title: '4. Fonctionnement de la Marketplace',
    content: [
      "**4.1 Publication des Annonces** : Les Propriétaires peuvent publier une Annonce librement et celle-ci est visible immédiatement sur la Marketplace, sans validation préalable par ImoFlex. ImoFlex se réserve toutefois le droit de retirer ou suspendre toute Annonce a posteriori, notamment en cas de signalement, de contenu trompeur, illégal, ou non conforme aux présentes CGU.",
      "**4.2 Exactitude des informations** : Le Propriétaire est seul responsable de l'exactitude des informations et photographies qu'il publie (état du bien, prix, disponibilité, localisation). ImoFlex ne vérifie pas systématiquement la véracité de ces informations et n'est pas garant de la conformité du logement à sa description.",
      "**4.3 Mise en relation** : La prise de contact initiale entre un Locataire intéressé et un Propriétaire s'effectue via les coordonnées mises à disposition sur la plateforme (numéro de téléphone). Les modalités de visite, de négociation et d'accord sur les termes du Bail relèvent exclusivement de la relation directe entre le Propriétaire et le Locataire, en dehors du Service. ImoFlex n'est pas partie au contrat de bail et n'intervient pas dans sa négociation, sa rédaction ni son exécution en dehors du volet paiement décrit à l'article 5.",
      "**4.4 Activation du suivi de paiement** : Une fois un accord trouvé entre les parties, le Propriétaire génère un Code d'accès qu'il transmet au Locataire. Ce code permet au Locataire de rattacher son Compte au Bail correspondant et d'accéder au suivi des versements de loyer via l'application."
    ]
  },
  {
    icon: CreditCard,
    title: '5. Rôle d\'ImoFlex dans les paiements',
    content: [
      "Le fonctionnement financier du Service est détaillé dans les **Conditions Générales de Vente (CGV)**, document distinct et complémentaire aux présentes CGU. En résumé :",
      "ImoFlex agit exclusivement comme **intermédiaire technique** de paiement.",
      "Les fonds transitent via un prestataire de paiement tiers agréé (agrégateur Mobile Money) et ne sont à aucun moment détenus directement par ImoFlex.",
      "ImoFlex prélève une commission de service sur chaque versement, dont le taux est précisé dans les CGV."
    ]
  },
  {
    icon: Shield,
    title: '6. Obligations des Utilisateurs',
    content: [
      "L'Utilisateur s'engage à :",
      "Utiliser le Service conformément à sa destination et aux présentes CGU ;",
      "Ne pas publier de contenu illicite, mensonger, diffamatoire, discriminatoire ou portant atteinte aux droits de tiers ;",
      "Ne pas tenter de contourner, pirater ou perturber le fonctionnement technique du Service ;",
      "Ne pas usurper l'identité d'un tiers ;",
      "Respecter les droits de propriété intellectuelle relatifs au Service et à son contenu.",
      "Tout manquement à ces obligations peut entraîner la suspension ou la suppression du Compte concerné, sans préjudice d'éventuelles poursuites."
    ]
  },
  {
    icon: Scale,
    title: '7. Responsabilité',
    content: [
      "**7.1 Nature du Service** : ImoFlex est une plateforme de mise en relation et de facilitation de paiement. ImoFlex n'est ni propriétaire, ni locataire, ni agence immobilière, et n'intervient pas dans la relation contractuelle de bail elle-même (état des lieux, respect des obligations locatives, litiges de voisinage, etc.).",
      "**7.2 Limites de responsabilité** : ImoFlex ne saurait être tenu responsable : Des litiges entre Propriétaires et Locataires relatifs à l'exécution du contrat de bail ; De l'inexactitude des informations publiées par les Utilisateurs ; Des interruptions temporaires du Service liées à la maintenance, à des cas de force majeure, ou à des dysfonctionnements des prestataires tiers (opérateurs Mobile Money, agrégateur de paiement) ; De l'usage frauduleux d'un Compte résultant d'une négligence de l'Utilisateur dans la protection de ses identifiants.",
      "**7.3 Disponibilité** : ImoFlex s'efforce d'assurer un accès continu au Service mais ne garantit pas une disponibilité ininterrompue et pourra suspendre l'accès pour des opérations de maintenance, avec ou sans préavis selon l'urgence."
    ]
  },
  {
    icon: Lock,
    title: '8. Données personnelles',
    content: [
      "ImoFlex collecte et traite des données personnelles (nom, numéro de téléphone, email, historique de transactions) nécessaires au fonctionnement du Service, conformément à sa **Politique de Confidentialité**.",
      "L'Utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données, dans les conditions prévues par cette politique et par la réglementation béninoise applicable en matière de protection des données personnelles."
    ]
  },
  {
    icon: FileText,
    title: '9. Propriété intellectuelle',
    content: [
      "L'ensemble des éléments du Service (marque ImoFlex, logo, charte graphique, code source, contenus éditoriaux) sont la propriété exclusive d'ImoFlex ou de ses ayants droit. Toute reproduction, représentation ou exploitation non autorisée est interdite."
    ]
  },
  {
    icon: RefreshCw,
    title: '10. Modification des CGU',
    content: [
      "ImoFlex se réserve le droit de modifier les présentes CGU à tout moment. Les Utilisateurs seront informés de toute modification substantielle par notification sur l'application ou par email. La poursuite de l'utilisation du Service après notification vaut acceptation des nouvelles conditions."
    ]
  },
  {
    icon: Power,
    title: '11. Résiliation',
    content: [
      "Tout Utilisateur peut demander la suppression de son Compte à tout moment. ImoFlex se réserve le droit de suspendre ou résilier l'accès d'un Utilisateur en cas de manquement grave ou répété aux présentes CGU."
    ]
  },
  {
    icon: Gavel,
    title: '12. Droit applicable et litiges',
    content: [
      "Les présentes CGU sont soumises au droit béninois. En cas de litige relatif à leur interprétation ou leur exécution, les parties s'efforceront de trouver une solution amiable avant toute action contentieuse. À défaut d'accord amiable, les tribunaux compétents du Bénin seront seuls compétents."
    ]
  },
  {
    icon: Mail,
    title: '13. Contact',
    content: [
      "Pour toute question relative aux présentes CGU : **contact.imoflex@gmail.com**"
    ]
  }
];

export function TermsPage() {
  useReveal([]);

  return (
    <div className="pt-24">
      <Seo
        title="Conditions d'utilisation (CGU) — ImoFlex"
        description="Conditions générales d'utilisation de la plateforme ImoFlex pour les propriétaires et locataires."
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
              Dernière mise à jour : <strong>21 juillet 2026</strong>
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
