import { useEffect, createRef } from 'react';
import './popup.scss';
import CloseIcon from '../icons/close-icon';

function Popup({ children, active, setActive, contentBottom }) {
  const popupRef = createRef();

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        setActive(false);
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [active, setActive]);

  useEffect(() => {
    const handleFocus = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.relatedTarget)) {
        popupRef.current.focus();
      }
    };

    document.addEventListener('focusout', handleFocus);
    return () => document.removeEventListener('focusout', handleFocus);
  }, [active, setActive, popupRef]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [active]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setActive(false);
    }
  };

  return (
    <div>
      <div
        data-testid="popup"
        className={active ? 'popup popup_active' : 'popup'}
        role="button"
        tabIndex={0}
        onMouseDown={handleOverlay}
        ref={popupRef}
      >
        <div
          className={`popup__content ${
            contentBottom ? ' popup__content_bottom' : ''
          }`}
        >
          <button
            className="popup__close"
            type="button"
            aria-label="кнопка закрытия модального окна"
            onClick={() => setActive(false)}
          >
            <CloseIcon width="16px" height="16px" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
export default Popup;
