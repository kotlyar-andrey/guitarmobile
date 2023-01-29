import axios, {AxiosInstance} from 'axios';
import {REQUESTS_BASEURL, REQUESTS_TIMEOUT} from './consts';

/**
 * Исполнитель запросов на сервер
 */
export const requests: AxiosInstance = axios.create({
  baseURL: REQUESTS_BASEURL,
  timeout: REQUESTS_TIMEOUT,
});
