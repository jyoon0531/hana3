import { Ref, forwardRef, useRef } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { useCounter } from './contexts/counter-context';
import { SessionProvider } from './contexts/session-context';
import Posts from './components/Posts';
// import MouseCapture from './components/MouseCapture';
// import Effect from './components/Effect';
// import { Hello } from './components/Hello';

const H5 = forwardRef(({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
  return (
    <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
      <h5>H55555566-{ss}</h5>
      <input type='text' ref={ref} placeholder='child-input...' />
    </div>
  );
});
H5.displayName = 'H5';

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
      {/* <Effect /> */}
      {/* <MouseCapture /> */}
      <h1 ref={titleRef}>Vite + React</h1>
      {/* <input type='text' ref={inpRef} /> */}

      <SessionProvider myHandlerRef={myHandlerRef}>
        <Posts />
        <My ref={myHandlerRef} />
        <Hello>children</Hello>
      </SessionProvider>

      <button onClick={() => myHandlerRef.current?.signOut()}>
        App-Sign-Out
      </button>

      <button onClick={() => myHandlerRef.current?.notify('테스트 메시지')}>
        Message
      </button>

      <button onClick={() => myHandlerRef.current?.removeItem()}>Rm2</button>

      <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button>

      <div className='card'>
        <button onClick={plusCount}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
