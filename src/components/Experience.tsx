import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Resume Action */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              Career History
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
              Check out my career and professional history
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
              Building scalable single-page web applications with modern frontend architectures, automated tests, and cross-functional agile teams.
            </p>

            <div className="pt-4">
              <a
                href={portfolioData.personal.resumeFile}
                download="Abhishek_Pawar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-md shadow-accent-600/25 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete Resume</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Sleek Timeline Rows */}
          <div className="lg:col-span-7 divide-y divide-zinc-200 dark:divide-navy-800">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="py-6 first:pt-0 last:pb-0 space-y-3 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    {exp.company}
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
