import { useSession } from '../contexts/session-context';

import { Login } from './Login';
import { useFetch } from '../hooks/fetch';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import Post, { PostType } from './Post';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

export default function Posts() {
  const {
    session: { loginUser },
  } = useSession();
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<PostType[]>({
    url: `${BASE_URL}/posts?userId=${loginUser?.id}`,
    dependencies: [loginUser],
    defaultData: [],
  });
  const { id } = useParams(); // Item.tsx
  console.log('🚀 id:', id);

  const location = useLocation();
  console.log('🚀 location:', location);
  // const state = location.state as { x: number };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams] = useSearchParams({ q: '' });
  const q = searchParams.get('q');
  console.log('🚀  q:', q);

  return (
    <div className='active'>
      {isLoading && <h1>Fetching Posts...</h1>}
      {error && <h3 style={{ color: 'red' }}>Error: {error}</h3>}
      <h3>#user{loginUser?.id}`s Posts</h3>
      <ul className='un-list'>
        {!loginUser && (
          <>
            <h4>로그인 해 주세요!</h4>
            <Login />
          </>
        )}
        {posts?.map((post) => <Post key={post.id} postData={post} />)}
      </ul>
    </div>
  );
}
