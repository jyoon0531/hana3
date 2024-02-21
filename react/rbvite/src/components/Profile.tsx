import { Ref, forwardRef } from 'react';
// import { LoginUser } from '../App';
import { useSession } from '../contexts/session-context';

// type Props = {
// };

export const Profile = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
  const { session, logout } = useSession();
  return (
    <>
      <h3>이름: {session.loginUser?.name}</h3>
      <button onClick={logout} ref={ref}>
        Sign-out
      </button>
    </>
  );
});

Profile.displayName = 'Profile';
