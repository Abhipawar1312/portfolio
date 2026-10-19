import React from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const highlights = [
  '2+ years building SPAs with React.js & Angular',
  'Automated unit & functional testing (Jest, Vitest, RTL)',
  'Scalable state management with Redux & Zustand',
  'Full-stack MERN exposure with Node.js & Express.js',
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3 text-accent-600 dark:text-accent-400 font-semibold text-sm uppercase tracking-wider">
          <User className="w-4 h-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Background & Engineering Philosophy
        </h2>

        {/* Content Box */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 leading-relaxed text-zinc-700 dark:text-zinc-300 text-base sm:text-lg"
          >
            <p className="whitespace-pre-line">
              {portfolioData.about}
            </p>
          </motion.div>

          {/* Quick highlights from resume */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Core Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 dark:text-accent-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
