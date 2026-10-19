import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, ArrowDown } from 'lucide-react';
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

          {/* Profile Photo Column */}
          {personal.avatarUrl && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                {/* Ambient Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent-500/20 via-emerald-500/10 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                {/* Profile Image with Transparent Background */}
                <div className="relative flex items-end justify-center">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-auto h-72 sm:h-84 md:h-96 max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_12px_28px_rgba(16,185,129,0.2)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-3 -left-3 sm:-left-4 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                  <span>2+ Years Experience</span>
                </div>
              </motion.div>
            </div>
          )}
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
