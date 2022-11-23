import Link from 'next/link';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>
          <Link href="/">
            <h1>Music Review</h1>
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link href="/login">
            <p>Login</p>
          </Link>
          <a href="/signup">
            <p>Signup</p>
          </a>
        </div>
      </div>
      <div className={styles.spacer} />
    </>
  );
};
