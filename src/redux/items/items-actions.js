import { nanoid } from 'nanoid';

import { ADD_CONTACTS_ITEM, DELETE_CONTACTS_ITEM } from './items-types';

export function addContactsItem(name, number) {
  return {
    type: ADD_CONTACTS_ITEM,
    payload: { name, number, id: nanoid() },
  };
}
export function deleteContactsItem(payload) {
  return {
    type: DELETE_CONTACTS_ITEM,
    payload,
  };
}
