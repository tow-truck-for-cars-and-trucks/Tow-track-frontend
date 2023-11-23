import request from '../utils/utils';

const { REACT_APP_BASE_URL } = process.env;

class TariffApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getTariffType() {
    return request(`${this.baseUrl}/tariff/`);
  }
}

const tariffApi = new TariffApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default tariffApi;
