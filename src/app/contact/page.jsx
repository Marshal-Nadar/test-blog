import React from 'react';
import styles from './contact.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <section className={styles.container}>
      <aside className={styles.weare}>
        <h1 className={styles.weareText}>We&apos;re here</h1>
        <h2>our door is always open for a good cup of coffee.</h2>
      </aside>
      <aside className={styles.letstalk}>
        <h1 className={styles.weareText}>Let&apos;s talk.</h1>
        <h2>Share your excitement with us.</h2>
        <h3>marshal.dev@gmail.com</h3>
      </aside>
    </section>
  );
};

export default About;
