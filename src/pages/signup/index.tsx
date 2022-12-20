import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { createEmailPass } from '../../firebase/auth';
import { addUser } from '../../firebase/user';
import styles from './SignUp.module.css';
import { User } from '../../types/schema';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleSignUp = async () => {
    console.log('got to beginning of handle sign up');
    const userId = await createEmailPass(email, pass);
    const user: User = {
      email: email,
      username: username,
      reviews: [],
    };
    await addUser(userId, user);
  };

  return (
    <>
      <Navigation />
      <div className={styles.signUp}>
        <h2>Let&apos;s make your account.</h2>
        <input
          className={styles.input}
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          value={pass}
          placeholder="Password"
          onChange={(event) => setPass(event.target.value)}
        />
        <input
          className={styles.input}
          value={username}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={() => handleSignUp()}>Sign Up</button>
        <Link href="/login">
          <p>Already have an account? Log in here.</p>
        </Link>
      </div>
    </>
  );
};

export default SignUp;
