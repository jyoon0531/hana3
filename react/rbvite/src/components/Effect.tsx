import { useState } from 'react';

export default function Effect() {
  const [, rerender] = useState(0);

  //   console.log('*********', r);

  //   const primitive = 123;
  //   useEffect(() => {
  //     console.log('effect primitive!!!');
  //     return () => console.log('clean-up primitive');
  //   }, [primitive]);

  return (
    <>
      <input type='text' onChange={() => rerender((p) => p + 1)} />
      <button>Show Effect</button>
    </>
  );
}
