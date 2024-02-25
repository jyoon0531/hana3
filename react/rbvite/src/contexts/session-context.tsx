/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  // useState,
} from 'react';
import { ItemHandler } from '../components/My';

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: ({ id, name, price }: Cart) => void;
  totalPrice: number;
};

const SessionContext = createContext<SessionContextProp>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  saveItem: () => {},
  removeItem: () => {},
  totalPrice: 0,
});

type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
};

// type ReducerAction = {
//   type: string;
//   payload?: number;
// };

type Action =
  | { type: 'logout' }
  | { type: 'login'; info: LoginUser }
  | { type: 'set'; data: Session }
  | { type: 'saveItem'; item: Cart }
  | { type: 'removeItem'; itemId: number };

const reducer = (session: Session, action: Action) => {
  // switch (action.type) {
  //   case 'login': {
  //     const loginNoti = myHandlerRef?.current?.loginHandler.noti || alert;
  //     return;
  //   }
  // }
  if (action.type === 'logout') {
    return { ...session, loginUser: null };
  }

  if (action.type === 'set') {
    return { ...action.data };
  }

  if (action.type === 'removeItem') {
    return {
      ...session,
      cart: [...session.cart.filter((item) => item.id !== action.itemId)],
    };
  }

  if (action.type === 'saveItem') {
    const { cart } = session;
    const foundItem =
      action.item.id !== 0 && cart.find((item) => item.id === action.item.id);
    if (!foundItem) {
      action.item.id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      cart.push(action.item);
    } else {
      foundItem.name = action.item.name;
      foundItem.price = action.item.price;
    }

    return { ...session, cart: [...cart] };
  }

  if (action.type === 'login') {
    console.log(action);
    // const loginNoti = action.myHandlerRef?.current?.loginHandler.noti! || alert;

    // const focusId = action.myHandlerRef?.current?.loginHandler.focusId!;
    // const focusName = action.myHandlerRef?.current?.loginHandler.focusName!;

    // if (!action.info.id || isNaN(action.info.id)) {
    // loginNoti('User Id를 입력하세요!');
    // if (focusId) focusId();
    // return;
    // }

    // if (!action.info.name) {
    // loginNoti('User Name를 입력하세요!');
    // if (focusName) focusName();
    // return;
    // }
    session.loginUser = action.info;
    return { ...session };
  }

  return session;
};

export const SessionProvider = ({ children, myHandlerRef }: ProviderProps) => {
  // const [session, setSession] = useState<Session>({
  //   loginUser: null,
  //   cart: [],
  // });

  const [session, dispatch] = useReducer(reducer, {
    loginUser: null,
    cart: [],
  });

  const setSession = (data: Session) => dispatch({ type: 'set', data });
  const login = (id: number, name: string) =>
    dispatch({ type: 'login', info: { id, name } });
  // console.log('ref>>>>', myHandlerRef);
  // const login = (
  //   id: number,
  //   name: string,
  //   myHandlerRef: RefObject<ItemHandler>
  // ) => {
  //   console.log('dispatch>>>>', myHandlerRef);
  //   dispatch({ type: 'login', info: { id, name }, myHandlerRef });
  // };
  const logout = () => dispatch({ type: 'logout' });
  const saveItem = ({ id, name, price }: Cart) =>
    dispatch({ type: 'saveItem', item: { id, name, price } });
  const removeItem = (itemId: number) =>
    dispatch({ type: 'removeItem', itemId });

  // const totalPrice = session.cart.reduce((acc, item) => acc + item.price, 0);
  const totalPrice = useMemo(
    () => session.cart.reduce((sum, item) => sum + item.price, 0),
    [session.cart]
  );

  // const login = (id: number, name: string) => {
  //   // console.log('id>>', id);
  //   // console.log('name>>', name);
  //   // console.log('myHandlerRef.current>>', myHandlerRef?.current);
  //   const loginNoti = myHandlerRef?.current?.loginHandler.noti || alert;

  //   const focusId = myHandlerRef?.current?.loginHandler.focusId;
  //   const focusName = myHandlerRef?.current?.loginHandler.focusName;

  //   if (!id || isNaN(id)) {
  //     loginNoti('User Id를 입력하세요!');
  //     if (focusId) focusId();
  //     return;
  //   }

  //   if (!name) {
  //     loginNoti('User Name를 입력하세요!');
  //     if (focusName) focusName();
  //     return;
  //   }
  //   setSession({ ...session, loginUser: { id, name } });
  // };

  // const logout = () => {
  //   setSession({ ...session, loginUser: null }); // view와 관련된 것들은 순수함수로 작성!
  // };

  // add(id=0) or modify(id != 0) item
  // const saveItem = ({ id, name, price }: Cart) => {
  //   const { cart } = session;
  //   const foundItem = id !== 0 && cart.find((item) => item.id === id);
  //   if (!foundItem) {
  //     id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
  //     cart.push({ id, name, price });
  //   } else {
  //     foundItem.name = name;
  //     foundItem.price = price;
  //   }
  //   setSession({ ...session, cart: [...cart] });
  // };

  // const removeItem = (itemId: number) => {
  //   setSession({
  //     ...session,
  //     cart: [...session.cart.filter((item) => item.id !== itemId)],
  //   });
  //   // Virtual-DOM의 rerender() 호출 안 함 session의 주소는 변하지 않았기 때문
  //   // session.cart = session.cart.filter((item) => item.id !== itemId);
  // };

  // Sample data 읽어오기
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    (async function () {
      const res = await fetch('/data/sample.json', { signal: signal });
      const data = await res.json();
      setSession(data);
    })();

    return () => controller.abort();
  }, []);

  return (
    <SessionContext.Provider
      value={{ session, login, logout, saveItem, removeItem, totalPrice }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
