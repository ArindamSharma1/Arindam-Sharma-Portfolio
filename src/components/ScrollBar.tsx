import { useEffect, useRef } from 'react';

/** Thin reading-progress line along the bottom edge of the nav. */
export const ScrollBar = () => {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const progress = max > 0 ? el.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5">
      <div ref={bar} className="h-full origin-left bg-cobalt" style={{ transform: 'scaleX(0)' }} />
    </div>
  );
};
