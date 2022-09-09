import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from 'redux/rootReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
