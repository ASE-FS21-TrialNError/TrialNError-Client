import axios from 'axios';
import { getDomain } from './getDomain';

export const api = axios.create({
  baseURL: getDomain(),
  headers: { 'Content-Type': 'application/json' }
});

export const apiRecommender = axios.create({
  baseURL:  'https://trailnerror-python.herokuapp.com/',
  headers: { 'Content-Type': 'application/json; charset=utf-8'}
});


