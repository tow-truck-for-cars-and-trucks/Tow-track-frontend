import request from '../utils/utils';
import { mapUserDataFromBackend } from '../mappers/user-mapper';

const { REACT_APP_BASE_URL } = process.env;

class AuthApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  postLogin(inputs) {
    return request(
      `${this.baseUrl}/api/auth/token/login/`,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(inputs),
      },
      mapUserDataFromBackend
    ).then((res) => res.auth_token);
  }

  postLogout(inputs) {
    return request(`${this.baseUrl}/api/auth/token/logout/`, {
      method: 'POST',
      headers: this.headers,
      body: inputs,
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
