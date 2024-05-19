'use client';

import styles from './AdBlockNotice.module.css';

const AdBlockNotice = () => {
  console.log('fsss');
  return (
    <div className={styles.adBlockNotice}>
      <div className={styles.modalContent}>
        <div className={styles.messageContainer}>
          <h4 className={styles.messageTitle}>Adblock Detected</h4>
          <br />
          <section className={styles.modalMessage}>
            <p className={styles.messageText}>
              It appears that you are using an ad-blocking extension in your
              browser.
            </p>
            <p className={styles.messageText}>
              Our website relies on ad revenue to provide free content to our
              visitors. Please consider supporting us by disabling your ad
              blocker.
            </p>
          </section>
        </div>
        <div
          className={styles.refreshButton}
          onClick={() => window.location.reload()} // Use window.location.reload()
        >
          Refresh Page
        </div>
      </div>
    </div>
  );
};

export default AdBlockNotice;
