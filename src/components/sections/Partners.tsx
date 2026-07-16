import { useState } from 'react';
import {
  Building2,
  HardHat,
  Briefcase,
  Landmark,
  Cpu,
  CheckCircle2,
  Send,
  Handshake,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { supabase } from '../../lib/supabase';

const PARTNER_TYPES = [
  { icon: Building2, label: 'Agences immobilières' },
  { icon: HardHat, label: 'Promoteurs' },
  { icon: Briefcase, label: 'Gestionnaires de biens' },
  { icon: Landmark, label: 'Institutions financières' },
  { icon: Cpu, label: 'Entreprises technologiques' },
];

export function Partners() {
  const [form, setForm] = useState({
    organization: '',
    contact_name: '',
    email: '',
    phone: '',
    partner_type: 'Agences immobilières',
    country: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('partner_applications').insert(form);
    setStatus(error ? 'err' : 'ok');
    if (!error) {
      setForm({
        organization: '',
        contact_name: '',
        email: '',
        phone: '',
        partner_type: 'Agences immobilières',
        country: '',
        message: '',
      });
    }
  };

  return (
    <Section id="partenaires" className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-radial-brand opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow !bg-white/10 !text-white !ring-white/20">
              <Handshake className="h-3.5 w-3.5" />
              Partenaires
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Construisons ensemble l'infrastructure immobilière de l'Afrique
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              ImoFlex recherche des partenaires stratégiques pour accélérer la transformation
              digitale du secteur immobilier sur le continent.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {PARTNER_TYPES.map((p, i) => (
                <div
                  key={p.label}
                  className="reveal flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition-all"
                  data-reveal-delay={i * 70}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{p.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-brand-600/20 p-4 ring-1 ring-brand-500/30">
              <CheckCircle2 className="h-5 w-5 text-brand-300" />
              <p className="text-sm text-white/80">
                Plus de 120 agences et institutions font déjà confiance à ImoFlex.
              </p>
            </div>
          </div>

          <div className="reveal" data-reveal-delay="120">
            <form onSubmit={submit} className="card p-6 sm:p-8 text-ink-900">
              <h3 className="text-xl font-bold">Devenir partenaire</h3>
              <p className="mt-1 text-sm text-ink-500">
                Remplissez ce formulaire, notre équipe vous contacte sous 48h.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Organisation *">
                    <input
                      required
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="form-input"
                      placeholder="Nom de l'organisation"
                    />
                  </Field>
                  <Field label="Personne contact *">
                    <input
                      required
                      value={form.contact_name}
                      onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
                      className="form-input"
                      placeholder="Votre nom"
                    />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
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
                  <Field label="Téléphone">
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="form-input"
                      placeholder="+221 ..."
                    />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Type de partenaire *">
                    <select
                      value={form.partner_type}
                      onChange={(e) => setForm({ ...form, partner_type: e.target.value })}
                      className="form-input"
                    >
                      {PARTNER_TYPES.map((p) => (
                        <option key={p.label}>{p.label}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Pays">
                    <input
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="form-input"
                      placeholder="Sénégal, Côte d'Ivoire…"
                    />
                  </Field>
                </div>
                <Field label="Message">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input resize-none"
                    placeholder="Parlez-nous de votre projet de partenariat…"
                  />
                </Field>
              </div>

              <button type="submit" disabled={status === 'loading'} className="btn-primary mt-6 w-full">
                <Send className="h-4 w-4" />
                {status === 'loading' ? 'Envoi…' : 'Devenir partenaire'}
              </button>

              {status === 'ok' && (
                <p className="mt-3 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm text-emerald-700 ring-1 ring-emerald-100">
                  Merci ! Votre demande a été envoyée. Notre équipe vous contactera sous 48h.
                </p>
              )}
              {status === 'err' && (
                <p className="mt-3 rounded-xl bg-rose-50 px-4 py-2.5 text-sm text-rose-700 ring-1 ring-rose-100">
                  Une erreur est survenue. Vérifiez votre connexion et réessayez.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

    </Section>
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
