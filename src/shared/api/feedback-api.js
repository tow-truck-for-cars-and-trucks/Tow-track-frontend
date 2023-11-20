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
    return request(`${this.baseUrl}/feedback/`, {}).then((res) => res.data);
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
