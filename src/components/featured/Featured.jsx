import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, marshal dev here!</b> Discover my stories and creative ideas.
        {/* <hr className={styles.hr} /> */}
      </h1>
    </div>
  );
};

export default Featured;
