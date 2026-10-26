import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const links = [
  { label: 'About', href: '#profile' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const handleLinkClick = (event) => {
    setIsMenuOpen(false);
    const target = document.querySelector(event.currentTarget.hash);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  };

  return (
    <motion.header
      initial={reducedMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          setIsMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#about" onClick={handleLinkClick} className="font-display text-lg font-semibold tracking-[0.2em] text-textPrimary">
          ARNEL.D
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-[0.18em] text-textMuted transition-colors duration-200 hover:text-[#9bddb9]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuButton}
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium tracking-[0.14em] text-textPrimary transition hover:border-emeraldAccent/70 hover:text-[#9bddb9] xl:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls={isMenuOpen ? 'mobile-navigation' : undefined}
        >
          {isMenuOpen ? 'Close ×' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={reducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
            className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/5 bg-surface/95 px-4 py-4 backdrop-blur-xl xl:hidden"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-3">
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
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
