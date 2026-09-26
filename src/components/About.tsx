import { Section } from './Section';

const facts = [
  { label: 'Now', value: 'Working as AI SDE 1' },
  { label: 'Focus', value: 'Security and full-stack' },
  { label: 'Since', value: 'Building since 2022, 7 projects Shipped' },
];

export const About = () => (
  <Section id="about" title="About" tone="paper">
    <dl className="grid gap-px border border-ink bg-ink md:grid-cols-3">
      {facts.map((f) => (
        <div key={f.label} className="bg-paper p-6 md:p-8">
          <dt className="font-display text-sm font-semibold text-slate">{f.label}</dt>
          <dd className="mt-3 font-display text-2xl font-bold leading-tight md:text-3xl">{f.value}</dd>
        </div>
      ))}
    </dl>
    <p className="mt-10 max-w-3xl font-display text-2xl font-semibold leading-snug md:text-4xl">
      Building secure systems, breaking insecure ones.
    </p>
  </Section>
);
