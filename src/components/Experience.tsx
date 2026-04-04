"use client";
import styles from './components.module.css';
import useReveal from '../hooks/useReveal';

const experiences = [
  {
    company: "Bridgeon, Kakkancheri",
    role: "Full Stack Developer Intern",
    period: "May 2025 – Feb 2026",
    points: [
      "Undergoing hands-on full stack development training with a focus on both frontend and backend technologies.",
      "Learned and implemented Java as a backend language, building RESTful APIs and integrating them with frontend applications.",
      "Worked on frontend development using React and JavaScript to consume backend APIs.",
      "Gained practical experience in Git version control, project workflows, and real-world software development practices.",
    ],
    tech: ["Java", "React", "SQL", "Git", "REST APIs"],
  },
];

export default function Experience() {
  const revealRef = useReveal();

  return (
    <section id="experience">
      <h2 className="section-title originate">Experience</h2>
      <div className={`${styles.grid} reveal`} ref={revealRef}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{exp.role}</h3>
            <div className={styles.cardMeta}>{exp.company} | {exp.period}</div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {exp.points.map((point, i) => (
                <li key={i} className={styles.cardMeta} style={{ marginBottom: '10px' }}>• {point}</li>
              ))}
            </ul>
            <div className={styles.tagContainer}>
              {exp.tech.map((t, i) => (
                <span key={i} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
