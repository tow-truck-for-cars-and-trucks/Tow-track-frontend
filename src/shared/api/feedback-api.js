// import feedback from '../utils/test-review.json';
import request from '../utils/utils';

const { REACT_APP_BASE_URL } = process.env;

// async function getFeedBack() {
//   return feedback;
// }
class FeedbackApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getFeedbacks() {
    return request(`${this.baseUrl}/feedback/`).then((res) => res.data);
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

// export default getFeedBack;
export default feedbackApi;
