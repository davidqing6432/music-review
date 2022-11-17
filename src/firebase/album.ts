import { addDoc, collection, DocumentData, getDocs } from "firebase/firestore";
import { isStringObject } from "util/types";
import { Album } from "../types/schema";
import { db } from "./firebaseApp";

const collReference = collection(db, "albums")

export const getAllAlbums = async () => {
    const promises: Promise<Album>[] = [];
    const docData = await getDocs(collReference);
    docData.forEach((album) => {
        promises.push(parseAlbum(album))
    });
    const albums = await Promise.all(promises);
    return albums;
}

export const addAlbum = async (album: Album) => {
    await addDoc(collReference, album)
}

const parseAlbum = async (doc:DocumentData): Promise<Album> => {
    const album_id = doc.id.toString();
    const data = doc.data();
    const album = {
        id: album_id,
        name: data.name,
        releaseDate: data.releaseDate,
        artist: data.artist,
        music_type: data.music_type,
        // rating: data.number,
        // ratingDate: data.ratingDate,
        // notes: data.notes,
    } as Album
    return album
}