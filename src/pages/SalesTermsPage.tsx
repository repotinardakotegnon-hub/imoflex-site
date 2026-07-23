import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { useReveal } from '../hooks/useReveal';
import { FileText, Shield, CreditCard, Clock, DollarSign, RefreshCw, Scale, Gavel, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    icon: FileText,
    title: '1. Objet',
    content: [
      "Les présentes Conditions Générales de Vente (CGV) définissent les modalités financières applicables aux versements de loyer effectués via la plateforme ImoFlex, ainsi que les modalités de perception de la commission de service et de retrait des fonds par les Propriétaires."
    ]
  },
  {
    icon: Shield,
    title: '2. Statut d\'ImoFlex — Intermédiaire technique de paiement',
    content: [
      "ImoFlex **n'est pas un établissement de paiement ni une institution financière** et n'est titulaire d'aucune licence bancaire. ImoFlex agit exclusivement en tant qu'**intermédiaire technique**, permettant :",
      "Au Locataire d'initier un versement de loyer via Mobile Money ;",
      "Au Propriétaire de suivre les versements reçus et d'en demander le retrait vers son propre compte Mobile Money.",
      "Les opérations de paiement elles-mêmes sont exécutées par un **prestataire de paiement agréé tiers** (agrégateur Mobile Money), qui assure la conformité réglementaire du traitement des fonds. ImoFlex **ne détient, ne conserve, ni ne gère directement les fonds des Utilisateurs à aucun moment** — les sommes transitent directement entre les comptes Mobile Money du Locataire, du prestataire de paiement, et du Propriétaire."
    ]
  },
  {
    icon: CreditCard,
    title: '3. Moyens de paiement acceptés',
    content: [
      "Les versements de loyer sont effectués exclusivement via Mobile Money, selon les opérateurs disponibles sur la plateforme au moment de la transaction (notamment MTN Mobile Money, Moov Money, Celtiis Cash, ou tout autre opérateur ajouté ultérieurement).",
      "Les retraits des Propriétaires vers leur propre compte Mobile Money peuvent être soumis à des restrictions selon l'opérateur (disponibilité, délais)."
    ]
  },
  {
    icon: Clock,
    title: '4. Versements progressifs du loyer',
    content: [
      "**4.1 Principe** : ImoFlex permet au Locataire d'effectuer le règlement de son loyer mensuel en un ou plusieurs versements progressifs, jusqu'à atteindre le montant total dû pour la période concernée, dans la limite de la date d'échéance fixée par le Propriétaire.",
      "**4.2 Absence de garantie de paiement** : ImoFlex ne garantit pas le paiement du loyer par le Locataire. En cas de non-versement ou de versement partiel à l'échéance, le statut du Bail est marqué comme « en retard » sur la plateforme, à titre purement informatif pour le Propriétaire. La gestion des conséquences d'un défaut de paiement (relance, résiliation du bail, procédure) relève exclusivement de la relation contractuelle directe entre le Propriétaire et le Locataire, en dehors du Service."
    ]
  },
  {
    icon: DollarSign,
    title: '5. Commission ImoFlex',
    content: [
      "**5.1 Montant** : ImoFlex prélève une commission de service sur chaque versement de loyer validé, dont le taux est actuellement fixé à **6% (six pour cent)** du montant du versement. Ce taux peut être révisé par ImoFlex, sous réserve d'une information préalable des Utilisateurs.",
      "**5.2 Modalités de prélèvement** : La commission est prélevée sur la part reversée au Propriétaire, et non par une majoration facturée au Locataire. Autrement dit, le Locataire règle exactement le montant qu'il choisit de verser ; la commission est déduite du montant crédité au Propriétaire. *(Exemple : pour un versement de 10 000 FCFA, le Locataire paie 10 000 FCFA. Le Propriétaire reçoit 9 400 FCFA (10 000 − 6% de commission ImoFlex), soit 600 FCFA de commission.)*",
      "**5.3 Frais du prestataire de paiement** : Des frais supplémentaires peuvent être appliqués par le prestataire de paiement Mobile Money (agrégateur), indépendamment de la commission ImoFlex. Ces frais sont à la charge du Locataire au moment du versement et sont clairement affichés avant validation de la transaction."
    ]
  },
  {
    icon: RefreshCw,
    title: '6. Retrait des fonds par le Propriétaire',
    content: [
      "**6.1 Solde disponible** : Les montants crédités au Propriétaire après déduction de la commission ImoFlex sont visibles sous forme de solde disponible dans son espace « Wallet ». Ce solde ne représente pas des fonds détenus par ImoFlex, mais reflète les montants effectivement transférés par le prestataire de paiement vers le sous-compte du Propriétaire.",
      "**6.2 Modalités de retrait** : Le Propriétaire peut demander le retrait de tout ou partie de son solde disponible vers son compte Mobile Money personnel, à tout moment, sans obligation d'attendre que le loyer de la période soit intégralement soldé.",
      "**6.3 Délai de traitement** : Les retraits sont traités par le prestataire de paiement dans un délai indicatif de **3 (trois) jours ouvrés**. Ce délai peut varier selon l'opérateur Mobile Money choisi et est susceptible d'évoluer sans préavis en fonction des conditions du prestataire.",
      "**6.4 Opérateurs disponibles pour le retrait** : Les retraits sont actuellement pris en charge pour les opérateurs confirmés par le prestataire de paiement. La disponibilité de chaque opérateur pour les retraits est indiquée sur la plateforme au moment de la demande.",
      "**6.5 Vérification d'identité** : Conformément aux exigences de lutte contre la fraude et le blanchiment de capitaux applicables au prestataire de paiement, tout retrait peut être conditionné à la vérification préalable de l'identité du Propriétaire (KYC) auprès dudit prestataire."
    ]
  },
  {
    icon: Scale,
    title: '7. Litiges relatifs aux paiements',
    content: [
      "**7.1 Versement contesté** : Tout litige relatif à un versement (montant erroné, versement non reçu, double versement) doit être signalé à ImoFlex dans les meilleurs délais via les canaux de contact disponibles sur la plateforme. ImoFlex s'engage à examiner la demande et, le cas échéant, à faire l'interface avec le prestataire de paiement pour investigation.",
      "**7.2 Remboursements** : ImoFlex ne procède à aucun remboursement direct, les fonds ne transitant pas par ses propres comptes. Toute demande de remboursement est traitée en lien avec le prestataire de paiement et, selon le cas, avec le Propriétaire concerné."
    ]
  },
  {
    icon: FileText,
    title: '8. Facturation et preuves de transaction',
    content: [
      "Chaque versement de loyer donne lieu à un enregistrement horodaté dans l'historique de paiement de l'Utilisateur, consultable depuis l'application. Cet historique fait office de preuve de transaction entre les parties, sans préjudice des relevés officiels émis par le prestataire de paiement Mobile Money."
    ]
  },
  {
    icon: RefreshCw,
    title: '9. Évolution des présentes CGV',
    content: [
      "ImoFlex se réserve le droit de modifier les présentes CGV, notamment le taux de commission ou les modalités de retrait, sous réserve d'en informer les Utilisateurs par notification dans l'application avant l'entrée en vigueur des modifications."
    ]
  },
  {
    icon: Gavel,
    title: '10. Droit applicable et litiges',
    content: [
      "Les présentes CGV sont soumises au droit béninois et, le cas échéant, aux réglementations de l'Union Économique et Monétaire Ouest-Africaine (UEMOA) applicables aux services de paiement. Tout litige sera soumis, à défaut de résolution amiable, aux tribunaux compétents du Bénin."
    ]
  },
  {
    icon: Mail,
    title: '11. Contact',
    content: [
      "Pour toute question relative aux présentes CGV, notamment concernant un paiement ou un retrait : **contact.imoflex@gmail.com**"
    ]
  }
];

export function SalesTermsPage() {
  useReveal([]);

  return (
    <div className="pt-24">
      <Seo
        title="Conditions de Vente (CGV) — ImoFlex"
        description="Conditions Générales de Vente et de Service Financier de la plateforme ImoFlex."
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
              <DollarSign className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-ink-900"
            >
              Conditions de Vente (CGV)
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
