import axios from 'axios';

const API = axios.create({
  baseURL: 'https://back-end-three-delta.vercel.app/api',
  headers: { 'Content-Type': 'application/json' },
});

export default API;
