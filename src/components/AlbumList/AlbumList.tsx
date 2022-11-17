import { Album } from '../../types/schema';
import styles from './AlbumList.module.css';
import { AlbumItem } from '../AlbumItem/AlbumItem';
import { addSyntheticTrailingComment, isAsteriskToken } from 'typescript';
import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { addAlbum } from '../../firebase/album';
import { type } from 'os';

type AlbumListProps = {
  albums: Album[];
};

//TODO: Fix rating, ratingDate, and notes
export const AlbumList = (props: AlbumListProps) => {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const now = new Date();
  const [date, setDate] = useState(now);
  const [music_type, setMusicType] = useState('');
  const handleAddNew = () => {
    if (!adding) {
      setAdding(!adding);
    }
  };
  const handleSubmit = async () => {
    let releaseDate = date;
    releaseDate.setHours(12);
    releaseDate.setDate(releaseDate.getDate() + 1);
    setDate(date);
    const album: Album = {
      name: name,
      releaseDate: Timestamp.fromDate(releaseDate),
      artist: artist,
      music_type: music_type,
    };
    await addAlbum(album);
  };

  return (
    <div className={styles.AlbumList}>
      {props.albums.map((album) => {
        return (
          <AlbumItem
            key={album.id}
            name={album.name}
            artist={album.artist}
            releaseDate={album.releaseDate}
            music_type={album.music_type}
            // ratingDate={album.ratingDate}
            // notes={''}
            // rating={album.rating}
          />
        );
      })}
      <div className={styles.addItemWrapper} onClick={() => handleAddNew()}>
        {adding ? (
          <div className={styles.addForm}>
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
              value={date.toISOString().substring(0, 10)}
              onChange={(event) => {
                event.target.valueAsDate != null
                  ? setDate(event.target.valueAsDate)
                  : null;
              }}
            />
            <input
              className={styles.formElement}
              type="text"
              name="music_type"
              value={music_type}
              placeholder="LP, EP, or Single"
              onChange={(event) => setMusicType(event.target.value)}
            />
            <hr />
            <button
              className={styles.formElement}
              onClick={() => handleSubmit()}
            >
              Add
            </button>
          </div>
        ) : (
          <div className={styles.addItem}>
            <h1>+</h1>
          </div>
        )}
      </div>
    </div>
  );
};
