import './comment.scss';
import { useCallback, useState } from 'react';
import CloseIcon from '../icons/close-icon';

/**
 * @param {string} variant - field determining textarea view
 * @param {number} initialCount - initial count of сharacters
 * @param {function} onChange: (e: string) => void - fired with the new value of the textarea each time it changes
 * @param {string} value - value displayed within the textarea
 */
function Comment({ value, onChange }) {
  const [count, setCount] = useState(0);

  const changeValue = useCallback((v) => {
    setCount(v.length);
    onChange(v);
  }, []);

  return (
    <div className="comment__container">
      <textarea
        className="comment__textarea"
        placeholder="Комментарий"
        value={value}
        onChange={(e) => {
          changeValue(e.target.value);
        }}
      />
      <div
        role="button"
        aria-label="Стереть текст"
        className="comment__close-icon"
        onMouseDown={() => {
          changeValue('');
        }}
        onTouchStart={() => {
          changeValue('');
        }}
        tabIndex={0}
      >
        <CloseIcon width="16px" height="16px" />
      </div>
      {value ? <div className="comment__counter">{`${count}/100`}</div> : null}
    </div>
  );
}
export default Comment;
