import request from '../utils/utils';
import mapUserDataToBackend from '../mappers/user-mapper';

const { REACT_APP_BASE_URL } = process.env;

export default function register(data) {
  const mapped = mapUserDataToBackend(data);

  return request(`${REACT_APP_BASE_URL}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mapped),
  });
}
