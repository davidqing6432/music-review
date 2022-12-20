import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    setIsAuthorized(true);
  }, []);
  return isAuthorized ? <UnauthorizedNavbar /> : <AuthorizedNavbar />;
};

const UnauthorizedNavbar = () => {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>
          <Link href="/">
            <h1>SoundOff</h1>
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link href="/newalbum">
            <p>New Album</p>
          </Link>
          <Link href="/login">
            <p>Login</p>
          </Link>
          <Link href="/signup">
            <p>Signup</p>
          </Link>
        </div>
      </div>
      <div className={styles.spacer} />
    </>
  );
};

const AuthorizedNavbar = () => {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navLeft}>
          <Link href="/">
            <h1>SoundOff</h1>
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link href="/newalbum">
            <p>Add an album</p>
          </Link>
        </div>
      </div>
      <div className={styles.spacer} />
    </>
  );
};
