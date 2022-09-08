import { getBooks } from '../../api/contacts';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from './items-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    dispatch(fetchContactsLoading());
    try {
      const response = await getBooks();
      //   console.log('response', response);
      dispatch(fetchContactsSuccess(response.data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };

  return func;
};
