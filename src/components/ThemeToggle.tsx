import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-navy-750 bg-white dark:bg-navy-850 text-zinc-700 dark:text-zinc-200 hover:text-accent-500 dark:hover:text-accent-400 hover:border-accent-500/40 transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-accent-500 ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
};
