import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  /** Short hint on the right of the header, such as a count or how to interact. */
  meta?: string;
  children: ReactNode;
  tone?: 'concrete' | 'paper';
}

export const Section = ({ id, title, meta, children, tone = 'concrete' }: SectionProps) => (
  <section
    id={id}
    data-section={id}
    aria-labelledby={`${id}-title`}
    className={tone === 'paper' ? 'bg-paper' : 'bg-concrete'}
  >
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 border-b-2 border-ink pb-4 lg:mb-14">
        <h2 id={`${id}-title`} className="text-5xl font-extrabold leading-none md:text-7xl">
          {title}
        </h2>
        {meta && <p className="font-display text-sm font-medium text-slate">{meta}</p>}
      </header>
      {children}
    </div>
  </section>
);
