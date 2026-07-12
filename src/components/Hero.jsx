import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="section-anchor relative overflow-hidden rounded-[2rem] border border-white/6 bg-white/[0.03] px-6 py-16 shadow-glow sm:px-10 sm:py-20">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-forestAccent/20 blur-3xl" />
      <div className="absolute right-[-6rem] bottom-0 h-72 w-72 rounded-full bg-emeraldAccent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-textMuted">IT Student Portfolio</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-textPrimary sm:text-5xl lg:text-6xl">
            Hi, I&apos;m ARNEL D. DALOGDOG
          </h1>
          <h2 className="max-w-2xl text-xl font-medium text-emeraldAccent sm:text-2xl">
            Aspiring FULL-STACK DEVELOPER | DATA ANALYST 
          </h2>
          <p className="max-w-2xl text-base leading-8 text-textMuted sm:text-lg">
            I am an IT student focused on building clean, reliable digital experiences that blend practical engineering with thoughtful design. I enjoy turning complex problems into polished interfaces and learning the technologies that power modern products.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-emeraldAccent px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#39785d]"
            >
              View Projects
            </a>
            <a
              href="#skills"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold tracking-[0.16em] text-textPrimary transition duration-200 hover:border-emeraldAccent/70 hover:text-emeraldAccent"
            >
              Explore Skills
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.05, ease: 'easeOut' }}
          className="rounded-[1.75rem] border border-white/6 bg-gradient-to-br from-forestAccent/50 via-white/[0.03] to-emeraldAccent/20 p-6"
        >
          <div className="overflow-hidden rounded-[1.5rem] bg-surface/80 p-4">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-white/10 via-forestAccent/20 to-emeraldAccent/25">
              <img
                src="/images/p3.jpg"
                alt="Profile placeholder"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}