import './popup-reviews.scss';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Popup from '../../../shared/ui/popup/popup';
import { createNewFeedback } from '../feedbacks/model/feedback-slice';
import Checkbox from '../../../shared/ui/checkbox/checkbox';
import Button from '../../../shared/ui/button/button';
import Comment from '../../../shared/ui/comment/comment';
import ButtonStar from '../../../shared/ui/button-star/button-star';

function PopupReviews({ isOpen, onClose, name, id }) {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      score: 0,
      comment: '',
      onTimeCheckbox: false,
      questionCheckbox: false,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (feedback) => {
    try {
      await dispatch(createNewFeedback({ feedback, id })).unwrap();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="popup-reviews">
      <Popup active={isOpen} setActive={onClose}>
        <form className="popup-reviews__form" name={name} onSubmit={onSubmit}>
          <h2 className="popup-reviews__title">Как все прошло?</h2>
          <div className="popup-reviews__stars">
            <Controller
              name="score"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <ButtonStar value={value} onChange={onChange} />
              )}
            />
          </div>
          <Controller
            name="onTimeCheckbox"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Checkbox
                width="24px"
                height="24px"
                value={value}
                onChange={onChange}
                isRight
              >
                <span className="popup-reviews__text">
                  {' '}
                  Водитель приехал вовремя?
                </span>
              </Checkbox>
            )}
          />
          <Controller
            name="questionCheckbox"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Checkbox
                width="24px"
                height="24px"
                value={value}
                onChange={onChange}
                isRight
              >
                <span className="popup-reviews__text">
                  {' '}
                  Что еще можно спросить?
                </span>
              </Checkbox>
            )}
          />
          <h3 className="popup-reviews__subtitle">Комментарий</h3>
          <Controller
            name="comment"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Comment
                placeholder="Вы можете оставить отзыв"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Button
            label="Оставить отзыв"
            primary
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
          />
        </form>
      </Popup>
    </section>
  );
}
export default PopupReviews;
