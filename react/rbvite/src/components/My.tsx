import { Session } from '../App';

type Props = {
  session: Session;
  login: () => void;
  logout: () => void;
};

const My = ({ session: { loginUser }, login, logout }: Props) => {
  return (
    <>{loginUser ? <Profile logout={logout} /> : <Login login={login} />}</>
  );
};
export default My;
