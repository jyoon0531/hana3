import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useSession } from '../contexts/session-context';
import { useCounter } from '../contexts/counter-context';
import { useTimeout } from '../hooks/timeout';
import { useToggle } from '../hooks/toggle';
import { useNavigate } from 'react-router-dom';

// type Props = {};

export type LoginHandler = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};

export const Login = forwardRef((_, ref: ForwardedRef<LoginHandler>) => {
  const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { login } = useSession();
  const { count, plusCount, minusCount } = useCounter();
  const navigate = useNavigate();

  const handler: LoginHandler = {
    noti: (msg: string) => alert(msg),
    focusId: () => idRef.current?.focus(),
    focusName: () => nameRef.current?.focus(),
  };

  useImperativeHandle(ref, () => handler);

  const makeLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit 기본 기능을 무력화!
    // if (!idRef.current || !idRef.current.value) {
    //   alert('User Id를 입력하세요!');
    //   idRef.current?.focus();
    //   return;
    // } else if (!nameRef.current?.value) {
    //   alert('User Name를 입력하세요!');
    //   nameRef.current?.focus();
    //   return;
    // }

    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value;
    if (login(id, name ?? '')) {
      navigate('/my');
    }
  };

  useEffect(() => {
    // console.log('Please login...');
    idRef.current?.focus();
    plusCount();

    return () => {
      // console.log('logined');
      minusCount();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // infinite loop

  // useEffect(() => {
  //   const tmout = setTimeout(() => console.log('X=', count), 1000);

  //   return () => clearTimeout(tmout);
  // }, [count]);

  // const { reset, clear } = useTimeout(() => console.log('X=', count), 1000, [
  //   count,
  // ]);
  // reset();
  // useTimeout(clear, 500);

  const [isShow, toggle] = useToggle();

  const { reset, clear } = useTimeout(
    () => console.log('isShow=', isShow),
    isShow ? 2000 : 1000,
    [isShow]
  );

  return (
    <>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
      <button
        onClick={toggle}
        style={{ border: `1px solid ${isShow ? 'blue' : 'yellow'}` }}
      >
        {isShow ? 'HIDE' : 'SHOW'}
      </button>
      <form onSubmit={makeLogin}>
        <div>
          {count} - LoginID: <input type='text' ref={idRef} />
        </div>
        <div>
          LoginName: <input type='text' ref={nameRef} />
          {/* <input type='text' onChange={(e) => setName(e.currentTarget.value)}/> */}
        </div>
        <button type='submit'>Sign-in</button>
      </form>
    </>
  );
});

Login.displayName = 'Login';
