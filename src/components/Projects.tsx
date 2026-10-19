import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Check, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-24 bg-zinc-100/60 dark:bg-navy-900/60 border-y border-zinc-200/80 dark:border-navy-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Take a look at the latest projects I've done
            </h2>
          </div>

          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400 hover:underline"
          >
            <span>See all repositories</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid: Asymmetric Bento/Masonry style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-white dark:bg-navy-850 border border-zinc-200/90 dark:border-navy-750 p-6 sm:p-8 flex flex-col justify-between hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <div>
                {/* Tech Pills Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-600/10 text-accent-600 dark:text-accent-400 border border-accent-600/20">
                    Full-Stack Application
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Source Code"
                      className="p-2 rounded-full bg-zinc-100 dark:bg-navy-900 text-zinc-700 dark:text-zinc-300 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-600 dark:hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-xs transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-black text-zinc-950 dark:text-white tracking-tight mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </h3>

                <p className="text-xs sm:text-sm font-medium text-accent-600 dark:text-accent-400 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {project.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      <Check className="w-4 h-4 text-accent-600 dark:text-accent-400 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-zinc-100 dark:border-navy-800 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-100 dark:bg-navy-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-navy-750"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
