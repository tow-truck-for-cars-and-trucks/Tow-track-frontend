import './contacts-info.scss';

function ContactsInfo() {
  return (
    <section className="contacts-info">
      <ul className="contacts-info__item">
        <li className="contacts-info__title">Адрес</li>
        <li className="contacts-info__description">
          <p className="contacts-info__text">123123, г. Москва,</p>
          <p className="contacts-info__text">ул. Ленинградская, 28А, стр. 6 </p>
        </li>
      </ul>
      <ul className="contacts-info__item">
        <li className="contacts-info__title">Телефон</li>
        <li className="contacts-info__description">8 800 111 2222</li>
      </ul>
      <ul className="contacts-info__item">
        <li className="contacts-info__title">E-mail</li>
        <li className="contacts-info__description">info@ttexpress.ru</li>
      </ul>
    </section>
  );
}

export default ContactsInfo;
