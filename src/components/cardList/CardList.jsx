import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';
import { data } from '../../db/testdb.js';

// const getData = async (page, cat) => {
//   const res = await fetch(
//     `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CardList = async ({ page, cat }) => {
  // const { posts, count } = await getData(page, cat);
  console.log('cat', cat);
  const filteredData = data.filter(item => item.category === cat);
  console.log('filteredData', filteredData, cat);

  // const POST_PER_PAGE = 2;

  // const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {/* <h1>{filteredData[0]?.author}</h1>
        <h1>{filteredData[0]?.category}</h1> */}
        {/* <Card item={filteredData} key={filteredData.id} /> */}
        {filteredData.map(filteredData => {
          return (
            <>
              <Card item={filteredData} key={filteredData.id} />
            </>
          );
        })}

        {/* {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))} */}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default CardList;
