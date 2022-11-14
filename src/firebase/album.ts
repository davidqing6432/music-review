import { collection, DocumentData, getDocs } from "firebase/firestore";
import { Album } from "../types/schema";
import { db } from "./firebaseApp";

const collReference = collection(db, "albums")

export const getAllAlbums = async () => {
    const promises: Promise<Album>[] = [];
    const docData = await getDocs(collReference);
    docData.forEach((album) => {
        promises.push(parseAlbum(album))
    })
    const albums = await Promise.all(promises);
    console.log("All Albums:", albums)
    return albums;
}

const parseAlbum = async (doc:DocumentData): Promise<Album> => {
    const album_id = doc.id.toString();
    const data = doc.data();
    const album = {
        id: album_id,
        name: data.name,
        releaseDate: data.releaseDate,
        // rating: data.number,
        // ratingDate: data.ratingDate,
        // notes: data.notes,
    } as Album
    return album
}