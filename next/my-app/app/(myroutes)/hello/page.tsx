// localhost:3000/hello ==> localhost:3000/docs/hello (basePath:'/docs')
// a.com/hello
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hello() {
  return (
    <>
      <h1 className='text-lg'>Hello Page</h1>
      <Link href='/'>Go Home</Link>
      <Button variant='default' size='sm'>
        BTN
      </Button>
    </>
  );
}
