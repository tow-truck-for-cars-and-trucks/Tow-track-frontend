const checkUserLogged = () => !!localStorage.getItem('token');

export default checkUserLogged;
