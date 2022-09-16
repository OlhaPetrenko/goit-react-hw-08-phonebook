import { combineReducers } from 'redux';

import { filterSlice } from './filter/filter-slice';
import { itemsSlice } from './items/items-slice';

export const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});
