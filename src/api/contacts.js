import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6319b9bb8e51a64d2beac553.mockapi.io/contacts',
  params: {
    _limit: 12,
  },
});

export async function getBooks() {
  const response = await instance.get('/');
  return response;
}
