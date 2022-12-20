import { getAuth } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { addAlbum } from '../../firebase/album';
import { app } from '../../firebase/firebaseApp';
import { Album } from '../../types/schema';
import styles from './NewAlbum.module.css';

const NewAlbum = () => {
  const [name, setName] = useState('');
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [artist, setArtist] = useState('');
  const [musicType, setMusicType] = useState('');

  const handleSubmit = async () => {
    let date = releaseDate;
    date.setHours(12);
    date.setDate(date.getDate() + 1);
    setReleaseDate(date);
    const album: Album = {
      name: name,
      releaseDate: Timestamp.fromDate(releaseDate),
      artist: artist,
      music_type: musicType,
    };
    await addAlbum(album);
  };

  return (
    <>
      <Navigation />
      <div className={styles.addForm}>
        <h2>Have an album not on this site? Add it here.</h2>
        <input
          className={styles.formElement}
          type="text"
          name="name"
          value={name}
          placeholder="Album Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className={styles.formElement}
          type="text"
          name="artist"
          value={artist}
          placeholder="Artist"
          onChange={(event) => setArtist(event.target.value)}
        />
        <input
          className={styles.formElement}
          type="date"
          name="date"
          value={releaseDate.toISOString().substring(0, 10)}
          onChange={(event) => {
            event.target.valueAsDate != null
              ? setReleaseDate(event.target.valueAsDate)
              : null;
          }}
        />
        <input
          className={styles.formElement}
          type="text"
          name="music_type"
          value={musicType}
          placeholder="LP, EP, or Single"
          onChange={(event) => setMusicType(event.target.value)}
        />
        <button className={styles.formElement} onClick={() => handleSubmit()}>
          Add
        </button>
      </div>
    </>
  );
};

/*
    name: string;
    releaseDate: Timestamp;
    artist: string;
    music_type: string;
*/
export default NewAlbum;
