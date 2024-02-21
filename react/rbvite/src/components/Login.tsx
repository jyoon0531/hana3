import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { useSession } from '../contexts/session-context';

// type Props = {};

export type LoginHandler = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};

export const Login = forwardRef((_, ref: ForwardedRef<LoginHandler>) => {
  // const [id, setId] = useState(0);
  const idRef = useRef<HTMLInputElement | null>(null);
  // const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { login } = useSession();

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
    login(id, name ?? '');
  };

  // useEffect(() => {
  //   alert('Please login...');
  // }, []);

  return (
    <>
      <form onSubmit={makeLogin}>
        <div>
          LoginID: <input type='text' ref={idRef} />
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
