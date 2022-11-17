import { Timestamp } from "firebase/firestore";

export type Album = {
    id?: string;
    name: string;
    releaseDate: Timestamp;
    artist: string;
    music_type: string;
}