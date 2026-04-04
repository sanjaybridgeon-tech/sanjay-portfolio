import styles from './components.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
      <p className={styles.cardMeta}>
        © {new Date().getFullYear()} Sanjay A. Built with Next.js & Passion.
      </p>
    </footer>
  );
}
