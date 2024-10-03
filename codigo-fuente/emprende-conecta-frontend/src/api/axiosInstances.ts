import axios, { AxiosInstance } from 'axios';

export const productInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/products/',
});