import { Navigate, useLocation } from 'react-router-dom';
import checkUserLogged from '../model/validation';

/**
 *
 * @param {boolean} forLoggedUser - field describing whether the route should be available to logged user
 * @param {ReactDOM} element - react component which should returned if the user is logged in
 * @returns protected component
 */
function ProtectedRoute({ forLoggedUser, element }) {
  const location = useLocation();
  const loggedIn = checkUserLogged();

  if (forLoggedUser && !loggedIn) {
    return <Navigate to="/register?mode=login" state={{ from: location }} />;
  }

  if (!forLoggedUser && loggedIn) {
    const { from } = location.state || { from: '/' };
    return <Navigate to={from} />;
  }

  return element;
}

export default ProtectedRoute;
