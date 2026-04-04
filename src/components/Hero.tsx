"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './components.module.css';
import useReveal from '../hooks/useReveal';

export default function Hero() {
  const revealRef = useReveal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Deterministic pseudo-randomness for safe hydration
  const getShatterStyles = (i: number) => {
    if (!mounted) return {} as React.CSSProperties;

    const tx = Math.round(Math.sin(i * 1.5) * 150) || 0;
    const ty = Math.round(Math.cos(i * 2.3) * 150) || 0;
    const rot = Math.round(Math.sin(i * 3.1) * 180) || 0;
    const scale = (Math.abs(Math.sin(i * 4.4)) * 1.5 + 0.5).toFixed(1);

    return {
      '--tx': `${tx}px`,
      '--ty': `${ty}px`,
      '--rot': `${rot}deg`,
      '--sc': scale
    } as React.CSSProperties;
  };

  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.heroGrid} reveal`} ref={revealRef}>
        <div className={`delay-1 ${styles.shatterGroup}`}>
          <p className={`${styles.heroSub} originate`}>
            <span className={styles.shatterContainer}>
              {"Full Stack Developer".split("").map((char, i) => (
                <span key={i} className={styles.shatterLetter} style={getShatterStyles(i)}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </p>
          <h1 className={`${styles.heroTitle} originate`}>
            <span className={`${styles.shatterContainer} ${styles.neonTitle}`}>
              {"SANJAY.A".split("").map((char, i) => (
                <span key={i} className={styles.shatterLetter} style={getShatterStyles(i)}>
                  {char}
                </span>
              ))}
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Enthusiastic B.Tech graduate in Electronics and Communication Engineering. Passionate about building responsive, user-friendly web applications and currently interning as a Full Stack Developer at Bridgeon.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="#projects" className={styles.cta}>
              View My Work
            </Link>
            <a href="/sanjay_atholi_resume.pdf" download="Sanjay Atholi Resume.pdf" className={styles.secondaryBtn}>
              Download Resume
            </a>
          </div>
        </div>
        
        <div className={`${styles.profileWrapper} delay-2`}>
          <div className={styles.decorativeRing}></div>
          <div className={styles.plusDecor}>+++</div>
          <div className={styles.slashDecor}>/////</div>
          <div className={styles.profileImageContainer}>
            <Image 
              src="/profile.jpg" 
              alt="Sanjay A. - Full Stack Developer" 
              fill
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
