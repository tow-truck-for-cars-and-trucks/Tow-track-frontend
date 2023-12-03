import { Navigate, useLocation } from 'react-router-dom';

/**
 *
 * @param {boolean} forLoggedUser - field describing whether the route should be available to logged user
 * @param {boolean} loggedIn - flag describing whether the user is logged in
 * @param {ReactDOM} element - react component which should returned if the user is logged in
 * @returns protected component
 */
function ProtectedRoute({ forLoggedUser, loggedIn, element }) {
  const location = useLocation();

  if (forLoggedUser && !loggedIn) {
    return <Navigate to="/register" state={{ from: location }} />;
  }

  if (!forLoggedUser && loggedIn) {
    const { from } = location.state || { from: '/' };
    return <Navigate to={from} />;
  }

  return element;
}

export default ProtectedRoute;
