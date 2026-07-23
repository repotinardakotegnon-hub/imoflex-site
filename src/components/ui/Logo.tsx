import { Building2 } from 'lucide-react';

export function Logo({ className = '' }: { className?: string; showText?: boolean }) {
  return (
    <img src="/logo.png" alt="ImoFlex Logo" className={`h-16 sm:h-20 xl:h-24 w-auto object-contain ${className}`} />
  );
}
