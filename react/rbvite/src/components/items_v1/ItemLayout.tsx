import { useState } from 'react';
import { useSession } from '../../contexts/session-context';
import { Outlet, useNavigate } from 'react-router-dom';

const ItemLayout = () => {
  const navigate = useNavigate();
  const {
    session: { cart },
  } = useSession();

  const [currItem, setCurrItem] = useState<Cart | null>(null);

  const goItem = (item: Cart) => {
    setCurrItem(item);
    navigate(`/v1/items/${item.id}`);
  };

  return (
    <>
      <div className='flex flex-row'>
        <ul className='basis-1/2'>
          {cart.map((item) => (
            <li key={item.id} className='mb-5'>
              <button
                onClick={() => goItem(item)}
                className='hover:text-blue-300'
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className='basis-1/2 border border-green-400 rounded-md'>
          <Outlet context={{ item: currItem }} />
        </div>
      </div>
    </>
  );
};

export default ItemLayout;
