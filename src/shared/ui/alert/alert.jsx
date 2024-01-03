import './alert.scss';
import WarnIcon from '../icons/warn-icon';

function Alert() {
  return (
    <div className="alert" data-testid="alert">
      <div className="alert__icon">
        <WarnIcon width="16px" height="16px" />
      </div>
      <div className="alert__description">
        {/*
        Текст разделён на отдельные элементы,
        т.к html-спецсимволы (пример: &nbsp;)
        некорректно отображаются в safari
        на мобильных устройствах.
        */}
        <p className="alert__text">Для погрузки понадобится</p>
        <p className="alert__text">свидетельство о регистрации ТС,</p>
        <p className="alert__text">водительское удостоверение</p>
        <p className="alert__text">или документы удостоверяющие</p>
        <p className="alert__text">личность</p>
      </div>
    </div>
  );
}

export default Alert;
