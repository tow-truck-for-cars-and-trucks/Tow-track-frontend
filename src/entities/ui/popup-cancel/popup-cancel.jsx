import './popup-cancel.scss';
import { useEffect, createRef, useRef } from 'react';
import { useSelector } from 'react-redux';
import { isPopupOpen } from '../../../shared/ui/popup/model/popup-slice';
import Button from '../../../shared/ui/button/button';

/**
 * @param {boolean} isOpen - selected popup
 * @param {string} messageText - defines popup text
 * @param {string} secondaryText - defines text of confirm button
 * @param {function} onClickPrimary - callback upon return
 * @param {function} onClickSecondary - callback upon confirmation
 */
function PopupCancel({
  isOpen,
  messageText,
  secondaryText,
  onClickPrimary,
  onClickSecondary,
  children,
}) {
  const isOpenCancellations = useSelector((state) =>
    isPopupOpen(state, 'popup-cancellations')
  );

  const popupCancelRef = createRef();
  const primaryRef = useRef();

  useEffect(() => {
    const handleFocus = (e) => {
      if (
        popupCancelRef.current &&
        !popupCancelRef.current.contains(e.relatedTarget)
      )
        primaryRef.current.focus();
    };

    document.addEventListener('focusout', handleFocus);
    if (isOpenCancellations)
      document.removeEventListener('focusout', handleFocus);
    return () => document.removeEventListener('focusout', handleFocus);
  }, [isOpenCancellations, popupCancelRef, primaryRef]);

  useEffect(() => {
    if (isOpen && !isOpenCancellations) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isOpenCancellations]);

  return (
    <div>
      <div
        data-testid="popup-cancel-order"
        className={isOpen ? 'popup-cancel active' : 'popup-cancel'}
      >
        <div className="popup-cancel__content">
          <h1 className="popup-cancel__title"> {messageText}</h1>
          <div className="popup-cancel__btn" ref={popupCancelRef}>
            <Button
              label="Вернуться"
              primary
              onClick={onClickPrimary}
              buttonRef={primaryRef}
            />
            <Button label={`Да, ${secondaryText}`} onClick={onClickSecondary} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
export default PopupCancel;
