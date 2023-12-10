import request from '../utils/utils';

const { REACT_APP_BASE_URL } = process.env;

class FeedbackApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getHeaders() {
    return {
      ...this.headers,
      authorization: `Token ${localStorage.getItem('token')}`,
    };
  }

  getFeedbacks() {
    return request(`${this.baseUrl}/api/feedback/`);
  }

  async postFeedback(feedback) {
    const res = await request(`${this.baseUrl}/api/feedback/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(feedback),
    });
    return res;
  }

  async getFeedback(id) {
    const res = await request(`${this.baseUrl}/api/feedback/${id}/`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
    return res;
  }

  async putFeedback(id) {
    const res = await request(`${this.baseUrl}/api/feedback/${id}/`, {
      method: 'PUT',
      headers: this.getHeaders(),
    });
    return res;
  }

  async editFeedback(id, feedback) {
    await request(`${this.baseUrl}/api/feedback/${id}/`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(feedback),
    });
  }

  async deleteFeedback(id) {
    await request(`${this.baseUrl}/api/feedback/${id}/`, {
      method: 'DELETE',
      headers: this.headers,
    });
  }
}

const feedbackApi = new FeedbackApi({
  baseUrl: REACT_APP_BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default feedbackApi;
