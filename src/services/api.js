/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import axios from 'axios';

const api = axios.create({
  // baseURL: 'localhost:3000', // MacOS
   baseURL: 'http://192.168.15.14:3000', // Android
});

export default api;
