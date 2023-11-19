import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import ContactsPage from '../pages/contacts-page/contacts-page';
import Order from '../pages/order/order';
import AuthPage from '../pages/auth-page/auth-page';
import SuccessOrderPage from '../pages/success-order-page/success-order-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/order" element={<Order />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/success-order" element={<SuccessOrderPage />} />
    </Routes>
  );
}

export default App;
