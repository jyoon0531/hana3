import { PropsWithChildren } from 'react';
import { useCounter } from '../contexts/counter-context';
import { useSession } from '../contexts/session-context';

type Props = {
  // children: React.ReactNode;
};

// const Hello = ({
//   name,
//   age,
//   plusCount,
//   children,
// }: PropsWithChildren<Props>) => {    // PropsWithChildren은 Props에서 children을 쓰기 싫을 때
// const Hello: React.FC<Props> = ({name, age, plusCount, children})=>{
const Hello = ({ children }: PropsWithChildren<Props>) => {
  const { count: age, plusCount } = useCounter();
  const { session } = useSession();
  const name = session.loginUser?.name || 'Guest';
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
