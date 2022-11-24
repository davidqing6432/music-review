import { getAuth, 
    createUserWithEmailAndPassword , 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut } from "firebase/auth";
import { app } from "./firebaseApp";

export const createEmailPass = async ( email: string, password: string ): Promise<string> => {
    const auth = getAuth(app);
    let uid = "";
    console.log("used create email pass", auth.config.apiKey)
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        uid = user.uid;
        return uid;
    })
    .catch((error) => {
        console.error(error);
        throw error;
    });
    console.log("got to end of creation!")
    return uid;
}

export const signInEmailPass = async ( email: string, password: string ) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return user;
    })
    .catch((error) => {
        console.error(error);
        throw error;
    });
}

export const useSignOut = () => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        console.error(error);
        throw error;
    });
}

export const authObserver = () => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            const uid = user.uid;
        } else {
            // User is signed out
            console.log("No user signed in.");
            // ...
        }
    });
}