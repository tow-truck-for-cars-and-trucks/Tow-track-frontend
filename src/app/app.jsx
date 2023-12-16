import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPlan } from '../features/create-order/model/plan-slice';
import { getCarType } from '../features/create-order/model/car-type-slice';
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
    try {
      dispatch(getPlan());
    } catch (error) {
      console.log(error);
    }
    try {
      dispatch(getCarType());
    } catch (error) {
      console.log(error);
    }
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
      <Route
        path="/register"
        element={<ProtectedRoute element={<RegisterPage />} />}
      />
      <Route
        path="/my-orders"
        element={<ProtectedRoute forLoggedUser element={<MyOrderPage />} />}
      />
    </Routes>
  );
}

export default App;
