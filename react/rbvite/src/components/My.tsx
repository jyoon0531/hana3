import {
  ForwardedRef,
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Login, LoginHandler } from './Login';
import { Profile } from './Profile';
import { useSession } from '../contexts/session-context';

export type ItemHandler = {
  signOut: () => void;
  notify: (msg: string) => void;
  removeItem: () => void;
  loginHandler: LoginHandler;
};

// type Props = {};

const My = forwardRef((_, ref: ForwardedRef<ItemHandler>) => {
  // if (loginUser) loginUser.name = 'XXXXXXX';
  // const removeItem = (id: number) => {
  //   const newCart = cart.filter((item) => item.id !== id);
  // };

  // 상태 변화가 화면에 바로 반영될 수 있게!
  // const itemIdRef = useRef(0);
  const [currId, setCurrId] = useState(0);
  const [message, setMessage] = useState('');
  const { session, removeItem, saveItem, totalPrice } = useSession();

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const loginHandlerRef = useRef<LoginHandler>(null);
  const logoutBtnRef = createRef<HTMLButtonElement>();

  const itemHandler: ItemHandler = {
    signOut: () => logoutBtnRef.current?.click(),
    notify: (msg: string) => setMessage(msg),
    removeItem: () => {
      const { id } = session.cart.find((_, idx) => idx === 1)!;
      removeItem(id);
    },
    loginHandler: {
      noti: (msg: string) => loginHandlerRef.current?.noti(msg),
      focusId: () => loginHandlerRef.current?.focusId(),
      focusName: () => loginHandlerRef.current?.focusName(),
    },
  };

  useImperativeHandle(ref, () => itemHandler);
  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    // const id = itemIdRef.current;
    const id = currId;
    const name = itemNameRef.current?.value;
    const price = Number(itemPriceRef.current?.value);
    if (!name) {
      alert('상품명을 입력하세요!');
      itemNameRef.current?.focus();
      return;
    } else if (isNaN(price) || !price) {
      alert('가격을 입력하세요!');
      itemPriceRef.current?.focus();
      return;
    }
    saveItem({ id, name, price });
    // itemIdRef.current = 0;
    setCurrId(0);
    itemNameRef.current.value = '';
    if (itemPriceRef.current) itemPriceRef.current.value = '0';
  };
  return (
    <div
      style={{
        border: '2px solid red',
        marginBottom: '2rem',
        padding: '1rem',
      }}
    >
      {message && (
        <>
          <h3>{message}</h3>
          <hr />
        </>
      )}
      {session.loginUser ? (
        <Profile ref={logoutBtnRef} />
      ) : (
        <Login ref={loginHandlerRef} />
      )}

      <ul className='un-list'>
        {session.cart.map(({ id, name, price }: Cart) => (
          <li
            onClick={() => {
              // itemIdRef.current = id;
              setCurrId(id);
              if (itemNameRef.current) itemNameRef.current.value = name;
              if (itemPriceRef.current)
                itemPriceRef.current.value = price.toString();
            }}
            aria-hidden='true'
            key={id}
            className={`pointer ${currId === id ? 'active' : ''}`}
          >
            <small>{id}.</small>
            {name} ({price.toLocaleString()}원)
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeItem(id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div>총 {totalPrice.toLocaleString()}원</div>
      <form onSubmit={saveCartItem}>
        <input type='text' placeholder='상품명...' ref={itemNameRef} />
        <input type='number' placeholder='가격...' ref={itemPriceRef} />
        <button type='reset'>취소</button>
        <button type='submit'>{currId ? '수정' : '추가'}</button>
        {/* <button type='submit'>저장</button> */}
      </form>
    </div>
  );
});

// displayName을 해줘야 React가 컴포넌트로 인식!
My.displayName = 'My';

export default My;
