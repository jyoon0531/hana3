// item 추가
import { useRef, useState } from 'react';
import { useSession } from '../../contexts/session-context';
// import { useOutletContext } from 'react-router-dom';

const Items = () => {
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const { saveItem } = useSession();

  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    // const id = itemIdRef.current;
    const name = itemNameRef.current?.value;
    const price = Number(itemPriceRef.current?.value);
    if (!name) {
      alert('상품명을 입력하세요!');
      itemNameRef.current?.focus();
      return;
    } else if (isNaN(price) || !price) {
      alert('가격을 입력하세요!');
      itemPriceRef.current?.focus();
      return;
    }
    saveItem({ id: 0, name, price });
    // itemIdRef.current = 0;
    itemNameRef.current.value = '';
    if (itemPriceRef.current) itemPriceRef.current.value = '0';
  };
  return (
    <>
      <form onSubmit={saveCartItem}>
        <input type='text' placeholder='상품명...' ref={itemNameRef} />
        <input type='number' placeholder='가격...' ref={itemPriceRef} />
        <button type='reset'>취소</button>
        <button type='submit'>추가</button>
      </form>
    </>
  );
};

export default Items;
