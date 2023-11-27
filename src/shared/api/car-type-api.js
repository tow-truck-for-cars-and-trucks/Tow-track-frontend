import request from '../utils/utils';

const { REACT_APP_BASE_URL } = process.env;

class CarTypeApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getCarType() {
    return request(`${this.baseUrl}/cartype/`);
  }
}

const carTypeApi = new CarTypeApi({
  baseUrl: REACT_APP_BASE_URL,
});

export default carTypeApi;
