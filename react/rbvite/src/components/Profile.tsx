import { Ref, forwardRef } from 'react';
// import { LoginUser } from '../App';
import { useSession } from '../contexts/session-context';

// type Props = {
// };

export const Profile = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
  const {
    session: { loginUser },
    logout,
  } = useSession();
  return (
    <>
      <h3>
        #{loginUser?.id}: {loginUser?.name}
      </h3>
      <button onClick={logout} ref={ref}>
        Sign-out
      </button>
    </>
  );
});

Profile.displayName = 'Profile';
