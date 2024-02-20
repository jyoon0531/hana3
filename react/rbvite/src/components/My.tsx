import { useRef, useState } from 'react';
import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: (item: Cart) => void;
};

const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
  saveItem,
}: Props) => {
  // if (loginUser) loginUser.name = 'XXXXXXX';
  // const removeItem = (id: number) => {
  //   const newCart = cart.filter((item) => item.id !== id);
  // };

  // 상태 변화가 화면에 바로 반영될 수 있게!
  // const itemIdRef = useRef(0);
  const [currId, setCurrId] = useState(0);

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);
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
      style={{ border: '2px solid red', marginBottom: '2rem', padding: '1rem' }}
    >
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <ul>
        {cart.map(({ id, name, price }: Cart) => (
          <li key={id}>
            <button
              onClick={() => {
                setCurrId(id);
                if (itemNameRef.current) {
                  itemNameRef.current.value = name;
                }
                if (itemPriceRef.current) {
                  itemPriceRef.current.value = price.toString();
                }
              }}
            >
              {name} ({price.toLocaleString()}원)
              <button onClick={() => removeItem(id)}>X</button>
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={saveCartItem}>
        <input type='text' placeholder='상품명...' ref={itemNameRef} />
        <input type='number' placeholder='가격...' ref={itemPriceRef} />
        <button type='reset'>취소</button>
        <button type='submit'>{currId ? '수정' : '추가'}</button>
        {/* <button type='submit'>저장</button> */}
      </form>
    </div>
  );
};
export default My;
