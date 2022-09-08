import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsItem,
  deleteContactsItem,
} from './items-actions';

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialStore = [
//   // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const initialStore = {
  items: [],
  loading: false,
  error: null,
};

const itemsReducer = createReducer(initialStore, {
  [fetchContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [fetchContactsSuccess]: (store, { payload }) => {
    // store.items = [...payload];
    store.items = payload;
    store.loading = false;
  },
  [fetchContactsError]: (store, { payload }) => {
    store.error = payload;
    store.loading = false;
  },

  [addContactsItem]: (store, { payload }) => [...store, payload],
  [deleteContactsItem]: (store, { payload }) =>
    store.filter(item => item.id !== payload),
});

export default itemsReducer;

// ================================== createSlice

// export const itemsSlice = createSlice({
//   name: 'items',
//   initialState: initialStore,
//   reducers: {
//     addContactsItem: {
//       reducer: (store, { payload }) => [...store, payload],
//       prepare: (name, number) => {
//         return {
//           payload: { name, number, id: nanoid() },
//         };
//       },
//     },
//     deleteContactsItem: (store, { payload }) =>
//       store.filter(item => item.id !== payload),
//   },
// });
