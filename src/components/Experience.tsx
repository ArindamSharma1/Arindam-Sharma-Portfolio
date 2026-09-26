import { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { Section } from './Section';

export const Experience = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="experience" title="Experience">
      <ul className="border-t border-ink/25">
        {EXPERIENCES.map((exp, i) => {
          const isOpen = open === i;
          return (
            <li key={exp.company + exp.duration} className="border-b border-ink/25">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`exp-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full gap-1 py-5 text-left md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8"
              >
                <span className="font-display text-sm font-semibold text-slate">{exp.duration}</span>
                <span>
                  <span className={`block font-display text-xl font-bold md:text-2xl ${isOpen ? 'text-cobalt' : ''}`}>
                    {exp.role}, {exp.company}
                  </span>
                  <span className="block">{exp.highlight}</span>
                </span>
                <span aria-hidden="true" className="hidden font-display text-2xl font-bold md:block">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div id={`exp-${i}`} className="swap pb-6 md:ml-[calc(10rem+2rem)]">
                  <p className="max-w-prose">{exp.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
