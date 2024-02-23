import { useReducer } from 'react';

export const useToggle = (defaultFLag: boolean = false) => {
  // const [flag, setFlag] = useState(defaultFLag);
  // const makeToggle = () => {
  //   setFlag(!flag);
  // };

  const [flag, makeToggle] = useReducer((pre) => !pre, defaultFLag);

  return [flag, makeToggle] as const;
};
