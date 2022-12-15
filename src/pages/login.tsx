import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { signInEmailPass } from '../firebase/auth';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    signInEmailPass(email, pass);
  };

  return (
    <>
      <Navigation />
      <div className={styles.Login}>
        <h2>Log into Music Review</h2>
        <label htmlFor="email"></label>
        <input
          className={styles.input}
          id="email"
          value={email}
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className={styles.input}
          value={pass}
          placeholder="password"
          onChange={(event) => setPass(event.target.value)}
        />
        <button onClick={() => handleLogin()}>Log In</button>
        <Link href="/signup">
          <p>Don&apos;t have an account yet? Sign up here.</p>
        </Link>
      </div>
    </>
  );
};

export default Login;
