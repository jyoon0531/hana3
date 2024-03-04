import Link from 'next/link';

export default function ParalellLayout({
  children,
  profile,
  login,
}: {
  children: React.ReactNode;
  profile: React.ReactNode;
  login: React.ReactNode;
}) {
  return (
    <>
      <h1>ParalellLayout</h1>
      <div className='border border-dotted border-red-500 flex justify-around p-5'>
        <div className='border'>{profile}</div>
        <div className='border'>{login}</div>
      </div>
      {children}
      <div className='flex justify-around'>
        <Link href='/paralell/aaa'>Login/AAA</Link>
        <Link href='/paralell/bbb'>Profile/BBB</Link>
      </div>
    </>
  );
}
