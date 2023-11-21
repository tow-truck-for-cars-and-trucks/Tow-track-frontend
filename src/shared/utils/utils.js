function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
  return res.json();
}

export default function request(url, options) {
  return fetch(url, options).then(getResponseData);
}
