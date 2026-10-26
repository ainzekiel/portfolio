import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects';

const filters = ['All projects', 'Web apps', 'Mobile', 'Desktop & tools'];
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function Tags({ items }) {
  return <ul className="project-tags" aria-label="Technologies used">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Gallery({ project, onClose }) {
  const dialog = useRef(null);
  const [index, setIndex] = useState(0);
  const [failedImage, setFailedImage] = useState(null);
  const imagePath = project.images[index];
  const changeImage = (step) => setIndex((current) => (current + step + project.images.length) % project.images.length);

  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog ref={dialog} className="project-dialog" aria-labelledby="gallery-title" onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          changeImage(event.key === 'ArrowRight' ? 1 : -1);
        }
      }}>
      <div className="gallery-shell">
        <header className="gallery-header">
          <div className="min-w-0"><p className="project-eyebrow">Project gallery</p><h2 id="gallery-title" className="font-display text-xl font-semibold sm:text-2xl">{project.title}</h2></div>
          <button autoFocus type="button" className="gallery-button shrink-0" onClick={onClose} aria-label="Close project gallery">Close ×</button>
        </header>
        <div className="gallery-body">
          <div className="min-w-0">
            <div className="gallery-image">
              {failedImage === imagePath ? <p role="status" className="p-6 text-center">This screenshot could not load. Try another preview.</p> :
                <img key={imagePath} src={asset(imagePath)} alt={`${project.title} — screenshot ${index + 1} of ${project.images.length}`} onError={() => setFailedImage(imagePath)} />}
            </div>
            <div className="gallery-controls">
              <button type="button" className="gallery-button" onClick={() => changeImage(-1)} aria-label="Previous screenshot">← <span>Previous</span></button>
              <p className="font-mono text-sm text-textMuted" aria-live="polite" aria-atomic="true">{index + 1} / {project.images.length}</p>
              <button type="button" className="gallery-button" onClick={() => changeImage(1)} aria-label="Next screenshot"><span>Next</span> →</button>
            </div>
            <div className="gallery-thumbnails" aria-label="Choose a screenshot">
              {project.images.map((path, imageIndex) => <button key={path} type="button" aria-label={`Show screenshot ${imageIndex + 1}`} aria-pressed={index === imageIndex} onClick={() => setIndex(imageIndex)}>
                <img src={asset(path)} alt="" loading="lazy" /><span>{String(imageIndex + 1).padStart(2, '0')}</span>
              </button>)}
            </div>
            <a className="mt-4 inline-block text-sm text-[#9bddb9] underline underline-offset-4" href={asset(imagePath)} target="_blank" rel="noreferrer">Open full-size screenshot ↗<span className="sr-only"> (new tab)</span></a>
          </div>
          <aside className="gallery-details">
            <p className="project-eyebrow">{project.category}</p>
            <p className="mt-3 text-sm leading-7 text-textMuted">{project.description}</p>
            <h3 className="mb-3 mt-6 font-display font-semibold">Built with</h3>
            <Tags items={project.techStack} />
            {project.repository && <a className="project-link mt-6" href={project.repository} target="_blank" rel="noreferrer">View GitHub repository ↗<span className="sr-only"> (new tab)</span></a>}
          </aside>
        </div>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const reducedMotion = useReducedMotion();
  const visibleProjects = projects.filter((project) => filter === 'All projects' || project.category === filter);

  return (
    <section id="projects" className="section-anchor projects-section mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 sm:px-10" aria-labelledby="projects-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="project-eyebrow">04 / Selected work</p><h2 id="projects-heading" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Ideas put into practice.</h2></div>
        <a href="https://github.com/ainzekiel" target="_blank" rel="noreferrer" className="project-link">Explore my GitHub ↗<span className="sr-only"> (new tab)</span></a>
      </div>
      <p className="mt-4 max-w-2xl leading-7 text-textMuted">A collection of academic projects exploring web development, data, and useful everyday tools. Take a closer look at the interfaces and the technologies behind them.</p>
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <p className="mb-5 text-sm text-textMuted" role="status">Showing {visibleProjects.length} of {projects.length} projects</p>
      <div className="project-grid">
        {visibleProjects.map((project) => <motion.article key={project.title} className={`project-card ${project.featured ? 'project-featured' : ''}`}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reducedMotion ? 0 : 0.35 }}>
          <button type="button" className="project-preview" aria-label={`Open ${project.title} gallery`} aria-haspopup="dialog" onClick={() => setSelectedProject(project)}>
            <img src={asset(project.images[0])} alt={`${project.title} interface preview`} loading="lazy" />
            <span className="preview-count">{project.images.length} screenshots ↗</span>
          </button>
          <div className="project-card-body">
            <p className="project-eyebrow">{project.featured ? 'Featured / ' : ''}{project.category}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{project.title}</h3>
            <p className="mb-5 mt-3 text-sm leading-7 text-textMuted">{project.summary || project.description}</p>
            <Tags items={project.techStack} />
            <div className="project-card-actions">
              <button type="button" className="project-link" aria-label={`View ${project.title} gallery`} aria-haspopup="dialog" onClick={() => setSelectedProject(project)}>View gallery <span aria-hidden="true">→</span></button>
              {project.repository && <a className="text-sm text-textMuted hover:text-white" href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository (new tab)`}>GitHub ↗</a>}
            </div>
          </div>
        </motion.article>)}
      </div>
      {selectedProject && <Gallery key={selectedProject.title} project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
