function getResponseData(response) {
  return response.ok
    ? response.json()
    : response.json().then((e) => Promise.reject(e));
}

export default function request(url, options) {
  return fetch(url, options).then(getResponseData);
}
