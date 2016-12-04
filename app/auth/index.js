export function authFetch(path, params){
  params = params || {};
  let request = new Request('path', params);
  request.set('authorization', 'Bearer ' + token);
  return fetch(request);
}
