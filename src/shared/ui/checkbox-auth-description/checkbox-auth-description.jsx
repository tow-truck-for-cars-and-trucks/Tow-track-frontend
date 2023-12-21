import './checkbox-auth-decription.scss';

function CheckboxAuthDescription() {
  return (
    <div className="description" data-testid="description">
      <p className="description__title">Я даю своё согласие на обработку</p>
      <p className="description__title">персональных данных и соглашаюсь</p>
      <a href="#privacy-policy" className="description__link">
        {' '}
        с политикой конфиденциальности
      </a>
    </div>
  );
}

export default CheckboxAuthDescription;
