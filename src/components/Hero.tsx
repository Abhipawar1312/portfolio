import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, ArrowDown, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7">
            {/* Status pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-500/10 text-accent-700 dark:text-accent-300 border border-accent-500/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              <span>Available for Frontend Roles</span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-3 h-3" />
                {personal.location}
              </span>
            </motion.div>

            {/* Heading with Name and Role */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight"
            >
              Hi, I'm <span className="text-accent-600 dark:text-accent-400">{personal.name}</span>.
              <br />
              <span className="text-zinc-700 dark:text-zinc-300 text-3xl sm:text-4xl font-bold">
                {personal.role}
              </span>
            </motion.h1>

            {/* One line intro from resume */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal"
            >
              {personal.oneLineIntro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={personal.resumeFile}
                download="Abhishek_Pawar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center gap-3 text-zinc-500 dark:text-zinc-400"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-600 mr-1">
                Connect:
              </span>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub Profile"
                className="p-2 rounded-lg hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn Profile"
                className="p-2 rounded-lg hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label={`Send email to ${personal.email}`}
                title={personal.email}
                className="p-2 rounded-lg hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Code Window */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-md group"
            >
              {/* Ambient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-accent-500/20 via-emerald-500/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

              {/* Terminal / Code Window Card */}
              <div className="relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/90 shadow-xl backdrop-blur-md overflow-hidden font-mono text-xs sm:text-[13px]">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-950/70">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-sans text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      developer.ts
                    </span>
                  </div>
                  <span className="text-[11px] font-sans font-medium text-accent-600 dark:text-accent-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                    Available
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-5 text-zinc-800 dark:text-zinc-200 space-y-1 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">engineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">name:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"{personal.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">role:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"{personal.role}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">experience:</span>{' '}
                    <span className="text-amber-600 dark:text-amber-400">"2+ Years"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">coreTech:</span> [
                    <span className="text-emerald-600 dark:text-emerald-400">"React"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"TypeScript"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Angular"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">state:</span> [
                    <span className="text-emerald-600 dark:text-emerald-400">"Redux"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Zustand"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">testing:</span> [
                    <span className="text-emerald-600 dark:text-emerald-400">"Jest"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Vitest"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"RTL"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500 dark:text-zinc-400">status:</span>{' '}
                    <span className="text-accent-600 dark:text-accent-400 font-semibold">"Ready for Impact"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Bottom Metrics Bar */}
                <div className="grid grid-cols-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/70 py-2.5 px-2 text-center font-sans">
                  <div>
                    <div className="text-sm font-bold text-accent-600 dark:text-accent-400">2+</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Years Exp</div>
                  </div>
                  <div className="border-x border-zinc-200 dark:border-zinc-800">
                    <div className="text-sm font-bold text-accent-600 dark:text-accent-400">2</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Key Projects</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-accent-600 dark:text-accent-400">100%</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Tested & Clean</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle scroll down indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400 transition-colors p-2 animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
