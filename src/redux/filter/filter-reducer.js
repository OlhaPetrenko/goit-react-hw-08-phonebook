// import { SET_FILTER } from './filter-types';
import { createReducer } from '@reduxjs/toolkit';
import { setFiter } from './filter-actions';

const initialStore = '';

const filterReducer = createReducer(initialStore, {
  // [setFiter]: (store, { payload }) => payload,
  [setFiter]: (_, { payload }) => payload,
});

export default filterReducer;
