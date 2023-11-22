import './comment.scss';
import CloseIcon from '../icons/close-icon';

/**
 * @param {string} content - initial text inside textarea
 * @param {string} variant - field determining textarea view
 * @param {number} initialCount - initial count of сharacters
 */
function Comment({ content, value, onChange }) {
  return (
    <div className="comment__container">
      <textarea
        className="comment__textarea"
        placeholder="Комментарий"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {content}
      </textarea>
      <div
        role="button"
        aria-label="Стереть текст"
        className="comment__close-icon"
        onMouseDown={() => {
          onChange('');
        }}
        onTouchStart={() => {
          onChange('');
        }}
        tabIndex={0}
      >
        <CloseIcon width="16px" height="16px" />
      </div>
    </div>
  );
}
export default Comment;
