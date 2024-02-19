import { useRef, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Hello from './components/Hello';
import My from './components/My';
// import { Hello } from './components/Hello';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession: Session = {
  loginUser: null,
  // loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);
  // DOM을 참조, 직접 DOM에 접근할 때
  const titleRef = useRef<HTMLHeadingElement>(null);

  // style atttr 에 객체로 전달 <h1 style={{backgroundColor: 'red'}}></h1>
  const plusCount = () => setCount(count + 1);
  const login = (id: number, name: string) => {
    setSession({ ...session, loginUser: { id, name } });
  };
  const logout = () => {
    setSession({ ...session, loginUser: null }); // view와 관련된 것들은 순수함수로 작성!
  };

  const removeItem = (itemId: number) => {
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)],
    });

    // Virtual-DOM의 rerender() 호출 안 함 session의 주소는 변하지 않았기 때문
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  };

  return (
    <>
      <h1 ref={titleRef}>Vite + React</h1>
      <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
      />

      <Hello name='홍길동' age={count + 30} plusCount={plusCount}>
        children
      </Hello>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
