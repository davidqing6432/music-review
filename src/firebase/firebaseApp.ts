import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

/*const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseUrl: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};*/
const firebaseConfig = {
  apiKey: "AIzaSyDOw50kR7-mTVYuGSl8Qy4kW1wZIAilL1E",
  authDomain: "davidqingwebsite.firebaseapp.com",
  databaseURL: "https://davidqingwebsite-default-rtdb.firebaseio.com",
  projectId: "davidqingwebsite",
  storageBucket: "davidqingwebsite.appspot.com",
  messagingSenderId: "104360634940",
  appId: "1:104360634940:web:a682ddcec2e93c6a393139"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }