import { combineReducers } from 'redux';

import itemsReducer from './items/items-reducer';
import filterReducer from './filter/filter-reducer';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReduser = combineReducers({
  contacts: contactsReducer,
});

export default rootReduser;
