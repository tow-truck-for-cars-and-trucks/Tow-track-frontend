import request from '../utils/utils';

const { REACT_APP_BASE_URL } = process.env;

class AddressHintsApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getAddressHints(address) {
    return request(`${this.baseUrl}/api/addresshints/?text=${address}`);
  }
}

const addressHintsApi = new AddressHintsApi({
  baseUrl: REACT_APP_BASE_URL || '',
});

export default addressHintsApi;
