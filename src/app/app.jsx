import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTariff } from './model/tariff-slice';
import { getCarType } from './model/car-type-slice';
import Main from '../pages/main/main';
import ContactsPage from '../pages/contacts-page/contacts-page';
import Order from '../pages/order/order';
import RegisterPage from '../pages/register-page/register-page';
import SuccessOrderPage from '../pages/success-order-page/success-order-page';
import MyOrderPage from '../pages/my-order-page/my-order-page';
import ProtectedRoute from './router/ProtectedRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTariff());
    dispatch(getCarType());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route
        path="/order/:id"
        element={<ProtectedRoute forLoggedUser element={<Order />} />}
      />
      <Route
        path="/success-order/:id"
        element={
          <ProtectedRoute forLoggedUser element={<SuccessOrderPage />} />
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/my-orders"
        element={<ProtectedRoute forLoggedUser element={<MyOrderPage />} />}
      />
    </Routes>
  );
}

export default App;
