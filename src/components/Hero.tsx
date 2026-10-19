import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-6 pb-12 md:pt-12 md:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-600/10 dark:bg-accent-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Headline & Circular CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 dark:bg-accent-500/15 text-accent-600 dark:text-accent-400 border border-accent-500/20">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.15]">
              I'm <span className="text-accent-600 dark:text-accent-400">{personal.name.split(' ')[0]}</span>,
              <br />
              a {personal.role}
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Specialized in scalable, accessible single-page web applications with React.js, TypeScript, and Angular.
            </p>

            {/* Circular CTA Button + Resume Download */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#about"
                aria-label="Scroll to about section"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-accent-600 hover:bg-accent-700 text-white flex items-center justify-center shadow-lg shadow-accent-600/35 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </a>

              <a
                href={personal.resumeFile}
                download="Abhishek_Pawar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold border border-zinc-300 dark:border-navy-750 bg-white/80 dark:bg-navy-900/80 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-navy-800 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Center Column: Cutout Profile Photo rising from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-end relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-x-8 bottom-0 h-64 bg-gradient-to-t from-accent-600/20 via-accent-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Profile Cutout Image */}
            <div className="relative z-10 w-full max-w-[290px] sm:max-w-[340px] flex justify-center items-end">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-auto max-h-[420px] sm:max-h-[480px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_20px_40px_rgba(37,99,235,0.25)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Right Column: Mini Info Cards & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            {/* Blurb 1: Engineering Focus */}
            <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-navy-900/80 border border-zinc-200/80 dark:border-navy-800/80 backdrop-blur-sm space-y-1.5 shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                Philosophy
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Building scalable SPAs with clean component hierarchy, robust state management, and automated test coverage.
              </p>
            </div>

            {/* Blurb 2: Location & Availability */}
            <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-navy-900/80 border border-zinc-200/80 dark:border-navy-800/80 backdrop-blur-sm space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300">
                {personal.location}
              </p>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Open to Mumbai & Remote Opportunities
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="pt-2 flex items-center gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mr-1">
                Follow:
              </span>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-navy-850 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-600 dark:hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-all duration-200 shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-navy-850 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-600 dark:hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-all duration-200 shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                title={personal.email}
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-navy-850 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-600 dark:hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-all duration-200 shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
