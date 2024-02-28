/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  // useState,
} from 'react';
import { ItemHandler } from '../components/My';
import { LoginHandler } from '../components/Login';

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string) => boolean;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: ({ id, name, price }: Cart) => void;
  totalPrice: number;
};

type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
  loginHandlerRef?: RefObject<LoginHandler>;
};

type Action =
  | { type: 'set'; payload: Session }
  | { type: 'logout'; payload: null }
  | { type: 'login'; payload: LoginUser }
  | { type: 'saveItem'; payload: Cart }
  | { type: 'removeItem'; payload: number };

const SKEY = 'session';
const DefaultSession: Session = {
  loginUser: null,
  cart: [],
};

function getStorage() {
  const storedData = localStorage.getItem(SKEY);
  if (storedData) {
    return JSON.parse(storedData) as Session; // String ->  JSON as Session
  }

  setStorage(DefaultSession);

  return DefaultSession;
}

function setStorage(session: Session) {
  localStorage.setItem(SKEY, JSON.stringify(session)); // JSON ->  String
}

const SessionContext = createContext<SessionContextProp>({
  session: { loginUser: null, cart: [] },
  login: () => false,
  logout: () => {},
  saveItem: () => {},
  removeItem: () => {},
  totalPrice: 0,
});

const reducer = (session: Session, { type, payload }: Action) => {
  let newer; // Sesssion객체가 새로 생긴다
  switch (type) {
    case 'set':
      newer = { ...payload };
      break;

    case 'logout':
    case 'login':
      newer = { ...session, loginUser: payload };
      break;

    case 'removeItem':
      newer = {
        ...session,
        cart: [...session.cart.filter((item) => item.id !== payload)],
      };
      break;

    case 'saveItem':
      {
        const { cart } = session;
        const { id, name, price } = payload;
        const foundItem = id !== 0 && cart.find((item) => item.id === id);
        // item 추가
        if (!foundItem) {
          const maxId = Math.max(...session.cart.map((item) => item.id), 0);
          // cart.push(action.item);
          newer = {
            ...session,
            cart: [...cart, { id: maxId + 1, name, price }],
          };
        } else {
          // item 수정
          foundItem.name = name;
          foundItem.price = price;
          newer = { ...session, cart: [...cart] };
        }
      }
      break;

    default:
      return session;
  }
  setStorage(newer);
  return newer;
};

export const SessionProvider = ({
  children,
  myHandlerRef,
  loginHandlerRef,
}: ProviderProps) => {
  // const [session, setSession] = useState<Session>({
  //   loginUser: null,
  //   cart: [],
  // });

  // const [session, dispatch] = useReducer(reducer, {
  //   loginUser: null,
  //   cart: [],
  // });

  const [session, dispatch] = useReducer(reducer, DefaultSession);

  const setSession = useCallback(
    (payload: Session) => dispatch({ type: 'set', payload }),
    []
  );

  // setSession에 callback함수 형태로 인자로 넣어주면 useCallback의 의존관계배열에 session을 안 걸어줘도 ok!
  const login = useCallback((id: number, name: string) => {
    const loginNoti =
      myHandlerRef?.current?.loginHandler.noti ||
      loginHandlerRef?.current?.noti ||
      alert;

    const focusId =
      myHandlerRef?.current?.loginHandler.focusId ||
      loginHandlerRef?.current?.focusId;
    const focusName =
      myHandlerRef?.current?.loginHandler.focusName ||
      loginHandlerRef?.current?.focusName;

    if (!id || isNaN(id)) {
      loginNoti('User Id를 입력하세요!');
      if (focusId) focusId();
      return false;
    }

    if (!name) {
      loginNoti('User Name를 입력하세요!');
      if (focusName) focusName();
      return false;
    }

    dispatch({ type: 'login', payload: { id, name } });
    return true;
  }, []);

  const logout = useCallback(
    () => dispatch({ type: 'logout', payload: null }),
    []
  );

  const saveItem = useCallback(
    ({ id, name, price }: Cart) =>
      dispatch({ type: 'saveItem', payload: { id, name, price } }),
    []
  );

  const removeItem = useCallback(
    (itemId: number) => dispatch({ type: 'removeItem', payload: itemId }),
    []
  );

  // const totalPrice = session.cart.reduce((acc, item) => acc + item.price, 0);
  const totalPrice = useMemo(
    () => session.cart.reduce((sum, item) => sum + item.price, 0),
    [session.cart]
  );

  // TODO: session 데이터 localStorage에 저장하기
  // Sample data 읽어오기
  // const { data, error } = useFetch<Session>({ url: 'data/sample.json' });
  // if (error) console.log(error);

  // useEffect(() => {
  //   if (data) {
  //     setSession(data);
  //   }
  // }, [data]);

  useEffect(() => {
    setSession(getStorage());
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
