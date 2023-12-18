import request from '../utils/utils';
import { getLocalStorageToken } from './storage-api';
import {
  mapFeedbackDataToBackend,
  mapFeedbackDataFromBackend,
} from '../mappers/feedback-mapper';

const { REACT_APP_BASE_URL } = process.env;

class FeedbackApi {
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

  async getFeedbacks() {
    const res = await request(`${this.baseUrl}/api/feedback/`);

    return res.map((r) => mapFeedbackDataFromBackend(r));
  }

  async createFeedback(feedback, id) {
    const res = await request(`${this.baseUrl}/api/feedback/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(
        mapFeedbackDataToBackend({ ...feedback, order: id })
      ),
    });
    return mapFeedbackDataFromBackend(res);
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
