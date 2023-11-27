function getResponseData(response) {
  if (!response.ok) {
    return response
      .json()
      .then((err) =>
        Promise.reject(
          new Error(JSON.stringify({ 'Код ошибки': response.status, ...err }))
        )
      );
  }
  return response.json();
}

export default function request(url, options) {
  return fetch(url, options).then(getResponseData);
}
