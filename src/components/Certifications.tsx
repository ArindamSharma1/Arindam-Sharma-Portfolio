import { useState } from 'react';
import { CERTIFICATIONS } from '../constants';
import { Section } from './Section';

/** Shown before "Show all", so the section stays short as the list grows. */
const INITIAL_COUNT = 6;

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso));

const sorted = [...CERTIFICATIONS].sort((a, b) => b.date.localeCompare(a.date));

export const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? sorted : sorted.slice(0, INITIAL_COUNT);
  const hidden = sorted.length - visible.length;

  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-4 md:grid-cols-2">
        {visible.map((c) => (
          <li key={c.url} className="flex flex-col justify-between gap-6 border border-ink bg-paper p-6">
            <div>
              <p className="font-display text-sm font-semibold text-slate">
                {c.issuer}, {formatDate(c.date)}
              </p>
              <h3 className="mt-2 text-2xl leading-tight">{c.name}</h3>
            </div>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-plain w-fit font-display font-semibold underline"
            >
              Verify credential<span className="sr-only">: {c.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {(hidden > 0 || showAll) && sorted.length > INITIAL_COUNT && (
        <button
          type="button"
          className="chip-button mt-6"
          aria-expanded={showAll}
          onClick={() => setShowAll((s) => !s)}
        >
          {showAll ? 'Show fewer' : `Show all ${sorted.length}`}
        </button>
      )}
    </Section>
  );
};
