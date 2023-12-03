class ResponseError extends Error {
  constructor(message, response, error) {
    super(message);
    this.response = response;
    this.error = error;
  }
}

function getResponseData(response, mapper) {
  if (!response.ok) {
    return response
      .json()
      .then((error) =>
        Promise.reject(
          new ResponseError(
            'Response Error',
            response,
            response.status === 400 && mapper ? mapper(error) : error
          )
        )
      );
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export default function request(url, options, mapper) {
  return fetch(url, options).then((response) =>
    getResponseData(response, mapper)
  );
}
