import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsLoading = createAction('contacts/fetch/loading');
export const fetchContactsSuccess = createAction('contacts/fetch/success');
export const fetchContactsError = createAction('contacts/fetch/error');

// export const ContactsLoading = createAction('contacts/ /loading');
// export const ContactsSuccess = createAction('contacts/ /success');
// export const ContactsError = createAction(''contacts/ /error');

// export const ContactsLoading = createAction('contacts/ /loading');
// export const ContactsSuccess = createAction('contacts/ /success');
// export const ContactsError = createAction(''contacts/ /error');

export const addContactsItem = createAction(
  'contactsItem/add',
  (name, number) => {
    return {
      payload: { name, number, id: nanoid() },
    };
  }
);

export const deleteContactsItem = createAction('contactsItem/delete');

// Loading
//  Success
// Error
