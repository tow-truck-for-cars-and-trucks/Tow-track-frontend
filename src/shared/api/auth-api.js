import request from '../utils/utils';

const { REACT_APP_BASE_URL } = process.env;

class AuthApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  postLogin(inputs) {
    return request(`${this.baseUrl}/auth/token/login/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(inputs),
    }).then((res) => res.data);
  }

  postLogout(inputs) {
    return request(`${this.baseUrl}/auth/token/logout/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(inputs),
    }).then((res) => res.data);
  }
}

const authApi = new AuthApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default authApi;
