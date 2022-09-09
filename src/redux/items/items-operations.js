import { getContacts, addContact, deleteContact } from 'api/contacts-api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactItem = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await addContact(data.name, data.number);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContactItem = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

// ============================================  operations without Splice
// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchContactsLoading());
//       const response = await getContacts();
//       console.log('response', response);
//       dispatch(actions.fetchContactsSuccess(response.data));
//     } catch (error) {
//       dispatch(actions.fetchContactsError(error.message));
//     }
//   };

//   return func;
// };

// ======================
// export const addContactItem = (name, number) => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.addContactLoading());
//       const response = await addContact(name, number);
//       dispatch(actions.addContactSuccess(response.data));
//     } catch (error) {
//       dispatch(actions.addContactError(error.message));
//     }
//   };

//   return func;
// };

// ==============================
// export const deleteContactItem = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.deleteContactLoading());
//       await deleteContact(id);
//       dispatch(actions.deleteContactSuccess(id));
//     } catch (error) {
//       dispatch(actions.deleteContactError(error.message));
//     }
//   };
//   return func;
// };
