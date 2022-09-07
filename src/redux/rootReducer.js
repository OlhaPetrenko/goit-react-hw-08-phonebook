import { combineReducers } from 'redux';

// import itemsReducer from './items/items-reducer';
// import filterReducer from './filter/filter-reducer';

import { filterSlise } from './filter/filter-reducer';
import { itemsSlice } from './items/items-reducer';

// export const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

export const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlise.reducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
