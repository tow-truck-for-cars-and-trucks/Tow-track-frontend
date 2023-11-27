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
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    };
  }

  getFeedbacks() {
    return request(`${this.baseUrl}/feedback/`);
  }

  postFeedback(feedback) {
    return request(`${this.baseUrl}/feedback/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(feedback),
    }).then((res) => res.data);
  }

  getFeedback(id) {
    return request(`${this.baseUrl}/feedback/${id}/`, {
      method: 'GET',
      headers: this.getHeaders(),
    }).then((res) => res.data);
  }

  putFeedback(id) {
    return request(`${this.baseUrl}/feedback/${id}/`, {
      method: 'PUT',
      headers: this.getHeaders(),
    }).then((res) => res.data);
  }

  editFeedback(id, feedback) {
    return request(`${this.baseUrl}/feedback/${id}/`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(feedback),
    });
  }

  deleteFeedback(id) {
    return request(`${this.baseUrl}/feedback/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    });
  }
}

const feedbackApi = new FeedbackApi({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default feedbackApi;
