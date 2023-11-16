import './feedbacks.scss';
import { useState } from 'react';
import getFeedBack from '../../shared/api/api';
import Feedback from '../../shared/ui/feedback/feedback';

function Feedbacks() {
	const [allFeedbacks, setAllFeedbacks] = useState([]);

	getFeedBack()
		.then((feedbacks) => {
			setAllFeedbacks(feedbacks);
		})
		.catch((error) => {
			console.log(error);
		});

	return (
		<section className="feedbacks">
			<h1 className="feedbacks__title">Отзывы</h1>
			<div className="feedbacks__cards">
				<div className="feedbacks__card">
					{allFeedbacks.map((feedback) => (
						<Feedback feedback={feedback} key={feedback.id} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Feedbacks;