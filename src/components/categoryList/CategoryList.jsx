import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { data } from '../../db/testdb.js';

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList = async () => {
  // const data = await getData();

  console.log('datadatadata', data);
  function formatDate(epochTime) {
    const date = new Date(epochTime * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map(item => {
          return (
            <>
              {' '}
              <div className={styles.card}>
                <Image
                  src='/Reactjs.jpg'
                  width={400} // Assuming 1rem = 16px, 7rem = 7 * 16px = 112px
                  height={280} // Assuming 1rem = 16px, 4rem = 4 * 16px = 64px
                  alt='dfd'
                  className={styles.imgCover}
                />
                <Link
                  href={`/blog?cat=${item.category}`}
                  // className={`${styles.category} ${styles[item.slug]}`}
                  key={item._id}
                  className={styles.cardBox}
                >
                  <div>
                    <span>{formatDate(item.created_on)} - </span>
                    <span className={styles.textCapitalize}>
                      {item.category}
                    </span>
                  </div>
                  <h2 className={styles.categoryTitle}>{item.title}</h2>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                      __html: item.subheading,
                    }}
                  />
                  {/* <span className={styles.subheading}>{item.subheading}</span> */}

                  <div className={styles.link}>
                    <Link href={`/posts/${item.slug}`}>Read More</Link>
                  </div>
                </Link>{' '}
              </div>
            </>
          );
        })}
        {/* {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default CategoryList;
