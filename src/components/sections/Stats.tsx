import { Section } from '../ui/Section';
import { STATS } from '../../data/site';

function StatItem({ stat }: { stat: (typeof STATS)[number] }) {
  return (
    <div className="reveal text-center">
      <p className="text-4xl sm:text-5xl font-extrabold text-ink-900 tabular-nums">
        {stat.display}
      </p>
      <p className="mt-2 text-sm font-medium text-ink-500">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <Section id="chiffres" className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-radial-brand opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !bg-white/10 !text-white !ring-white/20">Chiffres clés</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            Une plateforme pensée pour durer
          </h2>
          <p className="mt-3 text-white/70">
            Phase de lancement — une approche pragmatique au service de l'immobilier.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </Section>
  );
}
