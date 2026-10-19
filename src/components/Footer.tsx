import { ArrowUp, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-200/80 dark:border-navy-800/80 bg-zinc-50 dark:bg-navy-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand Info with Avatar */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-accent-600/20 border border-accent-500/30 flex items-center justify-center shrink-0">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="text-base font-bold text-zinc-950 dark:text-white">
                {personal.name}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                {personal.role} • {personal.location}
              </div>
            </div>
          </div>

          {/* Quick Contact & Social Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-600 dark:text-zinc-400">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent-500 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{personal.email}</span>
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-accent-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 {personal.phone}</span>
            </a>

            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent-500 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent-500 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-navy-850 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-600 dark:hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-all duration-200 shadow-xs shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-zinc-200/60 dark:border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 gap-2">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div>
            Built with React 18, TypeScript, Tailwind CSS & Vite.
          </div>
        </div>

      </div>
    </footer>
  );
};
