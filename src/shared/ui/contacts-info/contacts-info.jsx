import './contacts-info.scss';

function ContactsInfo() {
  return (
    <section className="contacts-info">
      <ul className="contacts-info__item">
        <li className="contacts-info__title">Адрес</li>
        <li className="contacts-info__description">
          123123,&nbsp;г.&nbsp;Москва,
          ул.&nbsp;Ленинградская,&nbsp;28А,&nbsp;стр.&nbsp;6{' '}
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
