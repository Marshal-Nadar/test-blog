'use client';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

import styles from './AdBlockNotice.module.css';

const AdBlockNotice = () => {
  const { push } = useRouter();

  const [adBlockEnabled, setAdBlockEnabled] = useState(false);

  useEffect(() => {
    const googleAdUrl =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

    const detectAdBlock = async () => {
      try {
        await fetch(new Request(googleAdUrl));
      } catch (error) {
        setAdBlockEnabled(true);
      }
    };

    detectAdBlock();
  }, []); //

  console.log('adBlockEnabled', adBlockEnabled);

  if (adBlockEnabled) {
    return <h1>dfdf</h1>;
  } else {
    return <h1>div</h1>;
  }
  // if (adBlockEnabled) {
  //   console.log('fsss');
  //   return (
  //     <div className={styles.adBlockNotice}>
  //       <div className={styles.modalContent}>
  //         <div className={styles.messageContainer}>
  //           <h4 className={styles.messageTitle}>Adblock Detected</h4>
  //           <p className={styles.messageText}>
  //             It appears that you are using an ad-blocking extension in your
  //             browser. Our website relies on ad revenue to provide free
  //             content to our visitors. Please consider supporting us by
  //             disabling your ad blocker.
  //           </p>
  //         </div>
  //         <button
  //           className={styles.refreshButton}
  //           onClick={() => window.location.reload()} // Use window.location.reload()
  //         >
  //           Refresh Page
  //         </button>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return <h1>kdfdk</h1>;
  // }
};

export default AdBlockNotice;
