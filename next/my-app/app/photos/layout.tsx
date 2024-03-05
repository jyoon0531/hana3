import Link from 'next/link';
import { ReactNode } from 'react';

const PHOTOO_URL = 'https://jsonplaceholder.typicode.com/';

const getPhotos = async (albumId = 1) => {
  const res = await fetch(`${PHOTOO_URL}photos?albumId=${albumId}`);
  return res.json();
};

export default async function PhotosLayout({
  children,
  photo,
}: {
  children: ReactNode;
  photo: ReactNode;
}) {
  const photos = await getPhotos(1);
  console.log(photos);
  return (
    <>
      <div>
        <Link href='/photos/photo'>Photo</Link>
      </div>
      <div className='flex justify-around'>
        <div className='border border-dotted'>{children}</div>
        <div className='border border-dotted border-red-500'>{photo}</div>
      </div>
    </>
  );
}
