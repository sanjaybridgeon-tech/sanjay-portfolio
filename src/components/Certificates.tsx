"use client";
import styles from './components.module.css';
import useReveal from '../hooks/useReveal';

const certificates = [
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    link: "/certificates/java_basic.pdf"
  },
  {
    title: "Course on Embedded C and AVR",
    issuer: "Verdant IT Solutions",
    link: "/certificates/sanjay.pdf"
  }
];

export default function Certificates() {
  const revealRef = useReveal();

  return (
    <section id="certificates">
      <h2 className="section-title originate">Certifications</h2>
      <div className={`${styles.grid} reveal`} ref={revealRef}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.8rem' }}>{cert.title}</h3>
            <p className={styles.cardMeta}>{cert.issuer}</p>
            <a href={cert.link} target="_blank" className={styles.secondaryBtn} 
               style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
              View Certificate ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
