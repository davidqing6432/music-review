import { Timestamp } from 'firebase/firestore';
import styles from './AlbumItem.module.css';

type AlbumProps = {
  name: string;
  releaseDate: Timestamp;
  artist: string;
  music_type: string;
  // TODO: Get rating, ratingDate, and notes to work properly
  //rating: number;
  //ratingDate: Date;
  //notes: string;
};

export const AlbumItem = (props: AlbumProps) => {
  const date = props.releaseDate.toDate();
  return (
    <div className={styles.album_container}>
      <p>{props.name}</p>
      <p>{props.artist}</p>
      <p>{date.toDateString()}</p>
      <p>{props.music_type}</p>
      {/* 
      <text>{'Rating: ' + rating}</text>
      <text>{props.ratingDate.toUTCString()}</text>
      <text>{props.notes}</text> 
      */}
    </div>
  );
};
