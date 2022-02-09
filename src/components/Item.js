import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useGlobalContext } from '../context';

const Item = ({ item }) => {
  const { handleDelete, handleEdit } = useGlobalContext();
  const { id, charge, amount } = item;
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}</span>
        <span className='amount'>${amount}</span>
      </div>
      <div>
        <button className='edit-btn' onClick={() => handleEdit(id)}>
          <MdEdit />
        </button>
        <button className='clear-btn' onClick={() => handleDelete(id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default Item;
