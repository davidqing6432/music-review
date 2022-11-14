import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AlbumList } from '../components/AlbumList/AlbumList';
import { getAllAlbums } from '../firebase/album';
import styles from '../styles/Home.module.css';
import { Album } from '../types/schema';

export default function Home() {
  const date = new Date();
  const defaultAlbum: Album = {
    id: '',
    name: '',
    releaseDate: '',
  };
  const [albums, setAlbums] = useState([defaultAlbum]);
  const handleGetAllAlbums = async () => {
    const allAlbums = await getAllAlbums();
    setAlbums(allAlbums);
  };

  useEffect(() => {
    handleGetAllAlbums();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Music Review</title>
        <meta name="description" content="Save a list of your music ratings!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AlbumList albums={albums} />
    </div>
  );
}
