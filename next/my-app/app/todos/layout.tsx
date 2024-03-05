import Link from 'next/link';
import { PropsWithChildren } from 'react';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodoURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = async (userId = 1) => {
  const res = await fetch(`${TodoURL}?userId=${userId}`);
  return res.json();
};

export default async function TodosLayout({ children }: PropsWithChildren) {
  const todos: Todo[] = await getTodos(1);
  // console.log(todos);
  return (
    <>
      <h1>ToDOs</h1>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col justify-around border border-dotted'>
          {todos.map((todo) => {
            return (
              <Link key={todo.id} href={`/todos/${todo.id}`}>
                {todo.title}
              </Link>
            );
          })}
        </div>
        <div className='border border-red-500 border-dotted'>{children}</div>
      </div>
    </>
  );
}
