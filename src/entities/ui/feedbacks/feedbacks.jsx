import './feedbacks.scss';
import { useState } from 'react';
import getFeedBack from '../../../shared/api/api';
import Feedback from '../../../shared/ui/feedback/feedback';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

function Feedbacks() {
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const { elRef } = useHorizontalScroll();

  getFeedBack()
    .then((feedbacks) => {
      setAllFeedbacks(feedbacks);
    })
    .catch();

  return (
    <section className="feedbacks">
      <h1 className="feedbacks__title">Отзывы</h1>
      <div className="feedbacks__cards" ref={elRef}>
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
