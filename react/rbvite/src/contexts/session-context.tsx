/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useState,
} from 'react';
import { ItemHandler } from '../components/My';
// import { ItemHandler } from '../components/My';

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: ({ id, name, price }: Cart) => void;
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

const SessionContext = createContext<SessionContextProp>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  saveItem: () => {},
  removeItem: () => {},
});

type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
};

export const SessionProvider = ({ children, myHandlerRef }: ProviderProps) => {
  const [session, setSession] = useState<Session>(SampleSession);

  const login = (id: number, name: string) => {
    // console.log('id>>', id);
    // console.log('name>>', name);
    // console.log('myHandlerRef.current>>', myHandlerRef?.current);
    const loginNoti = myHandlerRef?.current?.loginHandler.noti || alert;

    const focusId = myHandlerRef?.current?.loginHandler.focusId;
    const focusName = myHandlerRef?.current?.loginHandler.focusName;

    if (!id || isNaN(id)) {
      loginNoti('User Id를 입력하세요!');
      if (focusId) focusId();
      return;
    }

    if (!name) {
      loginNoti('User Name를 입력하세요!');
      if (focusName) focusName();
      return;
    }
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    setSession({ ...session, loginUser: null }); // view와 관련된 것들은 순수함수로 작성!
  };

  // add(id=0) or modify(id != 0) item
  const saveItem = ({ id, name, price }: Cart) => {
    const { cart } = session;
    const foundItem = id !== 0 && cart.find((item) => item.id === id);
    if (!foundItem) {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      cart.push({ id, name, price });
    } else {
      foundItem.name = name;
      foundItem.price = price;
    }
    setSession({ ...session, cart: [...cart] });
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
    <SessionContext.Provider
      value={{ session, login, logout, saveItem, removeItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
