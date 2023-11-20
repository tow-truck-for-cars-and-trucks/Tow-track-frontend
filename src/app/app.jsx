import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import ContactsPage from '../pages/contacts-page/contacts-page';
import Order from '../pages/order/order';
import ActiveOrder from '../pages/active-order/active-order';
import CompletOrder from '../pages/complet-order/complet-order';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/order" element={<Order />} />
      <Route path="/active" element={<ActiveOrder />} />
      <Route path="/complet" element={<CompletOrder />} />
    </Routes>
  );
}

export default App;
