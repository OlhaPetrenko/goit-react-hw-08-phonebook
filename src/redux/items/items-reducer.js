import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './items-actions';

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialStore = [
//   // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const itemsItemsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (store, { payload }) => [...store, payload],
  [actions.deleteContactSuccess]: (store, { payload }) =>
    store.filter(item => item.id !== payload),
});

const loadingReducer = createReducer(false, {
  [actions.fetchContactsLoading]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactLoading]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactLoading]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchContactsLoading]: () => null,
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.addContactLoading]: () => null,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.deleteContactLoading]: () => null,
  [actions.deleteContactError]: (_, { payload }) => payload,
});

const itemsReducer = combineReducers({
  items: itemsItemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

//================================

// const initialStore = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const itemsReducer = createReducer(initialStore, {
//   [actions.fetchContactsLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },
//   [actions.fetchContactsSuccess]: (store, { payload }) => {
//     // store.items = [...payload];
//     store.items = payload;
//     store.loading = false;
//   },
//   [actions.fetchContactsError]: (store, { payload }) => {
//     store.error = payload;
//     store.loading = false;
//   },
//   [actions.addContactLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },
//   [actions.addContactSuccess]: (store, { payload }) => {
//     store.items = [...store.items, payload];
//     store.loading = false;
//   },
//   [actions.addContactError]: (store, { payload }) => {
//     store.error = payload;
//     store.loading = false;
//   },

//   [actions.deleteContactLoading]: store => {
//     store.loading = true;
//     store.error = null;
//   },
//   [actions.deleteContactSuccess]: (store, { payload }) => {
//     store.items = store.items.filter(item => item.id !== payload);
//     store.loading = false;
//   },
//   [actions.deleteContactError]: (store, { payload }) => {
//     store.error = payload;
//     store.loading = false;
//   },

//   // [actions.addContactsItem]: (store, { payload }) => {
//   //   store.items = [...store.items, payload];
//   // },
//   // [actions.deleteContactsItem]: (store, { payload }) =>
//   //   store.items.filter(item => item.id !== payload),
// });

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
