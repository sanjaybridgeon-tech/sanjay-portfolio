"use client";
import styles from './components.module.css';
import useReveal from '../hooks/useReveal';

const projects: { title: string; desc: string; tech: string[]; link: string | null; liveUrl: string | null }[] = [];

export default function Projects() {
  const revealRef = useReveal();

  return (
    <section id="projects">
      <h2 className="section-title originate">Projects</h2>
      <div className={`${styles.grid} reveal`} ref={revealRef}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardMeta}>{project.desc}</p>
            <div className={styles.tagContainer}>
              {project.tech.map((t, i) => (
                <span key={i} className={styles.tag}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: 'auto' }}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                  GitHub ↗
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}
                   style={{ borderRadius: '30px' }}>
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
