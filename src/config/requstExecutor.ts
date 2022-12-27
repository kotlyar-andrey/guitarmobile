import axios, {AxiosInstance} from 'axios';

const TIMEOUT = 15000; // ms
// const BASEURL = 'http://guitar0.kotdatacenter.net/api/v1';
const BASEURL = 'http://10.0.2.2:8000/api/v1';

/**
 * Исполнитель запросов на сервер
 */
const requestExecutor: AxiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT,
});

export default requestExecutor;
