const request = (url, path, method) => {
  const isPath = path ? `/${path}` : '';
  
  return fetch(`${url}${isPath}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `Unable to ${method} from ${url}`;
      return json;
    });
};

export const get = (url, path) => request(url, path, 'GET');
