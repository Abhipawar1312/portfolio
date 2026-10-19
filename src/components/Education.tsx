import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 bg-zinc-100/60 dark:bg-navy-900/60 border-y border-zinc-200/80 dark:border-navy-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2">
            Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Formal Degrees */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-accent-600 dark:text-accent-400" />
              <span>Academic Degrees</span>
            </h3>

            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-850 border border-zinc-200/90 dark:border-navy-750 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                  <h4 className="font-bold text-base text-zinc-950 dark:text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-600/10 text-accent-600 dark:text-accent-400 self-start sm:self-auto border border-accent-600/20">
                    {edu.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {edu.institution}
                </p>

                <div className="mt-3 flex items-center justify-between text-xs font-medium pt-2 border-t border-zinc-100 dark:border-navy-800">
                  <span className="text-zinc-500 dark:text-zinc-400">{edu.location}</span>
                  <span className="font-bold text-accent-600 dark:text-accent-400">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications and Languages */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                <span>Certificates</span>
              </h3>

              <div className="space-y-3">
                {portfolioData.certificates.map((cert, idx) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-navy-850 border border-zinc-200/90 dark:border-navy-750 shadow-sm"
                  >
                    <h4 className="font-bold text-sm text-zinc-950 dark:text-white">
                      {cert.title}
                    </h4>
                    <div className="mt-1 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <span>{cert.issuer}</span>
                      <span className="font-semibold text-accent-600 dark:text-accent-400">{cert.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mb-4">
                <Languages className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                <span>Languages</span>
              </h3>

              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-navy-850 border border-zinc-200/90 dark:border-navy-750 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  {portfolioData.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3.5 py-1 text-xs font-semibold rounded-full bg-accent-600/10 text-accent-600 dark:text-accent-400 border border-accent-600/20"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
