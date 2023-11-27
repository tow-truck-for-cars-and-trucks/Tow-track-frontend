import request from '../utils/utils';

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

  postOrder() {
    // const mapped = mapOrderDataToBackend(data);

    return request(`${this.baseUrl}/order/`, {
      // body: mapped,
      method: 'POST',
      headers: this.getHeaders(),
    }).then((res) => res.data);
  }
}

const orderApi = new OrderApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default orderApi;
