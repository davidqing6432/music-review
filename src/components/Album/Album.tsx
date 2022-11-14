import styles from "./Album.module.css"

type AlbumProps = {
    name: string;
    rating: number;
    ratingDate: Date;
    releaseDate: Date;
    notes: string;
}

export const Album = (props:AlbumProps) => {
    return (
        <div className={styles["album-container"]}>
            <text>{props.name}</text>
            <text>{props.rating}</text>
            <text>{props.ratingDate.toUTCString()}</text>
            <text>{props.releaseDate.toUTCString()}</text>
            <text>{props.notes}</text>
        </div>
    );
}