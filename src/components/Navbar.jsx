import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#about" className="font-display text-lg font-semibold tracking-[0.2em] text-textPrimary">
          IT.PORTFOLIO
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-[0.18em] text-textMuted transition-colors duration-200 hover:text-emeraldAccent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium tracking-[0.14em] text-textPrimary transition hover:border-emeraldAccent/70 hover:text-emeraldAccent md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/5 bg-surface/95 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium tracking-[0.16em] text-textPrimary transition hover:border-emeraldAccent/50 hover:bg-emeraldAccent/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}