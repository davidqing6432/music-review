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
        <input
          value={email}
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={pass}
          placeholder="password"
          onChange={(event) => setPass(event.target.value)}
        />
        <button onClick={() => handleLogin()}>Log In</button>
      </div>
    </>
  );
};

export default Login;
