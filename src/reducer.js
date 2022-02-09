const reducer = (state, action) => {
  if (action.type === 'SET_CHARGE') {
    return {
      ...state,
      charge: action.payload,
    };
  }
  if (action.type === 'SET_AMOUNT') {
    return {
      ...state,
      amount: action.payload,
    };
  }
  if (action.type === 'ADD_ITEM') {
    const newItems = [...state.items, action.payload];
    return {
      ...state,
      charge: '',
      amount: '',
      items: newItems,
      alert: { show: true, type: 'success', message: 'Item added' },
    };
  }
  if (action.type === 'CHANGE_ITEM') {
    let specItem = state.items.find((item) => item.id === action.payload);
    const { charge, amount } = specItem;
    return {
      ...state,
      charge: charge,
      amount: amount,
      edit: true,
      id: action.payload,
    };
  }
  if (action.type === 'EDIT_ITEM') {
    let newArr = state.items.map((item) => {
      if (item.id === state.id) {
        return {
          ...item,
          charge: action.payload.charge,
          amount: action.payload.amount,
        };
      }
      return item;
    });
    return {
      ...state,
      items: newArr,
      charge: '',
      amount: '',
      edit: false,
      id: null,
      alert: { show: true, type: 'danger', message: 'Item edited' },
    };
  }
  if (action.type === 'CLEAR_LIST') {
    return {
      ...state,
      items: [],
      alert: { show: true, type: 'danger', message: 'Items deleted' },
    };
  }

  if (action.type === 'DELETE_ITEM') {
    let newArr = state.items.filter((item) => item.id !== action.payload);
    return {
      ...state,
      items: newArr,
      alert: { show: true, type: 'danger', message: 'Item deleted' },
    };
  }
  if (action.type === 'REMOVE_ALERT') {
    return {
      ...state,
      alert: { show: false, type: '', message: '' },
    };
  }

  throw new Error('No matching action type');
};

export default reducer;
