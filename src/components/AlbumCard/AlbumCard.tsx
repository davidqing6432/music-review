import { Timestamp } from 'firebase/firestore';
import styles from './AlbumCard.module.css';

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

const AlbumCard = (props: AlbumProps) => {
  const date = props.releaseDate.toDate();
  return (
    <div className={styles.albumCard}>
      <p>{props.name}</p>
      <p>{props.artist}</p>
      <p>{date.toDateString()}</p>
      <p>{props.music_type}</p>
    </div>
  );
};

export default AlbumCard;
