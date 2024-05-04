import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/happy-man.jpg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            {`Welcome to my corner of the digital world!`}
          </h1>
          <p className={styles.postDesc}>
            {`I'm not just your average software developer — I'm a digital explorer, a code wizard, and a master of turning caffeine into code! 🚀 `}
          </p>
          <p className={styles.postDesc}>
            {`But life as a developer isn't all about squashing bugs. When I'm not hunting down pesky bugs, you'll catch me exploring the city, gardening in my backyard. I'm great at juggling tasks and having fun!
`}
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
