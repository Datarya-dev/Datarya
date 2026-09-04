import { useEffect, useState } from 'react';
import { Icon } from './Icon';

type Theme = 'dark' | 'light';

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('datarya-theme') as Theme | null;
    const initial = saved === 'dark' || saved === 'light' ? saved : getSystemTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('datarya-theme', next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      onClick={toggle}
    >
      <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={16} />
      <span className="sr-only">{theme === 'dark' ? 'Modo oscuro' : 'Modo claro'}</span>
    </button>
  );
}
