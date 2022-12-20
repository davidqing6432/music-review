import { Timestamp } from "firebase/firestore";

export type Album = {
    id?: string;
    name: string;
    releaseDate: Timestamp;
    artist: string;
    music_type: string;
}

export type User = {
    id?: string;
    email: string;
    username: string;
    reviews: Review[];
}

export type Review = {
    album_id: string;
    notes: string;
    rating: number;
    rating_date: Timestamp;
}