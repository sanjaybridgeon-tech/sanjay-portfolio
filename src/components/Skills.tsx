"use client";
import styles from './components.module.css';
import useReveal from '../hooks/useReveal';

const techSkills = [
  "Java", "Spring Boot", "React", "Redux", "C Programming", 
  "SQL", "REST APIs", "HTML", "CSS", 
  "Git", "JavaScript"
];

const softSkills = [
  "Communication", "Teamwork", "Decision Making", 
  "Critical Thinking", "Self-learning", "Event Publicity", 
  "Leadership", "Time Management"
];

export default function Skills() {
  const revealRef = useReveal();

  return (
    <section id="skills">
      <h2 className="section-title originate">Skills</h2>
      <div className="reveal" ref={revealRef}>
        <div className="delay-1" style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--accent)' }}>Technical Skills</h3>
          <div className={styles.skillsGrid}>
            {techSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className="delay-2">
          <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--accent)' }}>Soft Skills</h3>
          <div className={styles.skillsGrid}>
            {softSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
