import request from '../utils/utils';
import {
  mapAuthDataFromBackend,
  mapAuthDataToBackend,
} from '../mappers/user-mapper';
import { getLocalStorageToken } from './storage-api';

const { REACT_APP_BASE_URL } = process.env;

class AuthApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getHeaders() {
    return {
      ...this.headers,
      authorization: `Token ${getLocalStorageToken()}`,
    };
  }

  postLogin(inputs) {
    return request(
      `${this.baseUrl}/api/auth/token/login/`,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(mapAuthDataToBackend(inputs)),
      },
      mapAuthDataFromBackend
    ).then((res) => res.auth_token);
  }

  postLogout() {
    return request(`${this.baseUrl}/api/auth/token/logout/`, {
      method: 'POST',
      headers: this.getHeaders(),
    }).then((res) => res);
  }
}

const authApi = new AuthApi({
  baseUrl: REACT_APP_BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default authApi;
