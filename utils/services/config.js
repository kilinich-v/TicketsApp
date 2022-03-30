import axios from 'axios';

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

export const tickets = axios.create({
  baseURL:
    'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2',
  headers: {
    'X-Access-Token': ACCESS_TOKEN,
    'X-RapidAPI-Host':
      'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
    'X-RapidAPI-Key': RAPIDAPI_KEY
  }
});

export const resource = axios.create({
  baseURL:
    'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data',
  headers: {
    'X-Access-Token': ACCESS_TOKEN,
    'X-RapidAPI-Host':
      'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
    'X-RapidAPI-Key': RAPIDAPI_KEY
  }
});
