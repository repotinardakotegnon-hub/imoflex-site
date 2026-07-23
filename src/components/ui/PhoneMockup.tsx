import { Search, MapPin, Heart, Home, MessageSquare, CreditCard, User, SlidersHorizontal, Map, ChevronLeft, Bell } from 'lucide-react';

const Frame = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative rounded-[2.5rem] bg-[#050505] p-2 sm:p-2.5 shadow-2xl ring-1 ring-white/10 overflow-hidden ${className}`}>
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#0A071A]">
      <div className="absolute left-1/2 top-1.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#050505]" />
      <div className="flex items-center justify-between px-5 pt-2.5 text-[9px] font-medium text-white/60">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <span className="h-2 w-3.5 rounded-[2px] bg-white/60" />
          <span className="h-2 w-2 rounded-full bg-white/60" />
        </div>
      </div>
      {children}
    </div>
  </div>
);

const CenterPhone = () => (
  <Frame className="w-[280px] h-[580px] sm:w-[320px] sm:h-[640px] z-30 shadow-[0_0_80px_rgba(109,40,217,0.15)] relative">
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white/80 backdrop-blur-md z-30">
      Aperçu de l'application
    </div>
    
    <div className="px-4 pt-3">
      <div className="flex items-center gap-1">
        <MapPin className="h-3 w-3 text-rose-500 fill-rose-500" />
        <p className="text-[10px] font-medium text-white/60">Cotonou, Benin</p>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <h1 className="text-[16px] sm:text-[18px] font-extrabold tracking-tight text-white">Trouvez votre logement</h1>
        <div className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-lg bg-white/5 text-white/80">
          <Map className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-xl bg-brand-900/30 px-3 py-2.5 ring-1 ring-brand-500/20">
          <Search className="h-4 w-4 text-brand-300/50" />
          <span className="text-[10px] sm:text-[11px] text-brand-300/50">Quartier, type de bien...</span>
        </div>
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-white/80 ring-1 ring-white/10">
          <SlidersHorizontal className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-3 flex gap-2 overflow-hidden pb-1">
        {['Tout', 'Studio', 'Appart', 'Chambre'].map((c, i) => (
          <span key={c} className={`shrink-0 rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-medium ${i === 0 ? 'bg-brand-500 text-white shadow-[0_0_15px_rgba(109,40,217,0.5)]' : 'bg-white/5 text-white/60 ring-1 ring-white/10'}`}>
            {c}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-2 flex items-center justify-between px-4">
      <span className="text-[9px] sm:text-[10px] font-medium text-white/50">12 458 résultats</span>
      <span className="text-[9px] sm:text-[10px] font-medium text-brand-400">Trier · Prix ⌄</span>
    </div>

    <div className="mt-2 h-[340px] px-4 space-y-4 overflow-hidden pb-20">
      <div className="overflow-hidden rounded-2xl bg-[#141029] ring-1 ring-white/5">
        <div className="relative h-32 sm:h-36 bg-ink-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-90" />
          <div className="absolute left-2 top-2 rounded-md bg-emerald-500 px-2 py-0.5 text-[8px] font-bold tracking-wide text-white">
            VÉRIFIÉ ✓
          </div>
          <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-ink-950/60 text-white backdrop-blur-md">
            <Heart className="h-3.5 w-3.5" />
          </div>
          <div className="absolute bottom-0 right-0 rounded-tl-xl bg-brand-500 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold text-white">
            125 000 FCFA /mois
          </div>
        </div>
        <div className="p-3">
          <p className="text-[11px] sm:text-[12px] font-bold text-white">Maison premium avec 5 pièces</p>
          <div className="mt-1 flex items-center gap-1 text-[8px] sm:text-[9px] text-white/50">
            <MapPin className="h-2.5 w-2.5" /> Fidrosé-Cotonou · Cotonou
          </div>
          <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-brand-900/60 px-2 py-1 text-[7px] sm:text-[8px] font-bold tracking-wide text-brand-300">
            <span>✓</span> PAIEMENT PROGRESSIF IMOFLEX
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl bg-[#141029] ring-1 ring-white/5">
        <div className="relative h-32 sm:h-36 bg-ink-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-90" />
          <div className="absolute bottom-0 right-0 rounded-tl-xl bg-brand-500 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold text-white">
            1 200 000 FCFA /mois
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 inset-x-0 flex items-center justify-between border-t border-white/5 bg-[#0A071A]/95 px-5 py-3 backdrop-blur-xl">
      {[{ icon: Home, label: 'Marché', active: true }, { icon: Heart, label: 'Favoris' }, { icon: MessageSquare, label: 'Demandes' }, { icon: CreditCard, label: 'Mon loyer' }, { icon: User, label: 'Profil' }].map((n, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <n.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${n.active ? 'text-brand-500' : 'text-white/40'}`} />
          <span className={`text-[7px] sm:text-[8px] font-medium ${n.active ? 'text-brand-500' : 'text-white/40'}`}>{n.label}</span>
        </div>
      ))}
    </div>
  </Frame>
);

const RightPhone = () => (
  <Frame className="w-[240px] h-[480px] sm:w-[260px] sm:h-[540px] opacity-90 lg:opacity-100">
    <div className="px-4 pt-3 flex items-center justify-between">
      <div>
        <p className="text-[8px] font-medium text-white/50 uppercase tracking-wider">Tableau de bord</p>
        <h1 className="text-[14px] font-bold text-white mt-0.5">Propriétaire</h1>
      </div>
      <div className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white">
        <Bell className="h-3 w-3" />
      </div>
    </div>
    <div className="px-4 mt-4">
      <div className="rounded-xl bg-gradient-to-br from-[#0F2A1D] to-[#0A1A12] p-4 ring-1 ring-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
        <p className="text-[7px] font-bold text-emerald-500 tracking-wider">TOTAL ENCAISSÉ - JUILLET 2026</p>
        <p className="text-[20px] font-extrabold text-white mt-1">2 422 000 <span className="text-[12px] font-medium text-emerald-100">FCFA</span></p>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-center bg-white/5 rounded-lg py-1.5">
            <span className="block text-[12px] font-bold text-emerald-400">5</span>
            <span className="block text-[7px] text-white/50">Soldés</span>
          </div>
          <div className="text-center bg-white/5 rounded-lg py-1.5">
            <span className="block text-[12px] font-bold text-amber-400">2</span>
            <span className="block text-[7px] text-white/50">En attente</span>
          </div>
          <div className="text-center bg-white/5 rounded-lg py-1.5">
            <span className="block text-[12px] font-bold text-rose-400">0</span>
            <span className="block text-[7px] text-white/50">Refusés</span>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 mt-5">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[11px] font-bold text-white">Demandes reçues</h2>
        <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[7px] font-bold text-amber-400">1 NOUVELLE</span>
      </div>
      <div className="rounded-xl bg-[#141029] p-3 ring-1 ring-white/5 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium text-white truncate max-w-[120px]">Villa moderne de standing...</p>
          <div className="flex items-center gap-1 mt-1 text-[8px] text-white/50">
            <MapPin className="h-2 w-2" /> Agori
          </div>
        </div>
        <button className="rounded-lg bg-brand-600 px-3 py-1.5 text-[8px] font-bold text-white">Accepter</button>
      </div>
    </div>
    <div className="px-4 mt-5">
      <h2 className="text-[11px] font-bold text-white mb-2">Mes logements</h2>
      <div className="rounded-xl bg-[#141029] p-3 ring-1 ring-white/5">
        <div className="flex justify-between items-start">
          <p className="text-[10px] font-medium text-white truncate max-w-[120px]">Studio américain moderne...</p>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[7px] font-medium text-white/60">EN COURS</span>
        </div>
        <div className="mt-2.5 h-1 w-full rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(109,40,217,0.8)]" />
        </div>
        <div className="mt-1 flex justify-between text-[7px] text-white/50">
          <span>60 500 F reçus</span>
          <span>(38%)</span>
        </div>
      </div>
    </div>
  </Frame>
);

const LeftPhone = () => (
  <Frame className="w-[240px] h-[480px] sm:w-[260px] sm:h-[540px] opacity-90 lg:opacity-100">
    <div className="px-4 pt-4 flex items-start gap-3">
      <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/5 text-white cursor-pointer">
        <ChevronLeft className="h-3.5 w-3.5" />
      </div>
      <div>
        <h1 className="text-[12px] font-bold leading-tight text-white pr-4">Studio américain moderne et lumineux</h1>
        <p className="text-[8px] text-white/50 mt-1">Cotonou, Bénin</p>
      </div>
    </div>
    <div className="px-4 mt-6">
      <div className="rounded-2xl bg-gradient-to-br from-[#1C0F38] to-[#120926] p-4 ring-1 ring-brand-500/30 shadow-[0_0_40px_rgba(109,40,217,0.15)] relative overflow-hidden">
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-500/20 blur-xl" />
        <p className="text-[7px] font-bold text-brand-300 tracking-wider">LOYER - JUILLET 2026</p>
        <p className="text-[24px] font-extrabold text-white mt-1 tracking-tight">40 500 <span className="text-[12px] font-medium text-brand-200">FCFA</span></p>
        <div className="mt-5 flex justify-between text-[7px] font-medium text-white/60 mb-1">
          <span>Payé</span>
          <span>Restant</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-black/40 overflow-hidden">
          <div className="h-full w-[40%] rounded-full bg-brand-500 shadow-[0_0_10px_rgba(109,40,217,1)]" />
        </div>
        <button className="mt-5 w-full rounded-xl bg-brand-500 py-2.5 text-[10px] font-bold text-white shadow-[0_4px_15px_rgba(109,40,217,0.4)] transition-transform hover:scale-[1.02]">
          Effectuer un versement
        </button>
      </div>
    </div>
    <div className="px-4 mt-6">
      <h2 className="text-[11px] font-bold text-white mb-3">Versements récents</h2>
      <div className="space-y-3">
        {[
          { label: 'Versement Moov Money', val: '5 000 FCFA', date: 'Hier', color: 'bg-yellow-500' },
          { label: 'Versement Moov Money', val: '5 000 FCFA', date: '12 Jui', color: 'bg-yellow-500' },
          { label: 'Versement MTN Money', val: '10 000 FCFA', date: '05 Jui', color: 'bg-yellow-500' },
        ].map((v, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`h-2 w-2 rounded-full ${v.color} shadow-[0_0_8px_currentColor]`} />
              <div>
                <p className="text-[9px] font-medium text-white">{v.label}</p>
                <p className="text-[7px] text-white/40">{v.date}</p>
              </div>
            </div>
            <span className="text-[9px] font-bold text-white">{v.val}</span>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[900px] h-[600px] sm:h-[680px] flex items-center justify-center">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[100px]" />
      
      <div className="hidden lg:block absolute left-4 xl:left-0 top-1/2 -translate-y-1/2 -rotate-[8deg] hover:z-40 hover:-rotate-0 hover:scale-105 transition-all duration-500">
        <LeftPhone />
      </div>
      
      <div className="relative z-30 hover:scale-105 transition-transform duration-500">
        <CenterPhone />
      </div>

      <div className="hidden lg:block absolute right-4 xl:right-0 top-1/2 -translate-y-1/2 rotate-[8deg] hover:z-40 hover:rotate-0 hover:scale-105 transition-all duration-500">
        <RightPhone />
      </div>
    </div>
  );
}
