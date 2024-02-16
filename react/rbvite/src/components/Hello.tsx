import { PropsWithChildren } from 'react';

type Props = {
  name: string;
  age: number;
  plusCount: () => void;
};

const Hello = ({
  name,
  age,
  plusCount,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div style={{ border: '1px solid green' }}>
      <h1>
        Hello, {name}, ({age})
      </h1>
      {children}
      <button onClick={plusCount}>plus Age</button>
    </div>
  );
};

export default Hello;
