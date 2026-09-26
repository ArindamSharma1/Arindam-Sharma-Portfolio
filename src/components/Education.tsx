import { Section } from './Section';

export const Education = () => (
  <Section id="education" title="Education" meta="2022 - 2026" tone="paper">
    <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
      <div>
        <h3 className="text-2xl md:text-4xl">B.Tech in Computer Science Engineering</h3>
        <p className="mt-2 font-display text-lg font-medium text-slate">
          Jaypee University of Information Technology. Cyber Security specialization.
        </p>
      </div>
      <ul className="space-y-3 font-display font-semibold">
        <li className="border-l-4 border-cobalt pl-4">1st prize, university hackathon (50+ teams)</li>
        <li className="border-l-4 border-cobalt pl-4">Patent filed for the hackathon project</li>
      </ul>
    </div>
  </Section>
);
