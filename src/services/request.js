const request = (url, path, method, body) => {
  return fetch(`${url}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `Unable to ${method} from ${url}`;
      return json;
    });
};

export const get = (url, path) => request(url, path, 'GET');
