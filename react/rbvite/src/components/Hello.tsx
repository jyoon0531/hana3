// import { PropsWithChildren } from 'react';

type Props = {
  name: string;
  age: number;
  plusCount: () => void;
  children: React.ReactNode;
};

// const Hello = ({
//   name,
//   age,
//   plusCount,
//   children,
// }: PropsWithChildren<Props>) => {    // PropsWithChildren은 Props에서 children을 쓰기 싫을 때
// const Hello: React.FC<Props> = ({name, age, plusCount, children})=>{
const Hello = ({ name, age, plusCount, children }: Props) => {
  age = age + 1;
  // console.log('age>>>>', age);
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount}>Plus Age</button>
      <div>{children}</div>
    </div>
  );
};

export default Hello;
