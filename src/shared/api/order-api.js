import request from '../utils/utils';
import {
  mapOrderDataPriceToBackend,
  mapOrderPriceFromBackend,
} from '../mappers/order-mapper';

const { REACT_APP_BASE_URL } = process.env;

class OrderApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getHeaders() {
    return {
      ...this.headers,
      authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  async getOrderPrice(order) {
    const res = await request(`${this.baseUrl}/order/total_price/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(mapOrderDataPriceToBackend(order)),
    });

    return mapOrderPriceFromBackend(res);
  }
}

const orderApi = new OrderApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default orderApi;
