import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContactsItem = createAction(
  'contactsItem/add',
  (name, number) => {
    return {
      payload: { name, number, id: nanoid() },
    };
  }
);

export const deleteContactsItem = createAction('contactsItem/delete');
