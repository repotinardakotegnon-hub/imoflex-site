import { Search, MapPin, Heart, Home, MessageSquare, CreditCard, User, SlidersHorizontal, Map } from 'lucide-react';

/**
 * A stylized smartphone mockup showing the actual ImoFlex app home screen (Dark Mode).
 * Pure CSS/SVG — no external assets.
 */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Glow */}
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-b from-brand-600/30 to-brand-900/40 blur-3xl" />

      {/* Frame */}
      <div className="relative rounded-[2.6rem] bg-ink-950 p-2.5 shadow-glow-lg ring-1 ring-white/10">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white/60 backdrop-blur-md">
          Aperçu de l'application
        </div>
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#0A071A]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-ink-950" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3.5 text-[10px] font-medium text-white/60">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-4 rounded-sm bg-white/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-rose-500 fill-rose-500" />
              <p className="text-[11px] font-medium text-white/60">Cotonou, Bénin</p>
            </div>
            
            <div className="mt-1 flex items-center justify-between">
              <h1 className="text-[17px] font-extrabold tracking-tight text-white">Trouvez votre logement</h1>
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 text-white/80">
                <Map className="h-4 w-4" />
              </div>
            </div>

            {/* Search */}
            <div className="mt-3 flex gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
                <Search className="h-4 w-4 text-white/40" />
                <span className="text-[11px] text-white/40">Quartier, type de bien...</span>
              </div>
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-white/80 ring-1 ring-white/10">
                <SlidersHorizontal className="h-4 w-4" />
              </div>
            </div>

            {/* Category pills */}
            <div className="mt-3 flex gap-2 overflow-hidden pb-1">
              {['Tout', 'Studio', 'Appart', 'Chambre'].map((c, i) => (
                <span
                  key={c}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium ${
                    i === 0 
                      ? 'bg-brand-500 text-white' 
                      : 'bg-white/5 text-white/60 ring-1 ring-white/10'
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Results Header */}
          <div className="mt-3 flex items-center justify-between px-4">
            <span className="text-[10px] font-medium text-white/50">648 résultats</span>
            <span className="text-[10px] font-medium text-brand-300">Trier · Récent ⌄</span>
          </div>

          {/* Scrollable Cards Area */}
          <div className="mt-2 h-[340px] px-4 space-y-4 overflow-hidden pb-20">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-2xl bg-[#141029] ring-1 ring-white/5">
              <div className="relative h-32 bg-ink-800">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-80" />
                <div className="absolute left-2 top-2 rounded-md bg-brand-500 px-2 py-0.5 text-[8px] font-bold tracking-wide text-white">
                  NOUVEAU
                </div>
                <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-ink-950/60 text-white backdrop-blur-md">
                  <Heart className="h-3.5 w-3.5" />
                </div>
                <div className="absolute bottom-0 right-0 rounded-tl-xl bg-brand-500 px-3 py-1.5 text-[10px] font-bold text-white">
                  125 000 FCFA F/mois
                </div>
              </div>
              <div className="p-3">
                <p className="text-[12px] font-bold text-white">Maison premium avec 5 pièces</p>
                <div className="mt-1 flex items-center gap-1 text-[9px] text-white/50">
                  <MapPin className="h-2.5 w-2.5" /> Fidrosé-Cotonou · Cotonou
                </div>
                <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-brand-900/60 px-2 py-1 text-[8px] font-bold tracking-wide text-brand-300">
                  <span>✓</span> PAIEMENT PROGRESSIF IMOFLEX
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-2xl bg-[#141029] ring-1 ring-white/5">
              <div className="relative h-32 bg-ink-800">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-80" />
                <div className="absolute left-2 top-2 rounded-md bg-brand-500 px-2 py-0.5 text-[8px] font-bold tracking-wide text-white">
                  NOUVEAU
                </div>
                <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-ink-950/60 text-white backdrop-blur-md">
                  <Heart className="h-3.5 w-3.5" />
                </div>
                <div className="absolute bottom-0 right-0 rounded-tl-xl bg-brand-500 px-3 py-1.5 text-[10px] font-bold text-white">
                  1 200 000 FCFA F/mois
                </div>
              </div>
              <div className="p-3">
                <p className="text-[12px] font-bold text-white">Appartement meublé VIP</p>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 inset-x-0 flex items-center justify-between border-t border-white/5 bg-[#0A071A]/95 px-5 py-3 backdrop-blur-xl">
            {[
              { icon: Home, label: 'Marché', active: true },
              { icon: Heart, label: 'Favoris' },
              { icon: MessageSquare, label: 'Demandes' },
              { icon: CreditCard, label: 'Mon loyer' },
              { icon: User, label: 'Profil' },
            ].map((n, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <n.icon className={`h-5 w-5 ${n.active ? 'text-brand-500' : 'text-white/40'}`} />
                <span className={`text-[8px] font-medium ${n.active ? 'text-brand-500' : 'text-white/40'}`}>
                  {n.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Dashboard: Locataire (Paiement Progressif) */}
      <div className="absolute -left-16 sm:-left-32 top-16 -z-10 w-48 sm:w-56 animate-float-slow rounded-2xl bg-[#141029] p-4 shadow-2xl ring-1 ring-white/10 opacity-90 scale-90 sm:scale-100 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-500/20 text-brand-400">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-white/50">Tableau de bord</p>
            <p className="text-xs font-bold text-white">Locataire</p>
          </div>
        </div>
        
        <div className="mt-4 rounded-xl bg-ink-900/50 p-3 ring-1 ring-white/5">
          <p className="text-[11px] font-semibold text-white">Paiement progressif</p>
          <div className="mt-2 flex items-center justify-between text-[10px]">
            <span className="text-white/60">Échéance 2/4</span>
            <span className="font-bold text-brand-400">60 000 FCFA</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 rounded-full bg-brand-500" />
          </div>
          <p className="mt-2 text-[9px] text-white/40">Prochain prélèvement le 05 Août</p>
        </div>
      </div>

      {/* Floating Dashboard: Propriétaire (Revenus) */}
      <div className="absolute -right-12 sm:-right-28 bottom-20 -z-10 w-44 sm:w-52 animate-float rounded-2xl bg-[#141029] p-4 shadow-2xl ring-1 ring-white/10 opacity-90 scale-90 sm:scale-100 hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
            <Home className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-white/50">Tableau de bord</p>
            <p className="text-xs font-bold text-white">Propriétaire</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-[10px] font-medium text-white/50">Revenus générés</p>
          <p className="mt-1 text-xl font-bold tracking-tight text-white">2 480 000</p>
          
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              <span>↑</span> 12.5%
            </span>
            <span className="text-[9px] text-white/40">vs mois précédent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
