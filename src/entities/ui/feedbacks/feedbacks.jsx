import './feedbacks.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feedback from '../../../shared/ui/feedback/feedback';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';
import { getFeedbacks } from './model/feedback-slice';

function Feedbacks() {
  const dispatch = useDispatch();
  const feedbacks = useSelector((store) => store.feedbacks.allFeedbacks);
  const { elRef } = useHorizontalScroll();

  useEffect(() => {
    try {
      dispatch(getFeedbacks());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="feedbacks">
      <h2 className="feedbacks__title">Отзывы</h2>
      <div className="feedbacks__cards" ref={elRef}>
        <div className="feedbacks__card">
          {feedbacks.map((feedback) => (
            <Feedback feedback={feedback} key={feedback.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
