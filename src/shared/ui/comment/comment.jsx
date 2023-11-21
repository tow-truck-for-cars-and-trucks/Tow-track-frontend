import React from 'react';
import './comment.scss';
import CloseIcon from '../icons/close-icon';

/**
 * @param {string} content - initial text inside textarea
 * @param {string} variant - field determining textarea view
 * @param {number} initialCount - initial count of сharacters
 */
function Comment({
  content = '',
  variant = '',
  initialCount = 0,
  placeholder,
}) {
  const [count, setCount] = React.useState(initialCount);

  const handleChange = (e) => {
    setCount(e.target.value.length);
  };

  return (
    <div className="comment__container ">
      <textarea
        className={`comment__textarea ${
          variant ? `comment__textarea_variant-${variant}` : ''
        }`}
        placeholder={placeholder}
        onChange={handleChange}
      >
        {content}
      </textarea>
      {content !== '' && variant === 'writing' && (
        <>
          <div className="comment__close-icon">
            <CloseIcon width="16px" height="16px" />
          </div>
          <div className="comment__counter">{`${count}/100`}</div>
        </>
      )}
    </div>
  );
}
export default Comment;
