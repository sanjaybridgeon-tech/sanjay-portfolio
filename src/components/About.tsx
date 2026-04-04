"use client";
import styles from './components.module.css';
import useReveal from '../hooks/useReveal';

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about">
      <div className={`${styles.aboutGrid} reveal`} ref={revealRef}>
        <div className="delay-1">
          <h2 className="section-title originate">About Me</h2>
          <p>
            Enthusiastic B.Tech graduate in Electronics and Communication Engineering from Mar Athanasius College of Engineering. My journey began with a curiosity about how digital systems work, which led me to specialize in high-performance web applications using React and Java (Spring Boot).
          </p>
          <p>
            Currently, as a Full Stack Intern at Bridgeon, I am honing my skills in building robust architectures, intuitive user interfaces, and scalable backend systems. I thrive in collaborative environments and am always eager to master new technologies to create meaningful digital experiences.
          </p>

          <div className={styles.socialBar}>
            <a href="https://linkedin.com/in/sanjaysr2902/" target="_blank" className={styles.socialBtn}>LinkedIn</a>
            <a href="https://github.com/sanjaybridgeon-tech/" target="_blank" className={styles.socialBtn}>GitHub</a>
            <a href="https://leetcode.com/u/kFV17A9muN/" target="_blank" className={styles.socialBtn}>LeetCode</a>
          </div>
        </div>

        <div className={`${styles.boxedCard} delay-2`}>
          <h3 className={styles.cardTitle} style={{ fontSize: '1.8rem', marginBottom: '30px' }}>
            Leadership & Extras
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '20px' }}>
              <strong>Social Media Head</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>College Arts Fest</p>
            </li>
            <li style={{ marginBottom: '20px' }}>
              <strong>Publicity Head</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Astronomy & Space Research Committee (AISA)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
