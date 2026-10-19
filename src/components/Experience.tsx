import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3 text-accent-600 dark:text-accent-400 font-semibold text-sm uppercase tracking-wider">
          <Briefcase className="w-4 h-4" />
          <span>Work History</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Professional Experience
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
          Proven track record in single-page applications, frontend automated testing, and responsive cross-browser user interfaces.
        </p>

        {/* Timeline Container */}
        <div className="mt-12 relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-8"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-accent-500 shadow-sm" />

              {/* Card wrapper */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <div className="text-accent-600 dark:text-accent-400 font-semibold text-base">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
