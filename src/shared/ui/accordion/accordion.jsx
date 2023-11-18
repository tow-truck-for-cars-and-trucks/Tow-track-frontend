import { useState } from 'react';
import './accordion.scss';
import ArrowDownIcon from '../icons/arrow-down-icon';
import ArrowUpIcon from '../icons/arrow-up-icon';

/**
 * @param {string} title - title of the accordion
 * @param {boolean} withBorder - accordion style with or without border
 */
function Accordion({ title, children, withBorder }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={`accordion
    ${withBorder ? 'accordion_with-border' : ''}`}
    >
      <div className="accordion__header">
        <h2 className="accordion__title">{title}</h2>
        {!isShow && (
          <button
            type="button"
            aria-label="Развернуть"
            className="accordion__icon"
            onClick={() => setIsShow(true)}
          >
            <ArrowDownIcon width="16px" height="16px" />
          </button>
        )}
        {isShow && (
          <button
            type="button"
            aria-label="Свернуть"
            className="accordion__icon"
            onClick={() => setIsShow(false)}
          >
            <ArrowUpIcon width="16px" height="16px" />
          </button>
        )}
      </div>
      {isShow && (
        <div className={isShow ? 'accordion-content_opened' : ''}>
          {children}
        </div>
      )}
    </div>
  );
}

Accordion.defaultProps = {
  isShow: false,
  withBorder: true,
};

export default Accordion;
