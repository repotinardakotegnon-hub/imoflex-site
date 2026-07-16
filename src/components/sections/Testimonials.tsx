import { Star, Quote } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { TESTIMONIALS } from '../../data/site';

export function Testimonials() {
  return (
    <Section id="temoignages" className="bg-ink-50/60">
      <div className="container-px">
        <SectionHeader
          eyebrow="Témoignages"
          title={<>Ils transforment leur immobilier avec ImoFlex</>}
          subtitle="Propriétaires, locataires, agences — découvrez ce que ImoFlex change au quotidien."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="reveal card relative overflow-hidden p-7 hover:-translate-y-1 transition-all"
              data-reveal-delay={i * 80}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-100" />
              <div className="relative flex items-center gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="relative mt-4 text-base leading-relaxed text-ink-700">"{t.quote}"</p>
              <div className="relative mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-soft"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
