import { getContacts, addContact, deleteContact } from '../../api/contacts-api';
import actions from './items-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const response = await getContacts();
      //   console.log('response', response);
      dispatch(actions.fetchContactsSuccess(response.data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error.message));
    }
  };

  return func;
};

export const addContactItem = (name, number) => {
  const func = async dispatch => {
    try {
      dispatch(actions.addContactLoading());
      const response = await addContact(name, number);
      dispatch(actions.addContactSuccess(response.data));
    } catch (error) {
      dispatch(actions.addContactError(error.message));
    }
  };

  return func;
};

export const deleteContactItem = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.deleteContactLoading());
      await deleteContact(id);
      dispatch(actions.deleteContactSuccess(id));
    } catch (error) {
      dispatch(actions.deleteContactError(error.message));
    }
  };
  return func;
};
