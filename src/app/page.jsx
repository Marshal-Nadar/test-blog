import Link from 'next/link';
import styles from './homepage.module.css';
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import Singleblog from '@/components/singleblog/Singleblog';

export default function Home({ searchParams }) {
  return (
    <div className={styles.container}>
      <Featured />
      <div className={styles.content}>
        <Singleblog />
      </div>
    </div>
  );
}
