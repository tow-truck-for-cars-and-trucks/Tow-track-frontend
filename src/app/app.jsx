import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import ContactsPage from '../pages/contacts-page/contacts-page';
import Order from '../pages/order/order';
import RegisterPage from '../pages/register-page/register-page';
import SuccessOrderPage from '../pages/success-order-page/success-order-page';
import MyOrderPage from '../pages/my-order-page/my-order-page';
import ProtectedRoute from './router/ProtectedRoute';
import checkUserLogged from './model/validation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route
        path="/order/:id"
        element={
          <ProtectedRoute
            forLoggedUser
            loggedIn={checkUserLogged()}
            element={<Order />}
          />
        }
      />
      <Route
        path="/success-order"
        element={
          <ProtectedRoute
            forLoggedUser
            loggedIn={checkUserLogged()}
            element={<SuccessOrderPage />}
          />
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/my-orders"
        element={
          <ProtectedRoute
            forLoggedUser
            loggedIn={checkUserLogged()}
            element={<MyOrderPage />}
          />
        }
      />
    </Routes>
  );
}

export default App;
