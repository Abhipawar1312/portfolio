import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const keyTech = [
  'React.js',
  'TypeScript',
  'Angular',
  'Redux Toolkit',
  'Zustand',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'Jest & RTL',
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-zinc-100/60 dark:bg-navy-900/60 border-y border-zinc-200/80 dark:border-navy-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Headline on left, big numbers on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              About
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-snug">
              I've been developing scalable web applications with React & Angular
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal pt-2">
              {portfolioData.about}
            </p>

            <div className="pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400 hover:underline"
              >
                <span>Read more about my career journey</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Stats on the right */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8 pt-2"
          >
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
                2<span className="text-accent-600 dark:text-accent-400">+</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Years of production engineering experience
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
                1000<span className="text-accent-600 dark:text-accent-400">+</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Active users served with 99.9% uptime
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
                15<span className="text-accent-600 dark:text-accent-400">+</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Production features & SPAs delivered
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
                40<span className="text-accent-600 dark:text-accent-400">%</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Reduction in bug reports via automated testing
              </div>
            </div>
          </motion.div>

        </div>

        {/* Tech Stack Horizontal Ticker / Pills */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <span className="uppercase tracking-wider text-[11px] text-zinc-400 dark:text-zinc-500">
            Core Toolkit:
          </span>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {keyTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white dark:bg-navy-850 border border-zinc-200 dark:border-navy-750 text-zinc-800 dark:text-zinc-200 hover:border-accent-500/40 transition-colors shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
