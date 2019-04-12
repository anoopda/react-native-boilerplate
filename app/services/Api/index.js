import Axios from 'axios';

export const Api = Axios.create({
    baseURL: 'http://www.mocky.io',
})

Api.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  })
;

export const API_LOGIN  =  '/v2/5185415ba171ea3a00704eed';
