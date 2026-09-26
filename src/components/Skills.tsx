import { SKILL_CATEGORIES, projectsUsing } from '../constants';
import { Section } from './Section';

interface SkillsProps {
  activeTech: string | null;
  onPickTech: (tech: string) => void;
}

export const Skills = ({ activeTech, onPickTech }: SkillsProps) => (
  <Section id="skills" title="Stack" meta="Tap a tool to see the projects that use it" tone="paper">
    <div className="grid gap-10 md:grid-cols-3">
      {SKILL_CATEGORIES.map((category) => (
        <div key={category.name}>
          <h3 className="mb-4 text-xl">{category.name}</h3>
          <ul className="flex flex-wrap gap-2">
            {category.techs.map((tech) => {
              const used = projectsUsing(tech).length;
              return (
                <li key={tech}>
                  {used > 0 ? (
                    <button
                      type="button"
                      className="chip-button"
                      aria-pressed={activeTech?.toLowerCase() === tech.toLowerCase()}
                      onClick={() => onPickTech(tech)}
                    >
                      {tech}
                      <span className="opacity-60" aria-label={`${used} projects`}>
                        {used}
                      </span>
                    </button>
                  ) : (
                    <span className="chip border-ink/15 text-slate">{tech}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);
