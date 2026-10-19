import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3 text-accent-600 dark:text-accent-400 font-semibold text-sm uppercase tracking-wider">
          <FolderGit2 className="w-4 h-4" />
          <span>Featured Work</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Key Projects
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
          Full-stack web applications featuring real-time architecture, AI integration, state management, and modern design systems.
        </p>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10">
          {portfolioData.projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                    {project.tagline}
                  </p>
                </div>

                {/* External Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.isGithubPlaceholder ? "GitHub Repo (Replace URL in src/data/portfolio.ts)" : "View Source Code"}
                    aria-label={`View source code for ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                    {project.isGithubPlaceholder && (
                      <span className="ml-1 text-[10px] text-amber-500 font-normal">(TODO)</span>
                    )}
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.isLivePlaceholder ? "Live Demo (Replace URL in src/data/portfolio.ts)" : "View Live Demo"}
                    aria-label={`View live demo for ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                    {project.isLivePlaceholder && (
                      <span className="ml-1 text-[10px] text-accent-200 font-normal">(TODO)</span>
                    )}
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Bullet points from resume */}
              <div className="mt-4 space-y-2">
                {project.bullets.map((bullet, bulletIdx) => (
                  <div key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <Check className="w-4 h-4 text-accent-600 dark:text-accent-400 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500 mb-2.5">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
