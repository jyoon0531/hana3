import { useNavigate } from 'react-router-dom';
import { useTimeout } from './hooks/timeout';

export const NotFound = () => {
  const navigate = useNavigate();
  // 2초 후 이전 페이지로
  useTimeout(() => navigate(-1), 2000);
  return (
    <h1>
      <strong className='text-red-500'>{location.pathname}</strong>
      Page Not Found (404)
    </h1>
  );
};
