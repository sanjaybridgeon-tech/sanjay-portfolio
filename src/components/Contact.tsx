"use client";

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './components.module.css';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const form = useRef<HTMLFormElement>(null);
  const revealRef = useReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    try {
      const result = await emailjs.sendForm(
        'sanjaysr', 
        'template_k55tftn', 
        form.current, 
        'gINtddR94UDGDvROR'
      );

      console.log("EmailJS Result:", result.text);
      setStatus("sent");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section id="contact">
      <div className={`${styles.contactGrid} reveal`} ref={revealRef}>
        <div className={`${styles.contactInfo} delay-1`}>
          <div>
            <h3 className={`${styles.heroSub} originate`}>Open for Opportunities</h3>
            <p className={styles.heroDesc}>
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always interested in new challenges and collaborations.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p className={styles.label}>Email Me</p>
              <a href="mailto:sanjaysr2902@gmail.com" className={styles.cardTitle} style={{ fontSize: '1.5rem' }}>
                sanjaysr2902@gmail.com
              </a>
            </div>
            <div>
              <p className={styles.label}>Phone Number</p>
              <a href="tel:+917510782632" className={styles.cardTitle} style={{ fontSize: '1.5rem' }}>
                +91 7510782632
              </a>
            </div>
            <div>
              <p className={styles.label}>My Location</p>
              <p className={styles.cardTitle} style={{ fontSize: '1.5rem' }}>Malappuram, Kerala, India</p>
            </div>
          </div>
        </div>

        <div className={`${styles.boxedCard} delay-2`}>
          {status === "sent" ? (
            <div className={styles.contactForm} style={{ justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '300px' }}>
              <div className={styles.successMsg}>
                <span style={{ fontSize: '3rem' }}>✓</span>
                <h3 className={styles.cardTitle}>Message Sent!</h3>
              </div>
              <p className={styles.cardMeta}>Thank you for reaching out. I'll get back to you soon.</p>
              <button 
                className={styles.submitBtn} 
                style={{ marginTop: '20px' }}
                onClick={() => setStatus("idle")}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form ref={form} className={styles.contactForm} onSubmit={handleSubmit} method="POST">
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" name="name" className={styles.input} placeholder="John Doe" required />
              </div>
              
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" name="email" className={styles.input} placeholder="john@example.com" required />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Subject</label>
                <input type="text" name="subject" className={styles.input} placeholder="Project Inquiry" required />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Message</label>
                <textarea name="message" className={styles.textarea} placeholder="Tell me about your project..." required></textarea>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
