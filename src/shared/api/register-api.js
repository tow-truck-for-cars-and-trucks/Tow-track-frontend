import request from '../utils/utils';
import mapUserDataToBackend from '../mappers/user-mapper';

const { REACT_APP_BASE_URL } = process.env;

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
    }).then((res) => res);
  }
}

const registerApi = new RegisterApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default registerApi;
