import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { contactsReducer } from 'redux/rootReducer';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,

//   whitelist: ['items'],
// };

// const contactsPersistedReducer = persistReducer(
//   contactsPersistConfig,
//   contactsReducer
// );

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
