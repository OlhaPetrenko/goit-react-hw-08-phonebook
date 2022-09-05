import { ADD_CONTACTS_ITEM, DELETE_CONTACTS_ITEM } from './items-types';

const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function itemsReducer(store = initialStore, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CONTACTS_ITEM:
      return [...store, payload];

    case DELETE_CONTACTS_ITEM:
      return store.filter(item => item.id !== payload);

    default:
      return store;
  }
}

export default itemsReducer;
