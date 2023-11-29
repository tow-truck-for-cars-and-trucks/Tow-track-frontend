function setToLocalStorage(key, value) {
  if (value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  return localStorage.removeItem(key);
}

export function getLocalStorageAuth() {
  return localStorage.getItem('CREATE_AUTH_FORM');
}

export function setLocalStorageAuth(value) {
  return setToLocalStorage('CREATE_AUTH_FORM', value);
}

export function removeLocalStorageAuth() {
  return localStorage.removeItem('CREATE_AUTH_FORM');
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

export function getTariffStorage() {
  return JSON.parse(localStorage.getItem('TARIFF'));
}

export function setTariffStorage(value) {
  return setToLocalStorage('TARIFF', value);
}

export function getCarTypeStorage() {
  return JSON.parse(localStorage.getItem('CAR_TYPE'));
}

export function setCarTypeStorage(value) {
  return setToLocalStorage('CAR_TYPE', value);
}
