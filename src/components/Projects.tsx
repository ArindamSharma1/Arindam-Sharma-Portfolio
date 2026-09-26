import { useEffect, useState } from 'react';
import { PROJECTS, TAGS, Project, Tag } from '../constants';
import { ProjectArt } from './ProjectArt';
import { Section } from './Section';

const Detail = ({ project }: { project: Project }) => (
  <div key={project.title} className="swap">
    {project.image ? (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        width={640}
        height={400}
        loading="lazy"
        decoding="async"
        className="aspect-[8/5] w-full border border-ink/20 object-cover object-top"
      />
    ) : project.art ? (
      <ProjectArt kind={project.art} />
    ) : (
      <div className="flex aspect-[8/5] w-full items-end border border-ink/20 bg-ink p-5 text-paper">
        <span className="font-display text-3xl font-bold leading-tight">{project.title}</span>
      </div>
    )}

    <p className="mt-5 text-xl leading-snug">{project.summary}</p>
    <p className="mt-2 font-semibold">{project.result}</p>

    <ul className="mt-5 flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>

    {(project.demo || project.repo) && (
      <ul className="mt-5 flex gap-6 font-display font-semibold">
        {project.demo && (
          <li>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Open live site<span className="sr-only"> for {project.title}</span>
            </a>
          </li>
        )}
        {project.repo && (
          <li>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              View source<span className="sr-only"> for {project.title}</span>
            </a>
          </li>
        )}
      </ul>
    )}
  </div>
);

interface ProjectsProps {
  techFilter: string | null;
  onClearTech: () => void;
}

export const Projects = ({ techFilter, onClearTech }: ProjectsProps) => {
  const [tag, setTag] = useState<Tag | 'All'>('All');
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  // A tool picked in Stack replaces any category filter.
  useEffect(() => {
    if (techFilter) setTag('All');
  }, [techFilter]);

  const visible = PROJECTS.filter(
    (p) =>
      (tag === 'All' || p.tags.includes(tag)) &&
      (!techFilter || p.tech.some((t) => t.toLowerCase() === techFilter.toLowerCase()))
  );
  const active = visible.find((p) => p.title === activeTitle) ?? visible[0];

  const count = (t: Tag) => PROJECTS.filter((p) => p.tags.includes(t)).length;

  return (
    <Section id="projects" title="Projects">
      <div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
        <button type="button" className="chip-button" aria-pressed={tag === 'All'} onClick={() => setTag('All')}>
          All {PROJECTS.length}
        </button>
        {TAGS.map((t) => (
          <button key={t} type="button" className="chip-button" aria-pressed={tag === t} onClick={() => setTag(t)}>
            {t} {count(t)}
          </button>
        ))}
        {techFilter && (
          <button type="button" className="chip-button !border-cobalt !bg-cobalt !text-paper" onClick={onClearTech}>
            Uses {techFilter}. Clear
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="font-display text-xl font-semibold">
          No projects match.{' '}
          <button
            type="button"
            className="underline underline-offset-4"
            onClick={() => {
              setTag('All');
              onClearTech();
            }}
          >
            Show all projects
          </button>
        </p>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <ul>
            {visible.map((p) => {
              const isActive = p.title === active?.title;
              return (
                <li key={p.title} className="border-b border-ink/25">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onMouseEnter={() => setActiveTitle(p.title)}
                    onFocus={() => setActiveTitle(p.title)}
                    onClick={() => setActiveTitle(p.title)}
                    className={`group flex w-full items-baseline justify-between gap-4 py-4 text-left ${
                      isActive ? 'text-cobalt' : ''
                    }`}
                  >
                    {/* Transform only, so the title never re-wraps when it moves. */}
                    <span
                      className={`font-display text-2xl font-bold leading-tight transition-transform duration-200 md:text-4xl ${
                        isActive ? 'translate-x-3' : 'group-hover:translate-x-1.5'
                      }`}
                    >
                      {p.title}
                    </span>
                    <span className="shrink-0 font-display text-sm font-medium text-slate">{p.context}</span>
                  </button>
                  {isActive && (
                    <div className="pb-6 lg:hidden">
                      <Detail project={p} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:sticky lg:top-24 lg:block lg:self-start" aria-live="polite">
            {active && <Detail project={active} />}
          </div>
        </div>
      )}
    </Section>
  );
};
