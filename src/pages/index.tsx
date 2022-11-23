import { Timestamp } from 'firebase/firestore';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AlbumItem } from '../components/AlbumItem/AlbumItem';
import { AlbumList } from '../components/AlbumList/AlbumList';
import { Navigation } from '../components/Navigation/Navigation';
import { getAllAlbums } from '../firebase/album';
import styles from '../styles/Home.module.css';
import { Album } from '../types/schema';

export default function Home() {
  const [albums, setAlbums] = useState<Album[]>([]);
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
      <Navigation />
      <AlbumList albums={albums} />
    </div>
  );
}
