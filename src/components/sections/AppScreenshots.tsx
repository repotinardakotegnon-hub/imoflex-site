import { useState } from 'react';
import { Section, SectionHeader } from '../ui/Section';
import {
  Home, Heart, MessageSquare, CreditCard, User, BarChart2,
  Tv2, Bell, Wallet, Lock, Clock, TrendingUp,
  CheckCircle2, LayoutDashboard, Megaphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Screen 1: Mon Loyer ─────────────────────────────────────── */
function MonLoyerScreen() {
  return (
    <div className="flex h-full flex-col bg-[#0A071A] text-white overflow-y-auto">
      {/* Header */}
      <div className="px-3.5 pt-3 pb-0">
        <p className="text-xs text-white/50">Bonjour ☀️</p>
        <div className="mt-0.5 flex items-center justify-between">
          <h2 className="text-lg font-extrabold tracking-tight">Aïcha Bouraïma</h2>
          <div className="relative grid h-8 w-8 place-items-center rounded-xl bg-white/5">
            <Bell className="h-4 w-4 text-white/70" />
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>

      {/* Loyer Card */}
      <div className="mx-3 mt-3 rounded-2xl bg-gradient-to-br from-[#1B1040] to-[#120d30] p-3.5 ring-1 ring-brand-500/20">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300">
            Appartement F4 — Fidjrossé
          </p>
          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400">✓ À JOUR</span>
        </div>
        <p className="mt-1 text-[10px] text-white/40">Loyer mensuel · Cotonou, Bénin</p>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-3xl font-black">180 000</span>
          <span className="mb-0.5 text-sm font-semibold text-white/60">FCFA</span>
        </div>

        {/* Progress bar — 3/4 paid */}
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400" />
        </div>
        <div className="mt-1.5 flex items-center justify-between text-[10px]">
          <span className="font-semibold text-emerald-400">135 000 F payés ✓</span>
          <span className="text-white/40">45 000 F restant</span>
        </div>

        {/* Next instalment */}
        <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-[10px] text-white/70">Prochain versement</span>
          </div>
          <span className="text-[10px] font-bold text-white">15 août 2026</span>
        </div>

        {/* CTA Button */}
        <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-brand-500 to-purple-500 py-3 text-sm font-bold text-white shadow-lg shadow-brand-900/50">
          💳 Effectuer le 4ème versement
        </button>
      </div>

      {/* History - recent payments */}
      <div className="mx-3 mt-3">
        <p className="text-[11px] font-bold text-white/70">Historique des versements</p>
        <div className="mt-1.5 space-y-1.5">
          {[
            { label: 'Versement 3/4', amount: '45 000', date: '14 juil.', ok: true },
            { label: 'Versement 2/4', amount: '45 000', date: '14 juin', ok: true },
            { label: 'Versement 1/4', amount: '45 000', date: '14 mai', ok: true },
          ].map((h) => (
            <div key={h.label} className="flex items-center justify-between rounded-xl bg-[#141029] px-3 py-2 ring-1 ring-white/5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold text-white">{h.label}</p>
                  <p className="text-[9px] text-white/40">{h.date}</p>
                </div>
              </div>
              <span className="text-[11px] font-black text-emerald-400">+{h.amount} F</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="mt-auto flex items-center justify-between border-t border-white/5 bg-[#0A071A]/90 px-4 pb-2 pt-2.5">
        {[
          { icon: Home, label: 'Marché' },
          { icon: Heart, label: 'Favoris' },
          { icon: MessageSquare, label: 'Demandes' },
          { icon: CreditCard, label: 'Mon loyer', active: true },
          { icon: User, label: 'Profil' },
        ].map((n, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <n.icon className={`h-5 w-5 ${n.active ? 'text-brand-500' : 'text-white/30'}`} />
            <span className={`text-[8px] font-medium ${n.active ? 'text-brand-500' : 'text-white/30'}`}>{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Screen 2: Dashboard Propriétaire ───────────────────────── */
function DashboardScreen() {
  const properties = [
    { title: 'Appartement F4 — Fidjrossé', loc: 'Fidjrossé, non loin de la plage', total: 550000, received: 412500, pct: 75, tenants: 4, status: 'soldé' },
    { title: 'Riad charme — Haie-Vive', loc: 'Haie-Vive, Cotonou', total: 850000, received: 637500, pct: 75, tenants: 3, status: 'cours' },
    { title: 'Studio américain — Fidjrossé', loc: 'Fidjrossé, quartier calme', total: 320000, received: 320000, pct: 100, tenants: 1, status: 'soldé' },
  ];
  return (
    <div className="flex h-full flex-col bg-[#0A071A] text-white overflow-y-auto">
      {/* Header */}
      <div className="px-3.5 pt-3 pb-0">
        <p className="text-[10px] text-white/40">Tableau de bord — Juillet 2026</p>
        <div className="mt-0.5 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">Mardine Afouda</h2>
          <div className="relative grid h-8 w-8 place-items-center rounded-xl bg-white/5">
            <Bell className="h-4 w-4 text-white/70" />
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="mx-3 mt-3 rounded-2xl bg-gradient-to-br from-[#0D3320] to-[#0a2918] p-3.5 ring-1 ring-emerald-600/30">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">
              Total encaissé · Juillet 2026
            </p>
            <div className="mt-1.5 flex items-end gap-1">
              <span className="text-2xl font-black">1 370 000</span>
              <span className="mb-0.5 text-xs font-semibold text-white/60">FCFA</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400">↑ +18%</span>
              <span className="text-[9px] text-white/40">vs juin 2026</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-500/10 p-2">
            <TrendingUp className="h-6 w-6 text-emerald-400" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-black/20 p-3">
          {[
            { n: 2, label: 'Soldés', color: 'text-emerald-400' },
            { n: 1, label: 'En cours', color: 'text-amber-400' },
            { n: 0, label: 'Retard', color: 'text-rose-400' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className={`text-xl font-black ${s.color}`}>{s.n}</p>
              <p className="text-[9px] text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Properties List */}
      <div className="mx-3 mt-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold">Mes logements</p>
          <span className="text-[9px] text-brand-400">3 biens actifs</span>
        </div>
        <div className="mt-2 space-y-2">
          {properties.map((p) => (
            <div key={p.title} className="rounded-xl bg-[#141029] p-2.5 ring-1 ring-white/5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] font-bold leading-tight text-white">{p.title}</p>
                <span className={`shrink-0 rounded-md px-1.5 py-0.5 text-[8px] font-bold ${
                  p.status === 'soldé'
                    ? 'bg-emerald-900/50 text-emerald-400'
                    : 'bg-amber-900/50 text-amber-400'
                }`}>
                  {p.status === 'soldé' ? '✓ SOLDÉ' : 'EN COURS'}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-[9px] text-white/40">
                <span>📍</span> {p.loc} · {p.tenants} locataires
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${
                    p.pct === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-brand-500 to-amber-400'
                  }`}
                  style={{ width: `${p.pct}%` }}
                />
              </div>
              <div className="mt-1 flex justify-between text-[9px]">
                <span className="font-semibold text-emerald-400">{p.received.toLocaleString()} F reçus</span>
                <span className="text-white/30">/ {p.total.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="mt-auto flex items-center justify-between border-t border-white/5 bg-[#0A071A]/90 px-4 pb-2 pt-2">
        {[
          { icon: LayoutDashboard, label: 'Dashboard', active: true },
          { icon: Megaphone, label: 'Annonces' },
          { icon: MessageSquare, label: 'Demandes' },
          { icon: Tv2, label: 'Wallet' },
          { icon: User, label: 'Profil' },
        ].map((n, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <n.icon className={`h-5 w-5 ${n.active ? 'text-brand-500' : 'text-white/30'}`} />
            <span className={`text-[8px] font-medium ${n.active ? 'text-brand-500' : 'text-white/30'}`}>{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Screen 3: Mon Wallet ────────────────────────────────────── */
function WalletScreen() {
  const withdrawals = [
    { label: 'Orange Money', amount: '250 000', date: '12 juil. 2026', avatar: '🟠' },
    { label: 'MTN Mobile Money', amount: '500 000', date: '30 juin 2026', avatar: '🟡' },
    { label: 'Orange Money', amount: '200 000', date: '15 juin 2026', avatar: '🟠' },
  ];
  return (
    <div className="flex h-full flex-col bg-[#0A071A] text-white overflow-y-auto">
      {/* Header */}
      <div className="px-3.5 pt-3 pb-0">
        <p className="text-[10px] text-white/40">Propriétaire · Mardine Afouda</p>
        <h2 className="mt-0.5 text-lg font-extrabold">Mon Wallet</h2>
      </div>

      {/* Balance Card */}
      <div className="mx-3 mt-3 rounded-2xl bg-gradient-to-br from-[#2A0D5C] via-[#1B1040] to-[#0d0a1f] p-3.5 ring-1 ring-brand-500/20">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Solde disponible</p>
            <div className="mt-1.5 flex items-end gap-1">
              <span className="text-2xl font-black">420 000</span>
              <span className="mb-0.5 text-xs font-semibold text-white/60">FCFA</span>
            </div>
            <p className="mt-1 text-[9px] text-emerald-400">↑ Tous logements confondus</p>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500/20">
            <Wallet className="h-6 w-6 text-brand-300" />
          </div>
        </div>

        {/* Mini stats */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/5 p-2.5">
            <p className="text-[9px] text-white/40">Total encaissé</p>
            <p className="mt-1 text-sm font-black text-white">1 370 000 F</p>
          </div>
          <div className="rounded-xl bg-white/5 p-2.5">
            <p className="text-[9px] text-white/40">Déjà retiré</p>
            <p className="mt-1 text-sm font-black text-white">950 000 F</p>
          </div>
        </div>

        <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-brand-500 to-purple-500 py-2.5 text-sm font-bold text-white shadow-lg">
          📲 Retirer vers Mobile Money
        </button>
        <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[9px] text-white/40">
          <Lock className="h-3 w-3" />
          Sécurisé par Fedapay · Retrait en moins de 5 min
        </div>
      </div>

      {/* Recent Withdrawals */}
      <div className="mx-3 mt-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold">Derniers retraits</p>
          <span className="text-[9px] text-brand-400">3 opérations</span>
        </div>
        <div className="mt-2 space-y-2">
          {withdrawals.map((w, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl bg-[#141029] px-3 py-2 ring-1 ring-white/5">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{w.avatar}</span>
                <div>
                  <p className="text-[11px] font-semibold text-white">{w.label}</p>
                  <p className="text-[9px] text-white/40">{w.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black text-white">{w.amount} F</p>
                <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-400">✓ Reçu</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="mt-auto flex items-center justify-between border-t border-white/5 bg-[#0A071A]/90 px-5 pb-2 pt-3">
        {[
          { icon: LayoutDashboard, label: 'Dashboard' },
          { icon: Megaphone, label: 'Annonces' },
          { icon: MessageSquare, label: 'Demandes' },
          { icon: Tv2, label: 'Wallet', active: true },
          { icon: User, label: 'Profil' },
        ].map((n, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <n.icon className={`h-5 w-5 ${n.active ? 'text-brand-500' : 'text-white/30'}`} />
            <span className={`text-[8px] font-medium ${n.active ? 'text-brand-500' : 'text-white/30'}`}>{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Section ────────────────────────────────────────────── */
const SCREENS = [
  {
    id: 'loyer',
    label: 'Mon Loyer',
    icon: CreditCard,
    tag: 'Pour les locataires',
    tagColor: 'bg-brand-100 text-brand-700',
    title: 'Payez votre loyer, facilement.',
    desc: 'Suivez vos paiements, gérez vos échéances et effectuez vos versements en quelques secondes via Mobile Money ou paiement progressif.',
    component: MonLoyerScreen,
    highlights: [
      'Paiement progressif en plusieurs fois',
      'Alerte d\'échéance automatique',
      'Reçu de paiement instantané',
    ],
  },
  {
    id: 'dashboard',
    label: 'Dashboard Propriétaire',
    icon: BarChart2,
    tag: 'Pour les propriétaires',
    tagColor: 'bg-emerald-100 text-emerald-700',
    title: 'Gérez tous vos biens en un coup d\'œil.',
    desc: 'Visualisez en temps réel les revenus encaissés, les loyers en retard et l\'état de chaque logement depuis un tableau de bord unifié.',
    component: DashboardScreen,
    highlights: [
      'Tableau de bord temps réel',
      'Gestion multi-logements',
      'Suivi des paiements en cours',
    ],
  },
  {
    id: 'wallet',
    label: 'Mon Wallet',
    icon: Wallet,
    tag: 'Fintech & Paiements',
    tagColor: 'bg-purple-100 text-purple-700',
    title: 'Votre argent, disponible quand vous voulez.',
    desc: 'Votre portefeuille ImoFlex centralise tous vos revenus. Retirez vers Orange Money, MTN ou votre banque, à tout moment.',
    component: WalletScreen,
    highlights: [
      'Retrait vers Mobile Money 24h/24',
      'Sécurisé par Fedapay',
      'Cumul automatique de tous les logements',
    ],
  },
];

export function AppScreenshots() {
  const [active, setActive] = useState(0);
  const screen = SCREENS[active];
  const Screen = screen.component;

  return (
    <Section id="app-preview" className="relative overflow-hidden bg-ink-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(109,40,217,0.3),transparent)]" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container-px relative">
        <SectionHeader
          eyebrow="L'application"
          title={<>Découvrez ImoFlex de l'intérieur</>}
          subtitle="Explorez les vrais écrans de l'application — exactement ce que voient vos locataires et propriétaires."
          dark
        />

        {/* Tab switcher */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {SCREENS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === i
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/50'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <s.icon className="h-4 w-4" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${screen.tagColor}`}>
                {screen.tag}
              </span>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                {screen.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                {screen.desc}
              </p>
              <ul className="mt-6 space-y-3">
                {screen.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/20 text-brand-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Navigation dots */}
              <div className="mt-10 flex items-center gap-2">
                {SCREENS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 transition-all rounded-full ${
                      active === i ? 'w-8 bg-brand-500' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: phone */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 rounded-[3rem] bg-brand-600/20 blur-3xl" />

              {/* Phone frame */}
              <div className="relative mx-auto w-[260px] sm:w-[300px]">
                <div className="relative rounded-[2.6rem] bg-ink-950 p-2.5 shadow-2xl ring-1 ring-white/10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.35 }}
                      className="relative overflow-hidden rounded-[2.1rem]"
                      style={{ height: '600px' }}
                    >
                      {/* Notch */}
                      <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-ink-950" />
                      {/* Status bar spacing */}
                      <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-white/50 bg-[#0A071A]">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <span className="h-2.5 w-4 rounded-sm bg-white/40" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                        </div>
                      </div>
                      <Screen />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ─── Payment Partners ─── */}
        <div className="mt-16 border-t border-white/5 pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/30">
            Paiements acceptés &amp; partenaires de confiance
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {[
              {
                name: 'Wave',
                bg: 'bg-[#1a9ef5]',
                text: 'text-white',
                symbol: '〰',
              },
              {
                name: 'Orange Money',
                bg: 'bg-[#FF6600]',
                text: 'text-white',
                symbol: '🎊',
              },
              {
                name: 'MTN MoMo',
                bg: 'bg-[#FFCC00]',
                text: 'text-black',
                symbol: '📶',
              },
              {
                name: 'Moov Money',
                bg: 'bg-[#00AAFF]',
                text: 'text-white',
                symbol: '📡',
              },
              {
                name: 'Visa',
                bg: 'bg-[#1A1F71]',
                text: 'text-white',
                symbol: 'VISA',
              },
              {
                name: 'Mastercard',
                bg: 'bg-gradient-to-r from-[#EB001B] to-[#F79E1B]',
                text: 'text-white',
                symbol: '●○',
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`flex flex-col items-center gap-2`}
              >
                <div
                  className={`grid h-14 w-20 place-items-center rounded-2xl ${p.bg} shadow-lg ring-1 ring-white/10`}
                >
                  <span className={`text-lg font-black tracking-tighter ${p.text}`}>{p.symbol}</span>
                </div>
                <span className="text-[10px] font-medium text-white/40">{p.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] text-white/30">
            Transactions chiffrées · Sécurisé par Fedapay · Conforme PCI-DSS
          </p>
        </div>
      </div>
    </Section>
  );
}
