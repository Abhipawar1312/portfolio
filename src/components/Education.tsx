import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3 text-accent-600 dark:text-accent-400 font-semibold text-sm uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Education & Certifications
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
          Formal academic qualifications, professional industry certifications, and spoken languages.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              <span>Formal Education</span>
            </h3>

            <div className="space-y-4">
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 self-start sm:self-auto">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.institution}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs font-medium">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {edu.location}
                    </span>
                    <span className="text-accent-600 dark:text-accent-400 font-bold bg-accent-500/10 px-2 py-0.5 rounded">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications and Languages */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <span>Certificates</span>
              </h3>

              <div className="space-y-3">
                {portfolioData.certificates.map((cert, idx) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                  >
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h4>
                    <div className="mt-1 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <span>{cert.issuer}</span>
                      <span className="font-medium text-accent-600 dark:text-accent-400">{cert.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <span>Languages</span>
              </h3>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  {portfolioData.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 text-xs font-semibold rounded-md bg-accent-500/10 text-accent-700 dark:text-accent-300 border border-accent-500/20"
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
