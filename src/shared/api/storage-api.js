function setToLocalStorage(key, value) {
  if (value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  return localStorage.removeItem(key);
}

export function getLocalStorageRegister() {
  return localStorage.getItem('CREATE_REGISTER_FORM');
}

export function setLocalStorageRegister(value) {
  return setToLocalStorage('CREATE_REGISTER_FORM', value);
}

export function removeLocalStorageRegister() {
  return localStorage.removeItem('CREATE_REGISTER_FORM');
}

export function getLocalStorageToken() {
  return JSON.parse(localStorage.getItem('token'));
}

export function setLocalStorageToken(value) {
  return setToLocalStorage('token', value);
}
