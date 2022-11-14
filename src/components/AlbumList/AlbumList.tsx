import { Album } from '../../types/schema';
import styles from './AlbumList.module.css';
import { AlbumItem } from '../AlbumItem/AlbumItem';

type AlbumListProps = {
  albums: Album[];
};

//TODO: Fix rating, ratingDate, and notes
export const AlbumList = (props: AlbumListProps) => {
  return (
    <div>
      {props.albums.map((album) => {
        return (
          <AlbumItem
            key={album.id}
            id={album.id}
            name={album.name}
            releaseDate={album.releaseDate.toString()}
            // ratingDate={album.ratingDate}
            // notes={''}
            // rating={album.rating}
          />
        );
      })}
    </div>
  );
};
