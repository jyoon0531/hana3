import { useState } from 'react';

export const useToggle = (defaultFLag: boolean = false) => {
  const [flag, setFlag] = useState(defaultFLag);

  return [flag, () => setFlag(!flag)] as const;
};
