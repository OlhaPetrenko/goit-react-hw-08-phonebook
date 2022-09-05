// import { combineReducers } from 'redux';
import { ADD_CONTACTS_ITEM, DELETE_CONTACTS_ITEM } from './items/items-types';
import { SET_FILTER } from './filter/filter-types';

// =========================================початковий варіант
// const initialStore = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
// };
// function reducer(store = initialStore, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case ADD_CONTACTS_ITEM:
//       const newContacts = {
//         ...store.contacts,
//         items: [...store.contacts.items, payload],
//       };
//       return {
//         ...store,
//         contacts: newContacts,
//       };
//     case DELETE_CONTACTS_ITEM:
//       const newItems = store.contacts.items.filter(item => item.id !== payload);
//       const newContactsAfterDel = {
//         ...store.contacts,
//         items: newItems,
//       };
//       return {
//         ...store,
//         contacts: newContactsAfterDel,
//       };
//     case SET_FILTER:
//       return { ...store, contacts: { ...store.contacts, filter: payload } };

//     default:
//       return store;
//   }
// }

// =========================розділення
//
// const contactsIinitialStore = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

export function itemsReducer(store = [], { type, payload }) {
  switch (type) {
    case ADD_CONTACTS_ITEM:
      return [...store, payload];
    case DELETE_CONTACTS_ITEM:
      return store.filter(item => item.id !== payload);

    default:
      return store;
  }
}
export function filterReducer(store = '', action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER:
      return payload;

    default:
      return store;
  }
}

// ========================== подвійна комбінація
// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// const rootReduser = combineReducers({
//   contacts: contactsReducer,
// });
// export default rootReduser;
