import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-navy-800/60 shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-zinc-900 dark:text-white font-extrabold text-xl tracking-tight hover:text-accent-500 transition-colors"
            aria-label={`${portfolioData.personal.name} home`}
          >
            <span className="w-9 h-9 rounded-full bg-accent-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-accent-600/30">
              AP
            </span>
            <span className="font-bold">{portfolioData.personal.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-navy-850/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Contact Button & Theme Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-md shadow-accent-600/25 transition-all duration-200 active:scale-95"
            >
              Let's Talk
            </a>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-navy-850 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-navy-800 bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-1.5 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-accent-500 hover:bg-zinc-100 dark:hover:bg-navy-850 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block text-center w-full py-2.5 rounded-lg text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-md"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
