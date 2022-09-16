import instance from './auth-api';

export async function getContacts() {
  const response = await instance.get('/contacts');

  return response;
}

export async function addContact(data) {
  const response = await instance.post('/contacts', data);
  return response;
}

export async function deleteContact(id) {
  const response = await instance.delete(`/contacts/${id}`);
  return response;
}
