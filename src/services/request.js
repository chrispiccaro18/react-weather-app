const request = (url, path, method) => {
  // console.log(`${url}${path ? `/${path}` : ''}`);
  return fetch(`${url}${path ? `/${path}` : ''}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `Unable to ${method} from ${url}`;
      return json;
    });
};

export const get = (url, path) => request(url, path, 'GET');
