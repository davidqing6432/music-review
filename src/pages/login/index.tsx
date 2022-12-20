import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { signInEmailPass } from '../../firebase/auth';
import styles from './Login.module.css';

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
        <h2>Log into SoundOff</h2>
        <input
          className={styles.input}
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className={styles.input}
          value={pass}
          placeholder="Password"
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
