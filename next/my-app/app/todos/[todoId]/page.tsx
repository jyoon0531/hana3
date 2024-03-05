import Link from 'next/link';
import { Todo } from '../layout';

const TodoURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodo = async (todoId: string) => {
  const res = await fetch(`${TodoURL}/${todoId}`);
  return res.json();
};
export default async function TodoIdPage({
  params,
}: {
  params: { todoId: string };
}) {
  const { todoId } = params;
  const { id, title, completed }: Todo = await getTodo(params.todoId);
  const checkId = `todo-${todoId}`;
  return (
    <>
      <div>
        <div>
          {id}.
          <input type='checkbox' id={checkId} checked={completed} />
          <label htmlFor={checkId}>{title}</label>
        </div>
      </div>
      <Link href='/todos'>GoToList</Link>
    </>
  );
}
