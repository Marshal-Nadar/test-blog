import Menu from '@/components/Menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';
import { data } from '../../../db/testdb.js';
const getData = async slug => {
  console.log(slug);
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  // console.log('datadata:', data);
  const filteredData = data.filter(item => item.slug === slug);
  console.log('datadata:', filteredData[0]);

  // const data = await getData(slug);

  return (
    <>
      {/* <h1>{slug}</h1> */}
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{filteredData[0]?.title}</h1>
            <div className={styles.user}>
              {filteredData[0]?.images && (
                <div className={styles.userImageContainer}>
                  <Image
                    src={filteredData[0]?.images}
                    alt=''
                    fill
                    className={styles.avatar}
                  />
                </div>
              )}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>
                  {filteredData[0]?.author}
                </span>
                <span className={styles.date}>01.01.2024</span>
              </div>
            </div>
          </div>
          {filteredData[0]?.images && (
            <div className={styles.imageContainer}>
              <Image
                src={filteredData[0]?.images}
                alt=''
                fill
                className={styles.image}
              />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: filteredData[0]?.content }}
            />
            <div className={styles.comment}>
              {/* <Comments postSlug={slug} /> */}
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
