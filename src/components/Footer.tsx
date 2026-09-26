import { SOCIALS } from '../constants';

export const Footer = () => (
  <footer className="bg-ink text-paper">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
      <p className="font-display text-sm">&copy; {new Date().getFullYear()} Arindam Sharma</p>
      <ul className="flex gap-6 font-display text-sm font-semibold">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="link-plain !text-paper hover:!text-concrete hover:underline"
              {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
