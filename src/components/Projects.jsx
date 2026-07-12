import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  {
    title: "JOBOL's MENU",
    description: "Jobol's Menu is a Java and MySQL-based food ordering management system designed to automate restaurant menu customization, customer billing, and daily transaction tracking through a clean desktop interface.",
    techStack: ["Java", "MySQL"],
    images: ["/images/j1.png", "/images/j2.png", "/images/j3.png", "/images/j4.png", "/images/j5.png"],
  },
  {
    title: 'Art Space Hub',
    description: 'Art Space Hub is a web-based art gallery management system built with Laravel and MySQL that centralizes artwork inventory tracking, exhibition scheduling, and artist curation into a seamless platform.',
    techStack: ['HTML', 'CSS', 'Laravel', 'MySQL', 'PHP', 'JavaScript'],
    images: ["/images/a1.jpg", "/images/a2.jpg", "/images/a3.jpg", "/images/a4.jpg", "/images/a5.jpg"],
  },
  {
    title: 'AgriSync',
    description: 'A unified platform connecting local farmers directly to eateries, optimizing fresh produce supply chains with smart logistics and transparent trading.',
    techStack: ['Flutter', 'Rest API', 'Firebase'],
    images: ["/images/b1.png", "/images/b2.png", "/images/b3.png", "/images/b4.png"],
  },
  {
    title: 'EduPredict',
    description: 'EduPredict is an innovative, mobile-first application engineered to bridge the gap between student behavior and academic outcomes.',
    techStack: ['Python', 'React Native', 'Machine Learning'],
    images: ["/images/e1.png", "/images/e2.png", "/images/e3.png", "/images/e4.png"],
  },
  {
    title: 'Secure Registration and Login System',
    description: 'This system uses the SHA-256 (Secure Hash Algorithm 256-bit) hashing algorithm to protect user passwords.',
    techStack: ['Python', 'SQLite'],
    images: ["/images/s1.png", "/images/s2.png", "/images/s3.png"],
  },
  {
    title: 'SuriinAI',
    description: 'SuriinAI is an AI-powered browser extension built with Python, Flask, Firebase, and Manifest V3 that detects fraudulent websites and phishing scams in real time.',
    techStack: ['Python', 'Manifest V3', 'Flask', 'Firebase'],
    images: ["/images/c1.png", "/images/c2.png", "/images/c3.png", "/images/c4.png", "/images/c5.png", "/images/c6.png", "/images/c7.png", "/images/c8.png", "/images/c9.png"],
  },
];

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const selectedProject = useMemo(
    () => (selectedProjectIndex === null ? null : projects[selectedProjectIndex]),
    [selectedProjectIndex],
  );

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const visibleProjects = projects.slice(currentPage * PROJECTS_PER_PAGE, (currentPage + 1) * PROJECTS_PER_PAGE);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProjectIndex]);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [currentPage, totalPages]);

  const handleOpen = (index) => {
    setSelectedProjectIndex(index);
  };

  const handleClose = () => {
    setSelectedProjectIndex(null);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((current) => (current + 1) % selectedProject.images.length);
  };

  const handlePrevious = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((current) => (current - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const handleNextPage = () => {
    setCurrentPage((current) => (current + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setCurrentPage((current) => (current - 1 + totalPages) % totalPages);
  };

  return (
    <>
      <section id="projects" className="section-anchor relative mt-6 overflow-hidden rounded-[2rem] bg-white/[0.03] px-6 py-14 sm:px-10">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-textMuted">Selected Work</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-textPrimary sm:text-4xl">Course projects</h3>
            </div>
          </div>

          {totalPages > 1 ? (
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="font-mono text-sm tracking-[0.18em] text-textMuted">
                Page {currentPage + 1} / {totalPages}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePreviousPage}
                  className="rounded-full px-4 py-2 text-sm font-semibold tracking-[0.12em] text-textPrimary transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-emeraldAccent hover:shadow-[0_14px_28px_rgba(0,0,0,0.26)]"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNextPage}
                  className="rounded-full bg-emeraldAccent px-4 py-2 text-sm font-semibold tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#39785d] hover:shadow-[0_18px_35px_rgba(45,106,79,0.26)]"
                >
                  Next
                </button>
              </div>
            </div>
          ) : null}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.3 }}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleProjects.map((project, visibleIndex) => {
                const projectIndex = currentPage * PROJECTS_PER_PAGE + visibleIndex;

                return (
                  <motion.button
                    key={`${project.title}-${projectIndex}`}
                    type="button"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: visibleIndex * 0.06 }}
                    onClick={() => handleOpen(projectIndex)}
                    className="group rounded-[1.6rem] bg-gradient-to-br from-forestAccent/25 via-white/[0.03] to-surface p-5 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(0,0,0,0.34)]"
                  >
                    <div className="mb-4 overflow-hidden rounded-[1.2rem] bg-black/30 transition duration-300 group-hover:shadow-[0_16px_40px_rgba(45,106,79,0.18)]">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} preview`}
                        className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <h4 className="mt-3 font-display text-2xl font-semibold text-textPrimary">{project.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-textMuted">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium tracking-[0.1em] text-textPrimary transition duration-300 group-hover:bg-white/[0.08]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-md"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[1.8rem] bg-[#141414] shadow-glow"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                <div>
                  <h4 className="mt-2 font-display text-2xl font-semibold text-textPrimary">{selectedProject.title}</h4>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full px-4 py-2 text-sm font-semibold tracking-[0.12em] text-textPrimary transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-emeraldAccent hover:shadow-[0_14px_28px_rgba(0,0,0,0.26)]"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.5fr_0.8fr]">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-[1.4rem] bg-black/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-emeraldAccent/20 to-transparent" />
                    <div className="relative aspect-[16/10]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${selectedProject.title}-${currentImageIndex}`}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -24 }}
                          transition={{ duration: 0.28 }}
                          className="flex h-full w-full items-center justify-center bg-white/[0.03]"
                        >
                          <img
                            src={selectedProject.images[currentImageIndex]}
                            alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="font-mono text-sm tracking-[0.18em] text-textMuted">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="rounded-full px-4 py-2 text-sm font-semibold tracking-[0.12em] text-textPrimary transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-emeraldAccent hover:shadow-[0_14px_28px_rgba(0,0,0,0.26)]"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="rounded-full bg-emeraldAccent px-4 py-2 text-sm font-semibold tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#39785d] hover:shadow-[0_18px_35px_rgba(45,106,79,0.26)]"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.4rem] bg-white/[0.03] p-5">
                  <p className="text-sm leading-7 text-textMuted">{selectedProject.description}</p>
                  <div className="mt-6">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-textMuted">Tech Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium tracking-[0.1em] text-textPrimary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}