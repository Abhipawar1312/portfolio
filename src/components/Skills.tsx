import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Server,
  CheckSquare,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="w-5 h-5" />,
  'State Management': <Layers className="w-5 h-5" />,
  Backend: <Server className="w-5 h-5" />,
  Testing: <CheckSquare className="w-5 h-5" />,
  Tools: <Wrench className="w-5 h-5" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3 text-accent-600 dark:text-accent-400 font-semibold text-sm uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Skills & Expertise
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
          Categorized technologies and tools utilized across production applications and enterprise projects.
        </p>

        {/* Skill Category Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((group, groupIdx) => {
            const icon = categoryIcons[group.category] || <Code2 className="w-5 h-5" />;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: groupIdx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-accent-500/40 dark:hover:border-accent-500/30 transition-all duration-200 shadow-sm hover:shadow"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
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
