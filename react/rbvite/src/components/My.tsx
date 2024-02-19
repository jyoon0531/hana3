import { FormEvent, useRef } from 'react';
import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  addItem: (id: number, name: string, price: number) => void;
};

const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
  addItem,
}: Props) => {
  // if (loginUser) loginUser.name = 'XXXXXXX';
  // const removeItem = (id: number) => {
  //   const newCart = cart.filter((item) => item.id !== id);
  // };
  const itemRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const addCartItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!itemRef.current?.value) {
      alert('상품명을 입력하세요!');
      itemRef.current?.focus();
      return;
    } else if (!priceRef.current?.value) {
      alert('가격을 입력하세요!');
      priceRef.current?.focus();
      return;
    }
    const item = itemRef.current.value;
    const price = priceRef.current.value;
    const id = Math.random();
    addItem(id, item, +price);
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
            {name} ({price.toLocaleString()}원)
            <button onClick={() => removeItem(id)}>X</button>
          </li>
        ))}
      </ul>
      <form onSubmit={addCartItem}>
        <input type='text' placeholder='상품명' ref={itemRef} />
        <input type='text' placeholder='가격' ref={priceRef} />
        <button type='submit'>+</button>
      </form>
    </div>
  );
};
export default My;
