import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navLeft}>
        <a href="../../pages/index.tsx">
          <h1>Music Review</h1>
        </a>
      </div>
      <div className={styles.navRight}>
        <a href="">
          <p>Login</p>
        </a>
        <a href="">
          <p>Signup</p>
        </a>
      </div>
    </div>
  );
};
