import React from 'react';
import Item from './Item';
import { MdDelete } from 'react-icons/md';
import { useGlobalContext } from '../context';

const List = () => {
  const { items, clearExpenses } = useGlobalContext();
  return (
    <>
      <ul className='list'>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
      {items.length > 0 && (
        <button className='btn' onClick={clearExpenses}>
          clear expenses
          <MdDelete className='btn-icon' />
        </button>
      )}
    </>
  );
};

export default List;
