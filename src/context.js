import React, { useContext, useEffect, useReducer } from 'react';
import { v4 as uuid4 } from 'uuid';
import reducer from './reducer';

const expItems = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

const AppContext = React.createContext();

const initState = {
  charge: '',
  amount: '',
  items: expItems,
  edit: false,
  id: null,
  alert: {
    show: false,
    type: '',
    message: '',
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleCharge = (e) => {
    dispatch({ type: 'SET_CHARGE', payload: e.target.value });
  };

  const handleAmount = (e) => {
    dispatch({ type: 'SET_AMOUNT', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.charge !== '' && state.amount !== '') {
      if (state.edit) {
        dispatch({
          type: 'EDIT_ITEM',
          payload: { charge: state.charge, amount: state.amount },
        });
      } else {
        const item = {
          id: uuid4(),
          charge: state.charge,
          amount: state.amount,
        };

        dispatch({ type: 'ADD_ITEM', payload: item });
      }
    }
  };

  const clearExpenses = () => {
    dispatch({ type: 'CLEAR_LIST' });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const handleEdit = (id) => {
    dispatch({ type: 'CHANGE_ITEM', payload: id });
  };

  const handleAlert = () => {
    dispatch({ type: 'REMOVE_ALERT' });
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleCharge,
        handleAmount,
        handleSubmit,
        clearExpenses,
        handleDelete,
        handleEdit,
        handleAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
