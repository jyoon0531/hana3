import { useRef } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { useCounter } from './contexts/counter-context';
import { SessionProvider } from './contexts/session-context';
// import { Hello } from './components/Hello';

function App() {
  const { count, plusCount } = useCounter();

  // DOM을 참조, 직접 DOM에 접근할 때
  const titleRef = useRef<HTMLHeadingElement>(null);
  // const inpRef = useRef<HTMLInputElement>(null);
  // const logoutBtnRef = createRef<HTMLButtonElement>();
  const myHandlerRef = useRef<ItemHandler>(null);

  // style atttr 에 객체로 전달 <h1 style={{backgroundColor: 'red'}}></h1>

  // const addItem = (id: number, name: string, price: number) => {
  //   setSession({
  //     ...session,
  //     cart: [...session.cart, { id, name, price }],
  //   });
  // };

  return (
    <>
      <h1 ref={titleRef}>Vite + React</h1>
      {/* <input type='text' ref={inpRef} /> */}
      <button onClick={() => myHandlerRef.current?.signOut()}>
        App-Sign-Out
      </button>

      <button onClick={() => myHandlerRef.current?.notify('테스트 메시지')}>
        Message
      </button>

      <button onClick={() => myHandlerRef.current?.removeItem()}>Rm2</button>
      <SessionProvider>
        <My ref={myHandlerRef} />
        <Hello>children</Hello>
      </SessionProvider>
      <div className='card'>
        <button onClick={plusCount}>count is {count}</button>
      </div>

      <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button>
    </>
  );
}

export default App;
