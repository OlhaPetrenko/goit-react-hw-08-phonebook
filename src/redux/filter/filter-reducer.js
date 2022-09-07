// import { createReducer } from '@reduxjs/toolkit';
// import { setFilter } from './filter-actions';

import { createSlice } from '@reduxjs/toolkit';

const initialStore = '';

// const filterReducer = createReducer(initialStore, {
//   // [setFilter]: (store, { payload }) => payload,
//   [setFilter]: (_, { payload }) => payload,
// });

// export default filterReducer;

// ================================== createSlice

export const filterSlise = createSlice({
  name: 'filter',
  initialState: initialStore,
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});
