import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { useReveal } from '../hooks/useReveal';
import { Building, Gavel, Mail, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const LEGAL_INFO = [
  {
    icon: Building,
    title: 'Éditeur du site et de l\'application',
    items: [
      { label: 'Raison sociale', value: 'AKOTEGNON Repotinard Salomon Pittoresque' },
      { label: 'Forme juridique', value: 'Entrepreneur individuel' },
      { label: 'Siège social', value: 'Agori, Abomey-Calavi, Bénin' },
      { label: 'Numéro fiscal (IFU)', value: '0202661022204' },
    ],
  },
  {
    icon: Gavel,
    title: 'Direction',
    items: [
      { label: 'Directeur de la publication', value: 'Répotinard AKOTEGNON' },
      { label: 'Responsable de la rédaction', value: 'Répotinard AKOTEGNON' },
    ],
  },
  {
    icon: Mail,
    title: 'Contact',
    items: [
      { label: 'Email', value: 'contact.imoflex@gmail.com' },
      { label: 'Téléphone', value: '+229 01 90 73 45 13' },
    ],
  },
  {
    icon: Server,
    title: 'Hébergement',
    items: [
      { label: 'Hébergeur', value: '[NOM DE L\'HÉBERGEUR, ex: Amazon Web Services / Vercel]' },
      { label: 'Adresse', value: '[ADRESSE DE L\'HÉBERGEUR]' },
      { label: 'Site web', value: '[URL DE L\'HÉBERGEUR]' },
    ],
  },
];

export function LegalPage() {
  useReveal([]);

  return (
    <div className="pt-24">
      <Seo
        title="Mentions Légales — ImoFlex"
        description="Informations légales, coordonnées et identité de l'éditeur de la plateforme ImoFlex."
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
              <Gavel className="h-8 w-8" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-ink-900"
            >
              Mentions Légales
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-ink-500"
            >
              Conformément à la réglementation en vigueur, voici les informations légales
              concernant l'éditeur de la plateforme ImoFlex.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="container-px">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {LEGAL_INFO.map((block, i) => (
              <div
                key={block.title}
                className="reveal card p-7"
                data-reveal-delay={i * 60}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <block.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-ink-900">{block.title}</h2>
                </div>
                <div className="mt-5 space-y-3">
                  {block.items.map((item, j) => (
                    <div key={j} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between">
                      <span className="text-sm font-medium text-ink-500">{item.label}</span>
                      <span className="text-sm font-semibold text-ink-900 sm:text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-ink-500">
            <p>
              Les informations recueillies font l'objet d'un traitement informatique destiné à
              la gestion de la relation client. Conformément à la réglementation applicable en
              matière de protection des données, vous bénéficiez d'un droit d'accès, de
              rectification, et d'effacement de vos informations.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
