import { Download, Play, ShieldCheck, Star, TrendingUp } from 'lucide-react';
import { PhoneMockup } from '../ui/PhoneMockup';
import { scrollToSection } from '../../utils/navigation';
import { motion } from 'framer-motion';

const TRUST = [
  { icon: Star, label: '4.9/5 sur les stores' },
  { icon: ShieldCheck, label: 'Paiements sécurisés' },
  { icon: TrendingUp, label: '+120K utilisateurs' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
      
      {/* Background Pulse Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-radial-brand" 
      />

      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="eyebrow inline-flex animate-fade-in"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              PropTech & Fintech immobilière
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 70 }}
              className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            >
              L'avenir de l'immobilier <span className="text-brand-700">africain</span> commence ici.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-5 max-w-xl text-base text-ink-500 sm:text-lg lg:mx-0"
            >
              Trouvez un logement, gérez vos biens, payez vos loyers et simplifiez toute votre
              expérience immobilière grâce à ImoFlex.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <button onClick={() => scrollToSection('telecharger')} className="btn-primary w-full sm:w-auto">
                <Download className="h-4 w-4" />
                Télécharger l'application
              </button>
              <button onClick={() => scrollToSection('fonctionnalites')} className="btn-secondary w-full sm:w-auto">
                <Play className="h-4 w-4 fill-current" />
                Découvrir ImoFlex
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
            >
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm text-ink-600">
                  <t.icon className="h-4 w-4 text-brand-600" />
                  {t.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone Mockup Floating Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
