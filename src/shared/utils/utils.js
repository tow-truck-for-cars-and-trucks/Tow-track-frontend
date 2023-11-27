function getResponseData(response) {
  if (!response.ok) {
    return Promise.reject(new Error(`Ошибка: ${response.status}`));
  }
  return response.json();
}

export default function request(url, options) {
  return fetch(url, options).then(getResponseData);
}
