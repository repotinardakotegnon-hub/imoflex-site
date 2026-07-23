import {
  Search,
  Wallet,
  Bell,
  Building2,
  CreditCard,
  type LucideIcon,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Accueil', to: '' },
  { label: 'Fonctionnalités', section: 'fonctionnalites' },
  { label: 'Propriétaires', section: 'proprietaires' },
  { label: 'Locataires', section: 'locataires' },
  { label: 'Partenaires', to: 'partenaires' },
  { label: 'Investisseurs', to: 'investisseurs' },
  { label: 'Vision', to: 'vision' },
  { label: 'Fondateur', to: 'fondateur' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
] as const;

export const STATS = [
  { label: 'Ville de lancement', value: 'Cotonou', suffix: '', display: 'Cotonou' },
  { label: 'Paiement', value: '100%', suffix: '', display: '100%' },
  { label: 'Commission transparente', value: 6, suffix: '%', display: '6%' },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
  accent: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Search,
    title: 'Recherche de logements',
    desc: 'Chambres, studios, appartements, villas et boutiques — filtres avancés et géolocalisation.',
    points: ['Chambres & studios', 'Appartements & villas', 'Boutiques & commerces'],
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: Building2,
    title: 'Gestion immobilière',
    desc: 'Centralisez vos biens, locataires et contrats. Suivi en temps réel, historique complet.',
    points: ['Gestion simplifiée', 'Suivi des paiements', 'Historique des baux'],
    accent: 'from-sky-500 to-brand-600',
  },
  {
    icon: CreditCard,
    title: 'Paiement digital',
    desc: 'Payez votre loyer en quelques secondes. Reçus automatiques, historique transparent.',
    points: ['Paiement sécurisé', 'Reçus automatiques', 'Historique complet'],
    accent: 'from-emerald-500 to-brand-600',
  },
  {
    icon: Bell,
    title: 'Notifications intelligentes',
    desc: 'Rappels de loyer, confirmations de paiement et événements importants en temps réel.',
    points: ['Rappels de paiement', 'Confirmations', 'Événements clés'],
    accent: 'from-amber-500 to-brand-600',
  },
  {
    icon: Wallet,
    title: 'Portefeuille numérique',
    desc: 'Dépôts, retraits et historique financier unifiés. La fintech au service de l’immobilier.',
    points: ['Dépôts & retraits', 'Historique financier', 'Multi-méthodes'],
    accent: 'from-rose-500 to-brand-600',
  },
];

export const PROBLEMS = [
  {
    title: 'Recherche difficile',
    desc: 'Annonces dispersées, informations incomplètes, arnaques fréquentes.',
  },
  {
    title: 'Gestion manuelle',
    desc: 'Cahiers, tableurs, suivis approximatifs des paiements et des baux.',
  },
  {
    title: 'Paiement opaque',
    desc: 'Loyers en espèces, reçus perdus, litiges sans preuve.',
  },
  {
    title: 'Manque de suivi',
    desc: 'Aucune visibilité sur l’historique financier ni l’état des biens.',
  },
  {
    title: 'Processus complexes',
    desc: 'Visites, contrats, cautions : un parcours long et frustrant.',
  },
];

export const STEPS_TENANT = [
  { title: 'Télécharger l’application', desc: 'Disponible sur Google Play et App Store.' },
  { title: 'Créer un compte', desc: 'Inscription sécurisée en moins de 2 minutes.' },
  { title: 'Trouver un logement', desc: 'Filtres avancés, photos, géolocalisation.' },
  { title: 'Rejoindre son logement', desc: 'Validation par le propriétaire en un clic.' },
  { title: 'Payer facilement', desc: 'Loyer, charges, historique — tout au même endroit.' },
];

export const STEPS_OWNER = [
  { title: 'Créer un compte', desc: 'Profil propriétaire vérifié en quelques minutes.' },
  { title: 'Ajouter un bien', desc: 'Photos, description, loyer, conditions.' },
  { title: 'Recevoir des locataires', desc: 'Demandes, visites, signature digitale.' },
  { title: 'Suivre les paiements', desc: 'Tableau de bord financier en temps réel.' },
  { title: 'Retirer ses revenus', desc: 'Virement mobile money ou bancaire, sécurisé.' },
];

export const TIMELINE = [
  { year: '2024', title: 'Création du projet', desc: 'Vision née d’un constat : l’immobilier africain mérite une infrastructure numérique de classe mondiale.' },
  { year: '2025', title: 'MVP', desc: 'Première version de l’application mobile, recherche et paiement de loyer.' },
  { year: '2025', title: 'Lancement officiel', desc: 'Mise sur le marché, premières villes, premiers utilisateurs et propriétaires.' },
  { year: '2026', title: 'Expansion nationale', desc: 'Couverture multi-villes, partenariats agences, intégration mobile money.' },
  { year: '2027+', title: 'Expansion africaine', desc: 'Déploiement régional, fintech immobilière panafricaine.' },
];

export const TESTIMONIALS: Array<{ name: string; role: string; quote: string; avatar: string }> = [];

export const FAQ = [
  { q: 'Comment fonctionne ImoFlex ?', a: 'ImoFlex est une application mobile qui connecte locataires, propriétaires et agences. Vous recherchez, gérez et payez votre loyer depuis votre smartphone.' },
  { q: 'Comment télécharger l’application ?', a: 'L\'application sera bientôt disponible sur Google Play. Inscrivez-vous à la newsletter pour être informé du lancement.' },
  { q: 'Comment publier un bien ?', a: 'Créez un compte propriétaire, ajoutez les photos et informations de votre bien, fixez le loyer. Votre annonce est visible immédiatement par les locataires.' },
  { q: 'Comment payer son loyer ?', a: 'Depuis l’application, dans la section Paiement. Choisissez votre méthode (mobile money, carte, virement), confirmez et recevez un reçu automatique.' },
  { q: 'Les paiements sont-ils sécurisés ?', a: 'Oui. Toutes les transactions sont chiffrées et traitées par des partenaires certifiés. Chaque paiement génère un reçu et un historique vérifiable.' },
  { q: 'Comment devenir partenaire ?', a: 'Rendez-vous sur la section Partenaires, remplissez le formulaire. Notre équipe vous contacte sous 48h pour discuter de l’intégration.' },
];

export const BLOG_POSTS: Array<{ slug: string; title: string; excerpt: string; category: string; date: string; readingTime: string; image: string }> = [];

export const BLOG_CATEGORIES = ['Tous', 'Immobilier', 'Investissement', 'Location', 'Technologie', 'Fintech'];
