import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to `target` when the element enters the viewport.
 * Returns a ref to attach and the current value.
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<T>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}
