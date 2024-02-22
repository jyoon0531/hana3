/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from 'react';

type CounterContextProp = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((prevCount) => prevCount + 1);
  // const plusCount = useCallback(() => setCount((prevCount) => prevCount + 1), []);
  const minusCount = () => setCount((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// const {count, plusCount} = useCounter();
export const useCounter = () => useContext(CounterContext);
