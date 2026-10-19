import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20 flex items-center justify-center font-bold text-xs">
            AP
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React, TypeScript & Tailwind CSS.
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
