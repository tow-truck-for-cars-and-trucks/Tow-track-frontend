import { Navigate } from 'react-router-dom';

/**
 *
 * @param {boolean} forLoggedUser - field describing whether the route should be available to logged user
 * @param {boolean} loggedIn - flag describing whether the user is logged in
 * @param {ReactDOM} element - react component which should returned if the user is logged in
 * @returns protected component
 */
function ProtectedRoute({ forLoggedUser, loggedIn, element }) {
  if (forLoggedUser) {
    return loggedIn ? element : <Navigate to="/register" />;
  }
  return loggedIn ? <Navigate to="/" /> : element;
}

export default ProtectedRoute;
