import './review.scss';
import StarFillIcon from '../icons/star-fill-icon';

/**
 * @param {number} rating - rating from 0 to 5
 * @param {string} name - author of the comment
 * @param {string} feedback: comment text
 */

function Review({ rating, name, feedback }) {
	return (
		<article>
			<div className="review-card">
				<div>
					<StarFillIcon width="16px" height="16px" />
					<span className="review-card__rating">{rating}</span>
				</div>
				<h2 className="review-card__name">{name}</h2>
				<p className="review-card__feedback">{feedback}</p>
			</div>
		</article>
	);
}

Review.defaultProps = {
	rating: 'some-rating',
};

export default Review;
