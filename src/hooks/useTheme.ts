import { useCallback, useState } from 'react';

export type Theme = 'light' | 'dark';

const read = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(read);

  const toggle = useCallback(() => {
    const next: Theme = read() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
    setTheme(next);
  }, []);

  return { theme, toggle };
};
