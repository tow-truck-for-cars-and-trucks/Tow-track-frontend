import './feedbacks.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feedback from '../../../shared/ui/feedback/feedback';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';
import { getFeedbacks } from '../../../features/create-order/model/feedback-slice';

function Feedbacks() {
  const dispatch = useDispatch();
  const allFeedbacks = useSelector((store) => store.allFeedbacks.feedbacks);
  const { elRef } = useHorizontalScroll();

  useEffect(() => {
    dispatch(getFeedbacks());
  }, []);

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
