import './contacts.scss';
import ContactsMap from '../../entities/ui/contacts-map/contacts-map';
import PagesTitle from '../../shared/ui/pages-title/pages-title';

function Contacts() {
  return (
    <main className="contacts">
      <div className="contacts__header">
        <PagesTitle title="Контакты" />
        <p className="contacts__subtitle">Работаем 24/7</p>
      </div>
      <ContactsMap />
    </main>
  );
}

export default Contacts;
