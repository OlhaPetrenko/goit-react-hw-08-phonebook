// import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsLoading = createAction('contacts/fetch/loading');
export const fetchContactsSuccess = createAction('contacts/fetch/success');
export const fetchContactsError = createAction('contacts/fetch/error');

export const addContactLoading = createAction('contacts/add/loading');
export const addContactSuccess = createAction('contacts/add/success');
export const addContactError = createAction('contacts/add/error');

export const deleteContactLoading = createAction('contacts/delete/loading');
export const deleteContactSuccess = createAction('contacts/delete/success');
export const deleteContactError = createAction('contacts/delete/error');

// export const addContactsItem = createAction(
//   'contactsItem/add',
//   (name, number) => {
//     return {
//       payload: { name, phone: number, id: nanoid() },
//     };
//   }
// );

// export const deleteContactsItem = createAction('contactsItem/delete');

const actions = {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
};

export default actions;
