"use client";
import styles from './components.module.css';
import useReveal from '../hooks/useReveal';

const projects = [
  {
    title: "Car Accessories Web Application",
    desc: "A full stack web application with React for the frontend and Java for backend services. Implemented RESTful APIs to handle product data, search, and category management with SQL data storage.",
    tech: ["React", "Java", "SQL", "REST APIs"],
    link: "https://github.com/sanjaybridgeon-tech",
    liveUrl: "https://saraxnew.vercel.app/"
  }
];

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
