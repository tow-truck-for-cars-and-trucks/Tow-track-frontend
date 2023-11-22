export function getLocalStorageAuth() {
  return localStorage.getItem('CREATE_AUTH_FORM');
}

export function setLocalStorageAuth(value) {
  return localStorage.setItem('CREATE_AUTH_FORM', JSON.stringify(value));
}

export function getLocalStorageRegister() {
  return localStorage.getItem('CREATE_REGISTER_FORM');
}

export function setLocalStorageRegister(value) {
  return localStorage.setItem('CREATE_REGISTER_FORM', JSON.stringify(value));
}

export function getLocalStorageOrder() {
  return localStorage.getItem('CREATE_ORDER_FORM');
}

export function setLocalStorageOrder(value) {
  return localStorage.setItem('CREATE_ORDER_FORM', JSON.stringify(value));
}
