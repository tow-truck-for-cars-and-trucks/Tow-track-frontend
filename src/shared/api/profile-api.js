import mapProfileDataFromBackend from '../mappers/profile-mapper';
import request from '../utils/utils';
import { getLocalStorageToken } from './storage-api';

const { REACT_APP_BASE_URL } = process.env;

class ProfileApi {
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

  getProfile() {
    return request(
      `${this.baseUrl}/api/user/me/`,
      {
        method: 'GET',
        headers: this.getHeaders(),
      },
      mapProfileDataFromBackend
    ).then((res) => mapProfileDataFromBackend(res));
  }

  deleteProfile() {
    return request(`${this.baseUrl}/api/user/me/`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    }).then((res) => res);
  }
}

const profileApi = new ProfileApi({
  baseUrl: REACT_APP_BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default profileApi;
