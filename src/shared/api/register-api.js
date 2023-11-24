import request from '../utils/utils';
import mapUserDataToBackend from '../mappers/user-mapper';

const { REACT_APP_BASE_URL } = process.env;

/* export default function register(data) {
  const mapped = mapUserDataToBackend(data);

  return request(`${REACT_APP_BASE_URL}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mapped),
  });
} */

class RegisterApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  postRegister(inputs) {
    const mapped = mapUserDataToBackend(inputs);

    return request(`${this.baseUrl}/auth/users/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(mapped),
    }).then((res) => res.data);
  }
}

const registerApi = new RegisterApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default registerApi;
