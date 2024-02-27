import { useOutletContext, useParams } from 'react-router-dom';
import { PostType } from './Post';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/fetch';

export const PostDetail = () => {
  const { post: postData } = useOutletContext<{ post: PostType }>();
  const [post, setPost] = useState<PostType | null>(null);
  const { id } = useParams();
  const { data } = useFetch<PostType>({
    url: `http://jsonplaceholder.typicode.com/posts/${id}`,
    enable: !post,
  });

  useEffect(() => {
    if (postData) {
      setPost(postData);
      return;
    }

    if (data) {
      setPost(data);
    }
  }, [postData, data]);

  return (
    <>
      <div>
        <h1>
          <small className='text-gray-500'>{post?.id}</small>
          상세페이지
        </h1>
        <strong>{post?.title}</strong>
      </div>
      <div>{post?.body}</div>
    </>
  );
};
