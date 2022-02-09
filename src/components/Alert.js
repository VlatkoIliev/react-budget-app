import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const Alert = ({ type, msg }) => {
  const { items, handleAlert } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAlert();
    }, 3000);
  }, [items]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
