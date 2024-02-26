import { useRef } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { SessionProvider } from './contexts/session-context';
import Posts from './components/Posts';
import { Nav } from './Nav';
import { Route, Routes } from 'react-router-dom';
import { Login, LoginHandler } from './components/Login';
import { Home } from './components/Home';
import { NotFound } from './NotFound';
import Sample from './components/Sample';
// import DeferTrans from './components/DeferTrans';
// import MouseCapture from './components/MouseCapture';
// import Effect from './components/Effect';
// import { Hello } from './components/Hello';

function App() {
  // DOM을 참조, 직접 DOM에 접근할 때
  // const titleRef = useRef<HTMLHeadingElement>(null);
  // const inpRef = useRef<HTMLInputElement>(null);
  // const logoutBtnRef = createRef<HTMLButtonElement>();
  const myHandlerRef = useRef<ItemHandler>(null);
  const loginHandlerRef = useRef<LoginHandler>(null);
  // style atttr 에 객체로 전달 <h1 style={{backgroundColor: 'red'}}></h1>

  return (
    <>
      <SessionProvider
        myHandlerRef={myHandlerRef}
        loginHandlerRef={loginHandlerRef}
      >
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login ref={loginHandlerRef} />} />
          <Route path='/my' element={<My ref={myHandlerRef} />} />
          <Route path='/posts' element={<Posts />} />
          {/* <Route path='/items' element={<Items />} /> */}
          {/* <Route path='/items/:id' element={<Item />} /> */}
          <Route path='/hello' element={<Hello />} />
          <Route path='/sample' element={<Sample />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SessionProvider>
      {/* <Effect /> */}
      {/* <MouseCapture /> */}
      {/* <h1 ref={titleRef}>Vite + React</h1> */}
      {/* <input type='text' ref={inpRef} /> */}

      {/* <DeferTrans /> */}

      {/* <button onClick={() => myHandlerRef.current?.signOut()}>
        App-Sign-Out
      </button> */}

      {/* <button onClick={() => myHandlerRef.current?.notify('테스트 메시지')}>
        Message
      </button> */}

      {/* <button onClick={() => myHandlerRef.current?.removeItem()}>Rm2</button> */}

      {/* <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button> */}
    </>
  );
}

export default App;
