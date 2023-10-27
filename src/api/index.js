import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

// init axios
function createInstance() {
  const _instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(_instance);
}

const instance = createInstance();

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
