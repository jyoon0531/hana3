import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { PhotoType, getPhotos } from '@/lib/album-utils';

export default async function PhotosPage() {
  const photos: PhotoType[] = await getPhotos(1);
  // console.log('🚀 ~ PhotosPage ~ photos:', photos);
  const setAlbumId = async (formData: FormData) => {
    'use server';
    const albumId = formData.get('albumId');
    // console.log('🚀 ~ PhotosPage ~ albumId:', albumId);
    redirect(`/photos?albumId=${albumId}`);
  };

  return (
    <>
      <form action={setAlbumId}>
        <input
          className='m-3'
          type='number'
          name='albumId'
          placeholder='albumId....'
        />
      </form>
      <div className='grid grid-cols-5 gap-2'>
        {photos.map(({ id, thumbnailUrl, title }) => {
          return (
            <div key={id}>
              <Link href={`/photos/${id}`}>
                <Image
                  src={thumbnailUrl}
                  alt={title}
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
