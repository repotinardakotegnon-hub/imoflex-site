import { Building2 } from 'lucide-react';

export function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-700 text-white shadow-soft">
        <Building2 className="h-5 w-5" strokeWidth={2.4} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-brand-300 ring-2 ring-white" />
      </span>
      {showText && (
        <span className="font-display text-xl font-extrabold tracking-tight text-ink-900">
          Imo<span className="text-brand-700">Flex</span>
        </span>
      )}
    </span>
  );
}
