import { useState } from 'react';

export const useToggle = (defaultFLag: boolean = false) => {
  const [flag, setFlag] = useState(defaultFLag);

  const makeToggle = () => {
    setFlag(!flag);
  };

  return [flag, makeToggle] as const;
};
