import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6319b9bb8e51a64d2beac553.mockapi.io/contactsq',
  params: {
    _limit: 22,
  },
});

export async function getContacts() {
  const response = await instance.get('/');

  return response;
}

export async function addContact(name, number) {
  const response = await instance.post('/', { name, phone: number });
  return response;
}

export async function deleteContact(id) {
  const response = await instance.delete(`/${id}`);
  return response;
}
