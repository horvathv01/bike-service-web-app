export default function serverConnection(body, type, apiRoute) {
    const fetchObj = setFetch(body, type);

    return new Promise((resolve, reject) => {
      try {
        fetch(`https://localhost:7237/${apiRoute}`, fetchObj)
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


/*function ReturnAllFetchData(body){
const urlsAndObjects = { login: {
  url: "https://localhost:7237/login",
  body: {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({body})
  }
}, 
getUser: {
  url: "https://localhost:7237/users",
  body: {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }
}};



return urlsAndObjects;
}*/

//call this like: 
// ReturnAllFetchData(body).login.url;

// fetch(ReturnAllFetchData(body).login.url, ReturnAllFetchData(body).login.body)
// .then()