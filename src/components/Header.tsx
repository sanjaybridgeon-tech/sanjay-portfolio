import Link from 'next/link';
import styles from './components.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className="display-font" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
          SANJAY.A
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <Link href="#about" className={styles.navLink}>About</Link>
        <Link href="#experience" className={styles.navLink}>Experience</Link>
        <Link href="#projects" className={styles.navLink}>Projects</Link>
        <Link href="#skills" className={styles.navLink}>Skills</Link>
        <Link href="#certificates" className={styles.navLink}>Certifications</Link>
        <Link href="#contact" className={styles.navLink}>Contact</Link>
      </nav>
    </header>
  );
}
