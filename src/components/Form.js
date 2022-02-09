import React from 'react';
import { MdSend } from 'react-icons/md';
import { useGlobalContext } from '../context';

const Form = () => {
  const { edit, charge, amount, handleSubmit, handleCharge, handleAmount } =
    useGlobalContext();
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>charge</label>
          <input
            value={charge}
            type='text'
            id='charge'
            name='charge'
            placeholder='e.g. car'
            className='form-control'
            onChange={handleCharge}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>amount</label>
          <input
            value={amount}
            type='text'
            id='amount'
            name='amount'
            placeholder='e.g. 1000'
            className='form-control'
            onChange={handleAmount}
          />
        </div>
      </div>
      <button className='btn'>
        {edit ? 'edit' : 'submit'}
        <MdSend className='btn-icon' />
      </button>
    </form>
  );
};

export default Form;
