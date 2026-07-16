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
  { label: 'Utilisateurs actifs', value: 120000, suffix: '+', display: '120K+' },
  { label: 'Logements listés', value: 35000, suffix: '+', display: '35K+' },
  { label: 'Propriétaires', value: 8200, suffix: '+', display: '8.2K+' },
  { label: 'Villes couvertes', value: 24, suffix: '', display: '24' },
  { label: 'Transactions / mois', value: 180000, suffix: '+', display: '180K+' },
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

export const TESTIMONIALS = [
  {
    name: 'Aïcha Diallo',
    role: 'Propriétaire, Dakar',
    quote: 'ImoFlex a transformé la gestion de mes 12 appartements. Je vois chaque paiement en temps réel et je ne gère plus les retards en espèces.',
    avatar: 'https://images.pexels.com/photos/5905867/pexels-photo-5905867.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
  {
    name: 'Kwame Mensah',
    role: 'Locataire, Accra',
    quote: 'J’ai trouvé mon appartement en 3 jours. Le paiement du loyer via mobile money prend 30 secondes. Plus besoin de déplacements.',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
  {
    name: 'Fatou Ndiaye',
    role: 'Agence immobilière, Abidjan',
    quote: 'Nos clients propriétaires adorent le tableau de bord. ImoFlex nous a apporté de la crédibilité et un vrai outil professionnel.',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
  {
    name: 'Moussa Traoré',
    role: 'Investisseur, Bamako',
    quote: 'Le potentiel du marché africain est énorme. ImoFlex adresse un vrai problème avec une exécution de niveau international.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=160',
  },
];

export const FAQ = [
  { q: 'Comment fonctionne ImoFlex ?', a: 'ImoFlex est une application mobile qui connecte locataires, propriétaires et agences. Vous recherchez, gérez et payez votre loyer depuis votre smartphone.' },
  { q: 'Comment télécharger l’application ?', a: 'L’application est disponible sur Google Play pour Android et l’App Store pour iOS. Scannez le QR code depuis le site pour un accès direct.' },
  { q: 'Comment publier un bien ?', a: 'Créez un compte propriétaire, ajoutez les photos et informations de votre bien, fixez le loyer. Votre annonce est visible immédiatement par les locataires.' },
  { q: 'Comment payer son loyer ?', a: 'Depuis l’application, dans la section Paiement. Choisissez votre méthode (mobile money, carte, virement), confirmez et recevez un reçu automatique.' },
  { q: 'Les paiements sont-ils sécurisés ?', a: 'Oui. Toutes les transactions sont chiffrées et traitées par des partenaires certifiés. Chaque paiement génère un reçu et un historique vérifiable.' },
  { q: 'Comment devenir partenaire ?', a: 'Rendez-vous sur la section Partenaires, remplissez le formulaire. Notre équipe vous contacte sous 48h pour discuter de l’intégration.' },
];

export const BLOG_POSTS = [
  {
    slug: 'immobilier-africain-2030',
    title: 'L’immobilier africain à l’horizon 2030 : les 5 tendances qui transforment le marché',
    excerpt: 'Urbanisation, digitalisation, fintech — les forces qui redessinent le secteur immobilier sur le continent.',
    category: 'Immobilier',
    date: '12 juin 2026',
    readingTime: '6 min',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'investir-immobilier-afrique',
    title: 'Investir dans l’immobilier africain : guide pratique pour 2026',
    excerpt: 'Rendements, fiscalité, financement, zones à fort potentiel — tout ce qu’il faut savoir avant d’investir.',
    category: 'Investissement',
    date: '28 mai 2026',
    readingTime: '8 min',
    image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'location-sans-friction',
    title: 'La location sans friction : comment la technologie simplifie le parcours locatif',
    excerpt: 'De la recherche à la signature, la digitalisation réduit les délais et les coûts pour tous.',
    category: 'Location',
    date: '14 mai 2026',
    readingTime: '5 min',
    image: 'https://images.pexels.com/photos/7587955/pexels-photo-7587955.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'fintech-immobilier',
    title: 'Fintech + immobilier : le mariage qui change tout en Afrique',
    excerpt: 'Mobile money, paiement de loyer digital, portefeuilles intégrés — la fintech débloque l’immobilier.',
    category: 'Fintech',
    date: '2 mai 2026',
    readingTime: '7 min',
    image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'proprietes-digitales',
    title: 'PropTech : les technologies qui redéfinissent la gestion immobilière',
    excerpt: 'IA, big data, automatisation — les outils qui rendent la gestion plus efficace et transparente.',
    category: 'Technologie',
    date: '20 avril 2026',
    readingTime: '6 min',
    image: 'https://images.pexels.com/photos/7988077/pexels-photo-7988077.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'loyers-mobile-money',
    title: 'Payer son loyer en mobile money : le nouveau standard africain',
    excerpt: 'Sécurité, traçabilité, rapidité — pourquoi le mobile money devient la norme pour les loyers.',
    category: 'Fintech',
    date: '5 avril 2026',
    readingTime: '4 min',
    image: 'https://images.pexels.com/photos/4968404/pexels-photo-4968404.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const BLOG_CATEGORIES = ['Tous', 'Immobilier', 'Investissement', 'Location', 'Technologie', 'Fintech'];
