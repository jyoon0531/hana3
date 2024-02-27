import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function ItemRead({ item }: { item: Cart }) {
  return (
    <div className='text-right'>
      <div>
        <span></span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

// 상세페이지 (read | update)
const Item = () => {
  const { item } = useOutletContext<{ item: Cart }>();
  const [isEditing, setEditing] = useState(false);
  return <></>;
};

export default Item;
