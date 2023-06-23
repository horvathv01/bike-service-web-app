import ServerUrlAndPort from "./ServerURLAndPort";

export default function serverConnection(body, type, apiRoute) {
    const fetchObj = setFetch(body, type);

    return new Promise((resolve, reject) => {
      console.log(`${ServerUrlAndPort().host}://${ServerUrlAndPort().url}:${ServerUrlAndPort().port}/${apiRoute}`)
      try {
        fetch(`${ServerUrlAndPort().host}://${ServerUrlAndPort().url}:${ServerUrlAndPort().port}/${apiRoute}`, fetchObj)
        .then(response => {
          const contentType = response.headers.get('Content-Type');
          if(contentType && contentType.includes('application/json')){
              return response.json();
          } else {
              return response.text();
          }
        })
        .then(data => resolve(data))
        .catch(error => reject(error))
      } catch (error) {
        reject(error);
      }
    });
  };


function setFetch(body, type) {
  const commonHeaders = {
    'Content-type': 'application/json; charset=UTF-8'
  };

  let fetchObject = {};

  switch (type) {
    case 'get':
      fetchObject = { method: 'GET', headers: commonHeaders };
      break;
    case 'post':
      fetchObject = { method: 'POST', body: JSON.stringify(body), headers: commonHeaders };
      break;
    case 'put':
      fetchObject = { method: 'PUT', body: JSON.stringify(body), headers: commonHeaders };
      break;
    case 'delete':
      fetchObject = { method: 'DELETE', headers: commonHeaders };
      break;
    default:
      fetchObject = { method: 'GET', headers: commonHeaders };
      break;
  }
  return fetchObject;
}