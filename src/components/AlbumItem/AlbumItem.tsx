import { Timestamp } from 'firebase/firestore';
import styles from './AlbumItem.module.css';

type AlbumProps = {
  id: string;
  name: string;
  releaseDate: Timestamp;
  // TODO: Get rating, ratingDate, and notes to work properly
  //rating: number;
  //ratingDate: Date;
  //notes: string;
};

export const AlbumItem = (props: AlbumProps) => {
  return (
    <div className={styles['album-container']}>
      <h1>{props.name}</h1>
      <h1>{props.releaseDate.toString()}</h1>
      {/* 
      <text>{'Rating: ' + rating}</text>
      <text>{props.ratingDate.toUTCString()}</text>
      <text>{props.notes}</text> 
      */}
    </div>
  );
};
