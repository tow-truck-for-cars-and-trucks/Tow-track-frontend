import './feedback.scss';
import StarFillIcon from '../icons/star-fill-icon';

/**
 * @param {number} score - rating from 0 to 5
 * @param {string} name - author of the comment
 * @param {string} feedback - comment text
 */

function Feedback({ feedback }) {
  return (
    <article>
      <div className="feedback-card">
        <div>
          <StarFillIcon width="16px" height="16px" color="#FFCC00" />
          <span className="feedback-card__rating">{feedback.score}</span>
        </div>
        <h2 className="feedback-card__name">{feedback.name}</h2>
        <p className="feedback-card__feedback">{feedback.comment}</p>
      </div>
    </article>
  );
}

Feedback.defaultProps = {
  rating: 'some-rating',
};

export default Feedback;
