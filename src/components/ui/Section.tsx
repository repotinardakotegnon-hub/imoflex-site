import { type ReactNode } from 'react';

export function Section({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  dark?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <span className={`eyebrow reveal ${dark ? 'border-brand-500/40 text-brand-300 bg-brand-500/10' : ''}`}>{eyebrow}</span>}
      <h2 className={`section-title reveal mt-4 ${dark ? '!text-white' : ''}`} data-reveal-delay="60">
        {title}
      </h2>
      {subtitle && (
        <p className={`section-sub reveal mx-auto ${dark ? '!text-white/60' : ''}`} data-reveal-delay="120">
          {subtitle}
        </p>
      )}
    </div>
  );
}
