import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import Contacts from '../../widget/contacts/contacts';

function ContactsPage() {
  return (
    <>
      <Header onCreateOrderClick={() => {}} />
      <Contacts />
      <Footer />
    </>
  );
}

export default ContactsPage;
