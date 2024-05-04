import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            {/* <Image src='/logo.png' alt='lama blog' width={50} height={50} /> */}
            <h1 className={styles.logoText}>marshal dev</h1>
          </div>
          {/* <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p> */}
          <div className={styles.icons}>
            <Link
              href='mailto:marshalnadarmn18@gmail.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image src='/gmail.ico' alt='gmail' width={20} height={20} />
            </Link>
            <Link
              href='https://www.linkedin.com/in/marshal-nadar'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                src='/linkedIn2x.png'
                alt='linkedIn'
                width={20}
                height={20}
              />{' '}
            </Link>
            <Link
              href='https://www.linkedin.com/in/marshal-nadar'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                src='/facebook2x.png'
                alt='facebook'
                width={20}
                height={20}
              />
            </Link>

            <Link
              href='https://www.linkedin.com/in/marshal-nadar'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                src='/youtube2x.png'
                alt='youtube'
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className={styles.links}>
          {/* <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href='/'>Homepage</Link>
            <Link href='/'>Blog</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
          </div> */}
          {/* <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <div className={styles.taglist}>
              <Link href='/'>Coding</Link>
              <Link href='/'>Self-help</Link>
              <Link href='/'>Books</Link>
              <Link href='/'>Travel</Link>
            </div>
          </div> */}
          {/* <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Linkedin</Link>
            <Link href='/'>Youtube</Link>
          </div> */}
        </div>
      </div>
      <p className={styles.copyrights}>
        Built with ❤️ © 2024 by marshal.dev. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
