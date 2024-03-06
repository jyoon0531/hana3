import Image from 'next/image';
import { getPhoto } from '@/lib/album-utils';

export default async function Photo({ photoId }: { photoId: number }) {
  const { url, title } = await getPhoto(photoId);
  return (
    <>
      <div>
        <Image src={url} alt={title} width={600} height={600} />
      </div>
    </>
  );
}
