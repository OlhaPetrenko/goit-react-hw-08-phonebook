import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContactItem,
  deleteContactItem,
} from './items-operations';

const initialStore = {
  items: [],
  loading: false,
  error: null,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: initialStore,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.items = [...payload];
      store.loading = false;
    },

    [fetchContacts.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
    },
    [addContactItem.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContactItem.fulfilled]: (store, { payload }) => {
      store.items = [...store.items, payload];
      store.loading = false;
    },
    [addContactItem.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
    },
    [deleteContactItem.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [deleteContactItem.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(item => item.id !== payload);
      store.loading = false;
    },

    [deleteContactItem.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
    },
  },
});
