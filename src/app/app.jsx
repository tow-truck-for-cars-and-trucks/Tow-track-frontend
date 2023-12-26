import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { getPlan } from '../features/create-order/model/plan-slice';
import { getCarType } from '../features/create-order/model/car-type-slice';
import Main from '../pages/main/main';
import Preloader from '../shared/ui/preloader/preloader';

const ContactsPage = lazy(() => import('../pages/contacts-page/contacts-page'));
const Order = lazy(() => import('../pages/order/order'));
const RegisterPage = lazy(() => import('../pages/register-page/register-page'));
const SuccessOrderPage = lazy(() =>
  import('../pages/success-order-page/success-order-page')
);
const MyOrderPage = lazy(() => import('../pages/my-order-page/my-order-page'));
const ProtectedRoute = lazy(() => import('./router/ProtectedRoute'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlan());
    dispatch(getCarType());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/contacts"
        element={
          <Suspense fallback={<Preloader />}>
            <ContactsPage />
          </Suspense>
        }
      />
      <Route
        path="/order/:id"
        element={
          <ProtectedRoute
            forLoggedUser
            element={
              <Suspense fallback={<Preloader />}>
                <Order />
              </Suspense>
            }
          />
        }
      />
      <Route
        path="/success-order/:id"
        element={
          <ProtectedRoute
            forLoggedUser
            element={
              <Suspense fallback={<Preloader />}>
                <SuccessOrderPage />
              </Suspense>
            }
          />
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute
            element={
              <Suspense fallback={<Preloader />}>
                <RegisterPage />
              </Suspense>
            }
          />
        }
      />
      <Route
        path="/my-orders"
        element={
          <ProtectedRoute
            forLoggedUser
            element={
              <Suspense fallback={<Preloader />}>
                <MyOrderPage />
              </Suspense>
            }
          />
        }
      />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<Preloader />}>
            <ProtectedRoute
              forLoggedUser
              element={<h1>Эта страница в разработке</h1>}
            />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
