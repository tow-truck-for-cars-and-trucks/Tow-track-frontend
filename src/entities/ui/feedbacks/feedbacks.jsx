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
    dispatch(getFeedbacks());
  }, []);

  return (
    <section className="feedbacks" data-testid="feedbacks">
      <div className="feedbacks__container">
        <h2 className="feedbacks__title">Отзывы</h2>
        <p className="feedbacks__sort-text">Показать:</p>
        <select size={1} className="feedbacks__sort">
          <option selected value="new" className="feedbacks__sort-item">
            cначала новые
          </option>
          <option value="new" className="feedbacks__sort-item">
            cначала новые
          </option>
          <option value="new" className="feedbacks__sort-item">
            cначала новые
          </option>
        </select>
        <div className="feedbacks__cards" ref={elRef}>
          <div className="feedbacks__card">
            {feedbacks.map((feedback) => (
              <Feedback feedback={feedback} key={feedback.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
