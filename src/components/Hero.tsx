import { RESUME_URL, SOCIALS } from '../constants';

export const Hero = () => (
  <section id="home" data-section="home" className="bg-concrete">
    <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-36 sm:px-8 lg:pb-24">
      <p className="mb-6 max-w-xl font-display text-base font-semibold text-slate">
        Arindam Sharma, AI software engineer at{' '}
        <a href="https://deepklarity.com/" target="_blank" rel="noopener noreferrer">
          DeepKlarity
        </a>
      </p>

      <h1 className="max-w-5xl text-[clamp(2.75rem,8.5vw,7rem)] font-extrabold leading-[0.98]">
        Building <span className="redact">secure systems</span> and scalable full-stack applications.
      </h1>

      <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end">
        <p>
          I hunt for security vulnerabilities and contribute to open-source projects in my free time. My
          projects have real impact and one of them won a university award and was selected for patent filing.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-display font-semibold md:justify-end">
          <li>
            <a href="#projects" className="link-plain">
              See my work
            </a>
          </li>
          <li>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="link-plain">
              Read my resume
            </a>
          </li>
          {SOCIALS.filter((s) => s.label !== 'Email').map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-plain">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
