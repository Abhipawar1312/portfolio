import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big Invitation Header & Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              Get in Touch
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight">
              Interested in working together?
              <br />
              <span className="text-accent-600 dark:text-accent-400 inline-flex items-center gap-2 mt-2">
                Let's talk <ArrowRight className="w-8 h-8" />
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal pt-2">
              Whether you have an open frontend opportunity, a project to build, or simply want to connect, my inbox is always open.
            </p>

            {/* Direct Contact Cards */}
            <div className="pt-4 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-100 dark:bg-navy-850 border border-zinc-200/80 dark:border-navy-750">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-zinc-400">Email</div>
                    <a href={`mailto:${personal.email}`} className="font-semibold text-zinc-900 dark:text-white hover:text-accent-500 transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email"
                  className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-navy-800 text-zinc-500 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-accent-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-100 dark:bg-navy-850 border border-zinc-200/80 dark:border-navy-750">
                <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-zinc-400">Phone</div>
                  <a href={`tel:${personal.phone}`} className="font-semibold text-zinc-900 dark:text-white hover:text-accent-500 transition-colors">
                    +91 {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-100 dark:bg-navy-850 border border-zinc-200/80 dark:border-navy-750">
                <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-zinc-400">Location</div>
                  <div className="font-semibold text-zinc-900 dark:text-white">{personal.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-navy-850 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-navy-750 hover:bg-accent-600 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-navy-850 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-navy-750 hover:bg-accent-600 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Modern Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-850 border border-zinc-200/90 dark:border-navy-750 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-navy-700 bg-zinc-50 dark:bg-navy-900 text-zinc-950 dark:text-white text-sm focus:border-accent-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-navy-700 bg-zinc-50 dark:bg-navy-900 text-zinc-950 dark:text-white text-sm focus:border-accent-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Frontend Role Opportunity / Project"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-navy-700 bg-zinc-50 dark:bg-navy-900 text-zinc-950 dark:text-white text-sm focus:border-accent-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-navy-700 bg-zinc-50 dark:bg-navy-900 text-zinc-950 dark:text-white text-sm focus:border-accent-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-lg shadow-accent-600/30 transition-all duration-200 active:scale-95"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              {status === 'success' && (
                <p className="text-xs text-accent-600 dark:text-accent-400 mt-2">
                  Email client opened! If it didn't open automatically, send directly to {personal.email}.
                </p>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
