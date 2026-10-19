import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Server, CheckSquare, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categoryMeta: Record<
  string,
  { icon: React.ReactNode; subtitle: string }
> = {
  Frontend: {
    icon: <Code2 className="w-5 h-5 text-white" />,
    subtitle: 'Responsive, accessible SPAs & component architecture',
  },
  'State Management': {
    icon: <Layers className="w-5 h-5 text-white" />,
    subtitle: 'Predictable, persistent application state flows',
  },
  Backend: {
    icon: <Server className="w-5 h-5 text-white" />,
    subtitle: 'RESTful APIs, auth pipelines & document databases',
  },
  Testing: {
    icon: <CheckSquare className="w-5 h-5 text-white" />,
    subtitle: 'Automated unit, integration & functional coverage',
  },
  Tools: {
    icon: <Wrench className="w-5 h-5 text-white" />,
    subtitle: 'Modern bundling, version control & developer tooling',
  },
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2">
              Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              My extensive list of skills
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mr-2">
              All categories
            </span>
            <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-navy-850 flex items-center justify-center text-zinc-700 dark:text-zinc-300 text-sm font-bold">
              ←
            </div>
            <div className="w-9 h-9 rounded-full bg-accent-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-accent-600/30">
              →
            </div>
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((group, idx) => {
            const meta = categoryMeta[group.category] || {
              icon: <Code2 className="w-5 h-5 text-white" />,
              subtitle: 'Core competencies & technologies',
            };

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-navy-850 border border-zinc-200/90 dark:border-navy-750 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col"
              >
                {/* Blue Icon Bubble */}
                <div className="w-12 h-12 rounded-2xl bg-accent-600 flex items-center justify-center shadow-lg shadow-accent-600/25 mb-6 group-hover:scale-105 transition-transform duration-200">
                  {meta.icon}
                </div>

                <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight mb-2">
                  {group.category}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {meta.subtitle}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-navy-800">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-navy-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-navy-750"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
