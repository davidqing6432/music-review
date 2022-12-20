import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AlbumList } from '../components/AlbumList/AlbumList';
import { Navigation } from '../components/Navigation/Navigation';
import { getAllAlbums } from '../firebase/album';
import { Album } from '../types/schema';

const Home = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const handleGetAllAlbums = async () => {
    const allAlbums = await getAllAlbums();
    setAlbums(allAlbums);
  };

  useEffect(() => {
    handleGetAllAlbums();
  }, []);

  return (
    <>
      <Head>
        <title>SoundOff</title>
        <meta name="description" content="Save a list of your music ratings!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <AlbumList albums={albums} />
    </>
  );
};

export default Home;
