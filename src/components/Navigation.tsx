import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useScrollSection } from '../hooks/useScrollSection';
import { useTheme } from '../hooks/useTheme';
import { ScrollBar } from './ScrollBar';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const activeSection = useScrollSection();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const themeButton = (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="p-2 transition-colors hover:text-cobalt"
    >
      {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-concrete/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="link-plain font-display text-lg font-bold">
          Arindam Sharma
        </a>

        <div className="flex items-center gap-2 md:gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                  className={`link-plain font-display text-sm font-semibold ${
                    activeSection === item.id ? 'text-cobalt' : 'text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {themeButton}

          <button
            type="button"
            className="p-2 font-display text-sm font-semibold md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-ink/15 bg-concrete px-5 pb-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="link-plain block border-b border-ink/10 py-3 font-display font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <ScrollBar />
    </header>
  );
};
