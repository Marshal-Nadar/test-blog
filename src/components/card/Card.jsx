import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = ({ key, item }) => {
  console.log('itemitemitem:', item);
  // const { item } = item;
  return (
    <div className={styles.container} key={key}>
      {item.images && (
        <div className={styles.imageContainer}>
          <Image src={item.images} alt='' fill className={styles.image} />
        </div>
      )}

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.created_on} - </span>
          <span className={styles.category}>{item.slug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.heading}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          className={styles.desc}
          // dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
