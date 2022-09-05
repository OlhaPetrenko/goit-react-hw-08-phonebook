import { SET_FILTER } from './filter-types';

export function setFiter(payload) {
  return {
    type: SET_FILTER,
    payload,
  };
}
