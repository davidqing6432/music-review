import { Timestamp } from 'firebase/firestore';
import styles from './AlbumItem.module.css';

type AlbumProps = {
  name: string;
  releaseDate: Timestamp;
  artist: string;
  // TODO: Get rating, ratingDate, and notes to work properly
  //rating: number;
  //ratingDate: Date;
  //notes: string;
};

export const AlbumItem = (props: AlbumProps) => {
  const date = props.releaseDate.toDate();
  return (
    <div className={styles.album_container}>
      <h1>{props.name}</h1>
      <h1>{props.artist}</h1>
      <h1>{date.toDateString()}</h1>
      {/* 
      <text>{'Rating: ' + rating}</text>
      <text>{props.ratingDate.toUTCString()}</text>
      <text>{props.notes}</text> 
      */}
    </div>
  );
};
