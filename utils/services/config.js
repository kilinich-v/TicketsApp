import axios from 'axios';

export const travelpayouts = axios.create({
  baseURL:
    'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/'
});
