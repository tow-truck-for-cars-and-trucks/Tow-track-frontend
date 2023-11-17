import './alert.scss';
import WarnIcon from '../icons/warn-icon';

function Alert() {
  return (
    <div className="alert">
      <WarnIcon width="16px" height="16px" />
      <p className="alert__description">
        Для погрузки понадобится свидетельство&nbsp;о&nbsp;регистрации&nbsp;ТС,
        водительское&nbsp;удостоверение или&nbsp;документы&nbsp;удостоверяющие
        личность
      </p>
    </div>
  );
}

export default Alert;
