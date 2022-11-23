import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { createEmailPass } from '../firebase/auth';
import { addUser } from '../firebase/user';
import styles from '../styles/Signup.module.css';
import { User } from '../types/schema';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleSignUp = async () => {
    if (email == '' || pass == '' || username == '') {
      console.log('invalid input');
      return;
    }
    console.log('got to beginning of handle sign up');
    const userId = await createEmailPass(email, pass);
    const user: User = {
      email: email,
      username: username,
      reviews: new Map<string, Map<string, string | number | Timestamp>>(),
    };
    await addUser(userId, user);
  };

  return (
    <>
      <Navigation />
      <div className={styles.SignUp}>
        <h2>Lets make your account.</h2>
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
        <input
          value={username}
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={() => handleSignUp()}>Sign Up</button>
      </div>
    </>
  );
};

export default SignUp;
