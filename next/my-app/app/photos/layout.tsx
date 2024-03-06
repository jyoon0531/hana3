import Link from 'next/link';
import { ReactNode } from 'react';

export default async function PhotosLayout({
  children,
  photo,
}: {
  children: ReactNode;
  photo: ReactNode;
}) {
  return (
    <>
      <div>
        <Link href='/photos/photo'>Photo</Link>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-lg font-bold'>Photos</h1>
        <div className='border border-dotted'>{children}</div>
      </div>
      <div className='border border-dotted border-red-500'>{photo}</div>
    </>
  );
}
