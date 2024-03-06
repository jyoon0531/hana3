'use client';

import { Button } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { useState } from 'react';

// import DateTime from '../ui/DateTime';

export default function About() {
  const [name, setName] = useState('');

  return (
    <div>
      <span className={twMerge('px-3 py-1 bg-red-300 p-5')}>
        This is about page!
      </span>
      <strong className='text-primary bg-warning'>
        {process.env.customKey}
      </strong>
      <hr />
      <Link href='/csr'>CSR</Link>
      {/* <div className='text-xs text-red-400'>
        <DateTime />
      </div> */}

      <span>Name: {name}</span>
      <Button onClick={() => setName('!!!')} variant='outline' size='lg'>
        BTN1
      </Button>

      <Button disabled={!!name} variant='outline' size='lg'>
        BTN2
      </Button>
    </div>
  );
}
