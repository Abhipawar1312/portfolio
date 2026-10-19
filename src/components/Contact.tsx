import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
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
    // Prepare mailto link with encoded parameters
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3 text-accent-600 dark:text-accent-400 font-semibold text-sm uppercase tracking-wider">
          <Mail className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Let's Connect & Collaborate
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
          Feel free to reach out for career opportunities, engineering inquiries, or project discussions.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm">
              {/* Email item with copy button */}
              <div className="flex items-start justify-between gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">Email</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-accent-600 dark:hover:text-accent-400 transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-accent-600 dark:text-accent-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <div className="p-2 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Phone</div>
                  <a
                    href={`tel:${personal.phone}`}
                    className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    +91 {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <div className="p-2 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Location</div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Social Profiles
              </div>
              <div className="flex gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-accent-600 dark:hover:text-accent-400 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-accent-600 dark:hover:text-accent-400 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Simple Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name <span className="text-accent-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 text-sm focus:border-accent-500 focus:bg-white dark:focus:bg-zinc-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Email <span className="text-accent-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 text-sm focus:border-accent-500 focus:bg-white dark:focus:bg-zinc-900 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Frontend Role Opportunity / Project Discussion"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 text-sm focus:border-accent-500 focus:bg-white dark:focus:bg-zinc-900 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Message <span className="text-accent-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 text-sm focus:border-accent-500 focus:bg-white dark:focus:bg-zinc-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-sm transition-all duration-200 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
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
