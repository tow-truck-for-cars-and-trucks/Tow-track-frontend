import request from '../utils/utils';

const { REACT_APP_BASE_URL } = process.env;

class CarTypeApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getCarType() {
    return request(`${this.baseUrl}/cartype/`).then((res) => res.data);
  }
}

const carTypeApi = new CarTypeApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default carTypeApi;
