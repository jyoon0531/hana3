import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav>
    <ul className='flex justify-around mt-3 mb-7 text-blue-500'>
      <li>
        <NavLink to='/' replace>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
      <li>
        <NavLink to='/my'>My</NavLink>
      </li>
      <li>
        <NavLink
          to='/posts'
          style={({ isActive, isPending }) => {
            console.log({ isActive, isPending });
            return { color: isActive ? 'red' : 'inherit' };
          }}
        >
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/v1/items'
          style={({ isActive, isPending }) => {
            console.log({ isActive, isPending });
            return { color: isActive ? 'red' : 'inherit' };
          }}
        >
          ItemsV1
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/hello'
          className={({ isActive, isPending, isTransitioning }) =>
            clsx({
              'text-red-500': isActive,
              'border border-red-500': isPending || isTransitioning,
            })
          }
        >
          Hello
        </NavLink>
      </li>
      <li>
        <NavLink to='/sample'>Sample</NavLink>
      </li>
      <li>
        <NavLink to='/defertrans'>DeferTrans</NavLink>
      </li>
    </ul>
  </nav>
);
