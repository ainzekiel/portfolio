import { motion } from 'framer-motion';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'PHP',
  'Python',
  'Git/GitHub',
  'MySQL',
  'RESTful APIs',
  'Laravel',
  'Django',
  'Node',
  'Flutter',
  'Tailwind CSS',
  'Bootstrap',
  'Figma',
  'Flask',
  'Database Management',
  'System Analysis',
  'UI/UX Design',
  'Problem Solving',
  'Critical Thinking',
  'Communication',
  'Teamwork',
];

export default function Skills() {
  return (
    <section id="skills" className="section-anchor mt-6 rounded-[2rem] border border-white/6 bg-white/[0.02] px-6 py-14 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-textMuted">Core Skills</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-textPrimary sm:text-4xl">Technical & professional toolkit</h2>
          </div>
          
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-2xl border border-white/8 bg-gradient-to-br from-forestAccent/30 to-white/[0.03] px-4 py-4 text-center text-sm font-medium tracking-[0.14em] text-textPrimary shadow-sm transition hover:-translate-y-0.5 hover:border-emeraldAccent/40 hover:bg-emeraldAccent/10"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
