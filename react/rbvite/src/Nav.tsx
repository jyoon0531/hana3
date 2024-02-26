import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav>
    <ul className='flex justify-around mt-3 mb-5'>
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
        <NavLink to='/posts'>Posts</NavLink>
      </li>
      <li>
        <NavLink to='/hello'>Hello</NavLink>
      </li>
      <li>
        <NavLink to='/sample'>Sample</NavLink>
      </li>
    </ul>
  </nav>
);
