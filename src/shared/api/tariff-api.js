import request from '../utils/utils';

const { REACT_APP_BASE_URL } = process.env;

class TariffApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getPlanType() {
    return request(`${this.baseUrl}/api/tariff/`);
  }
}

const tariffApi = new TariffApi({
  baseUrl: REACT_APP_BASE_URL || '',
});

export default tariffApi;
