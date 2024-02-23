/* eslint-disable react-refresh/only-export-components */
import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

type CounterContextProp = {
  count: number;
  plusCount: () => void;
  minusCount: (payload: number) => void;
};

const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

type ReducerAction = {
  type: string;
  payload?: number;
};

const reducer = (count: number, { type, payload = 1 }: ReducerAction) => {
  switch (type) {
    case 'plus':
      return count + payload;
    case 'minus':
      return count - payload;
    default:
      return count;
  }
};
export const CounterProvider = ({ children }: PropsWithChildren) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  const plusCount = () => dispatch({ type: 'plus' });
  const minusCount = (payload: number) => dispatch({ type: 'minus', payload });
  // const plusCount = () => setCount((prevCount) => prevCount + 1);
  // const plusCount = useCallback(() => setCount((prevCount) => prevCount + 1), []);
  // const minusCount = () => setCount((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// const {count, plusCount} = useCounter();
export const useCounter = () => useContext(CounterContext);
