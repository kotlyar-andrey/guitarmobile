import axios, {AxiosInstance} from 'axios';

const TIMEOUT = 15000; // ms
const BASEURL = 'http://guitar0.kotdatacenter.net/api/v1';

const requestExecutor: AxiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT,
});

export default requestExecutor;
