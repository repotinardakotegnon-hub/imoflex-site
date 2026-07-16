import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { FAQ as FAQ_ITEMS } from '../../data/site';
import { useNavigate } from 'react-router-dom';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <Section id="faq">
      <div className="container-px">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions fréquentes</>}
          subtitle="Tout ce que vous devez savoir sur ImoFlex. Une autre question ? Écrivez-nous."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="reveal card overflow-hidden"
                data-reveal-delay={i * 50}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-ink-900 sm:text-base">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? 'bg-brand-700 text-white' : 'bg-brand-50 text-brand-700'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-ink-500">Vous ne trouvez pas votre réponse ?</p>
          <button onClick={() => navigate('/contact')} className="btn-secondary mt-3">
            Contacter l'équipe
          </button>
        </div>
      </div>
    </Section>
  );
}
