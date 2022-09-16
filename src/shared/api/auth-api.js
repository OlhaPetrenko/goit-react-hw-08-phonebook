import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export async function registerUser(data) {
  const response = await instance.post('/users/signup', data);
  instance.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
  return response;
}

export async function loginUser(data) {
  const response = await instance.post('/users/login', data);
  instance.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
  return response;
}

export default instance;

export async function logoutUser() {
  const response = await instance.post('/users/logout');
  instance.defaults.headers.common.authorization = '';
  return response;
}

export async function currentUser(token) {
  try {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await instance.get('/users/current');
    return response;
  } catch (error) {
    instance.defaults.headers.common.authorization = '';
    throw error;
  }
}
