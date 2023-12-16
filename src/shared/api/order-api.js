import request from '../utils/utils';
import {
  mapOrderDataPriceToBackend,
  mapOrderPriceFromBackend,
  mapOrderDataToBackend,
  mapOrderDataFromBackend,
} from '../mappers/order-mapper';
import { getLocalStorageToken } from './storage-api';

const { REACT_APP_BASE_URL } = process.env;

class OrderApi {
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

  async createOrder(order) {
    const res = await request(`${this.baseUrl}/api/order/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(mapOrderDataToBackend(order)),
    });

    return mapOrderDataFromBackend(res);
  }

  async updateOrderStatus(id, newStatus) {
    const res = await request(`${this.baseUrl}/api/order/${id}/`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify({ status: newStatus }),
    });

    return mapOrderDataFromBackend(res);
  }

  async getOrder(id) {
    const res = await request(`${this.baseUrl}/api/order/${id}/`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    return mapOrderDataFromBackend(res);
  }

  async getAllOrders(status) {
    const res = await request(
      `${this.baseUrl}/api/order/?status__istartswith=${status}`,
      {
        method: 'GET',
        headers: this.getHeaders(),
      }
    );

    return res.map((r) => mapOrderDataFromBackend(r));
  }

  async getOrderPrice(order) {
    const res = await request(`${this.baseUrl}/api/order/total_price/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(mapOrderDataPriceToBackend(order)),
    });

    return mapOrderPriceFromBackend(res);
  }

  async deleteOrder(id, status) {
    const statusString = new URLSearchParams({ status }).toString();

    await request(`${this.baseUrl}/api/order/${id}/?${statusString}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
  }
}

const orderApi = new OrderApi({
  baseUrl: REACT_APP_BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default orderApi;
