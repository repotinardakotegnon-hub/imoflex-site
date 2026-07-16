import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { supabase } from '../lib/supabase';
import { useReveal } from '../hooks/useReveal';

const SUBJECTS = [
  'Question générale',
  'Support technique',
  'Partenariat',
  'Investissement',
  'Presse & médias',
];

const INFOS = [
  { icon: Mail, label: 'Email', value: 'contact@imoflex.africa', href: 'mailto:contact@imoflex.africa' },
  { icon: Phone, label: 'Téléphone', value: '+221 33 800 00 00', href: 'tel:+221338000000' },
  { icon: MapPin, label: 'Adresse', value: 'Dakar, Sénégal · Abidjan, Côte d’Ivoire' },
  { icon: Clock, label: 'Horaires', value: 'Lun – Sam · 9h – 19h' },
];

export function ContactPage() {
  useReveal([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: SUBJECTS[0],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('contact_messages').insert(form);
    setStatus(error ? 'err' : 'ok');
    if (!error) {
      setForm({ name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' });
    }
  };

  return (
    <div className="pt-24">
      <Seo 
        title="Contact — ImoFlex"
        description="Une question ? Un partenariat ? Contactez l'équipe ImoFlex, nous vous répondrons dans les plus brefs délais."
      />
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 to-white" />
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow reveal">Contact</span>
            <h1 className="reveal mt-5 text-4xl sm:text-5xl font-extrabold leading-tight text-ink-900 text-balance" data-reveal-delay="80">
              Parlons de votre projet immobilier
            </h1>
            <p className="reveal mt-4 text-lg text-ink-500" data-reveal-delay="160">
              Une question, un partenariat, un investissement ? Notre équipe vous répond sous 48h.
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-4">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
            {/* Info column */}
            <div className="reveal space-y-4" data-reveal-delay="60">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-ink-900">Coordonnées</h3>
                <div className="mt-5 space-y-4">
                  {INFOS.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-ink-400">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a href={info.href} className="text-sm font-semibold text-ink-900 hover:text-brand-700">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-ink-900">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/221338000000"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/20">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Discuter sur WhatsApp</p>
                    <p className="text-xs text-white/80">Réponse rapide pendant les heures ouvrées</p>
                  </div>
                </div>
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="card overflow-hidden p-0">
                <div className="aspect-video w-full bg-ink-100">
                  <iframe
                    title="ImoFlex Dakar"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-17.46%2C14.65%2C-17.42%2C14.72&layer=mapnik&marker=14.6937%2C-17.4437"
                  />
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="reveal" data-reveal-delay="120">
              <form onSubmit={submit} className="card p-6 sm:p-8">
                <h3 className="text-xl font-bold text-ink-900">Envoyez-nous un message</h3>
                <p className="mt-1 text-sm text-ink-500">
                  Tous les champs marqués d'un * sont obligatoires.
                </p>

                <div className="mt-6 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nom complet *">
                    <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input"
                        placeholder="Votre nom"
                      />
                    </Field>
                    <Field label="Email *">
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input"
                        placeholder="email@exemple.com"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Téléphone">
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="form-input"
                        placeholder="+221 ..."
                      />
                    </Field>
                    <Field label="Sujet *">
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="form-input"
                      >
                        {SUBJECTS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Message *">
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="form-input resize-none"
                      placeholder="Décrivez votre demande…"
                    />
                  </Field>
                </div>

                <button type="submit" disabled={status === 'loading'} className="btn-primary mt-6 w-full">
                  <Send className="h-4 w-4" />
                  {status === 'loading' ? 'Envoi…' : 'Envoyer le message'}
                </button>

                {status === 'ok' && (
                  <div className="mt-4 flex items-start gap-2 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700 ring-1 ring-emerald-100">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>
                      Merci ! Votre message a bien été envoyé. Notre équipe vous répondra sous 48h.
                    </p>
                  </div>
                )}
                {status === 'err' && (
                  <div className="mt-4 rounded-2xl bg-rose-50 p-4 text-sm text-rose-700 ring-1 ring-rose-100">
                    Une erreur est survenue. Vérifiez votre connexion et réessayez.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="form-field">
      <span className="form-label">{label}</span>
      {children}
    </label>
  );
}
