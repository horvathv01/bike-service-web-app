import React, { useState, useEffect } from 'react';

export function ServerConnection({url, body}){

    let post = {  method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }};

    let putObject = {  method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }};

    let getObject = {  method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }};

    let deleteObject = {  method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }};

    const [fetchObject, setFetchObject] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        fetch(url, fetchObject ?? null)
        .then(resp => resp.JSON())
        .then(data => setResponse(data));
    }, [fetchObject]);

    if(response != null && response != undefined){
        return response;
    }
    return null;
}

export function SetFetchObject(){
    return ServerConnection().setFetchObject;
}


