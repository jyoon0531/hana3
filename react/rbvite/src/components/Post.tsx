import clsx from 'clsx';
import { useToggle } from '../hooks/toggle';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/fetch';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const DefaultPost = {
  userId: 0,
  id: 0,
  title: '',
  body: '',
};

type Props = {
  postId?: number;
  postData?: PostType;
};

const Post = ({ postId, postData }: Props) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [isOpen, toggleOpen] = useToggle();

  const { data, error, isLoading } = useFetch<PostType>({
    url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
    defaultData: DefaultPost,
    enable: !!postId,
  });

  useEffect(() => {
    if (postData) {
      setPost(postData);
      return;
    }

    if (data) {
      setPost(data);
      return;
    }
  }, [data, postData]);

  if (error) {
    console.log('🚀 error:', error);
    return <h1 className='text-red-700 font-bold'>{error}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <li
          className={clsx({
            border: isOpen,
            'border-green-500': isOpen,
            'mx-3': isOpen,
          })}
        >
          <strong className={clsx(isOpen && 'text-green-500', 'italic')}>
            {post?.title}
          </strong>
          <button onClick={() => toggleOpen()} className='rounded'>
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          {isOpen && <div>{post?.body}</div>}
        </li>
      )}
    </>
  );
};

export default Post;
