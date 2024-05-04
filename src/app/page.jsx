import styles from './homepage.module.css';
import Featured from '@/components/featured/Featured';
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
