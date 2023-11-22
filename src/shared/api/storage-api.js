export function setLocalStorageAuth() {
  return localStorage.getItem('CREATE_AUTH_FORM');
}

export function getLocalStorageAuth(value) {
  return localStorage.setItem('CREATE_AUTH_FORM', JSON.stringify(value));
}

export function setLocalStorageRegister() {
  return localStorage.getItem('CREATE_REGISTER_FORM');
}

export function getLocalStorageRegister(value) {
  return localStorage.setItem('CREATE_REGISTER_FORM', JSON.stringify(value));
}

export function setLocalStorageOrder() {
  return localStorage.getItem('CREATE_ORDER_FORM');
}

export function getLocalStorageOrder(value) {
  return localStorage.setItem('CREATE_ORDER_FORM', JSON.stringify(value));
}
