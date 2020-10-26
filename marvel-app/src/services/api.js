import axios from 'axios';

// conexão com a api
const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    apikey: 'c151f0fcb00d03cc716aefb4fa752a4d',
  },
});

export default api;
