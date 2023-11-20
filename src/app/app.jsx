import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import ContactsPage from '../pages/contacts-page/contacts-page';
import Order from '../pages/order/order';
import RegisterPage from '../pages/register-page/register-page';
import SuccessOrderPage from '../pages/success-order-page/success-order-page';
import AuthPage from '../pages/auth/auth';
import ActiveOrder from '../pages/active-order/active-order';
import CompletOrder from '../pages/complet-order/complet-order';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/order" element={<Order />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/success-order" element={<SuccessOrderPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/active" element={<ActiveOrder />} />
      <Route path="/complet" element={<CompletOrder />} />
    </Routes>
  );
}

export default App;
