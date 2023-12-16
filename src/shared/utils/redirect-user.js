export default function redirectUnauthUser() {
  localStorage.clear();
  window.location.href = 'register?mode=login';
}
