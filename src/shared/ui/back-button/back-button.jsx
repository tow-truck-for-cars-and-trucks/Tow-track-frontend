import './back-button.scss';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '../icons/arrow-back-icon';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="Назад"
      className="back-button"
      onClick={() => navigate('/', { replace: true })}
    >
      <div className="back-button__icon">
        <ArrowBackIcon width="16px" height="16px" />
      </div>
      <span className="back-button__title">Назад</span>
    </button>
  );
}

export default BackButton;
