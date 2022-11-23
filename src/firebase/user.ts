import  { db } from "./firebaseApp";
import  { collection, getDoc, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { User } from "../types/schema";

const userCollection = collection(db, "users");

export const getUser = async (id: string) => {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    return await parseUser(docSnap);
}

export const getAllUsers = async () => {
    const promises: Promise<User>[] = [];
    const docSnap = await getDocs(userCollection);
    docSnap.forEach((user) => {
        promises.push(parseUser(user))
    })
    const users = await Promise.all(promises);
    return users;
}

export const addUser = async (userId: string, user: User) => {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, user)
    .catch(error => {
        console.error(error);
    })
}

export const deleteUser = async (userID: string) => {
    const docRef = doc(db, "users", userID);
    await deleteDoc(docRef)
}

const parseUser = async (doc: any) => {
    const user_id = doc.id.toString(); 
    const data = doc.data();
    const user = {
        id: user_id,
        email: data.email,
        username: data.username,
        reviews: data.reviews,
    } as User;
    return user;
}