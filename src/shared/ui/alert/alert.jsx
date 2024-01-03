import './alert.scss';
import WarnIcon from '../icons/warn-icon';

function Alert() {
  return (
    <div className="alert" data-testid="alert">
      <div className="alert__icon">
        <WarnIcon width="16px" height="16px" />
      </div>
      <p className="alert__description">
        Для погрузки понадобится свидетельство о регистрации ТС, водительское
        удостоверение или документы удостоверяющие личность
      </p>
    </div>
  );
}

export default Alert;
