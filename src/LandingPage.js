import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';



export default function WelcomeMessage({Header}){
    const [greeting, setGreeting] = useState('');
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
       


    useEffect(() => {
        fetch("http://localhost:5136/Greeting")
        .then(response => response.text())
        .then(data => {
            setGreeting(data)
          })
    }, []);


  function Login(){
      fetch("http://localhost:5136/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userName, password})
      })
      .then(response => response.json())
      .then(data => {
        if(data.status.ToLowerCase === "ok"){
          setUser(data.user.Id);
          navigate("/webshop");
        } else {
          setUserName("");
          setPassword("");
          window.alert("Invalid username or password!");
        }
      })
    }

    return (
      <div>
        <div><Header/></div>        
        <h1>{greeting}</h1>
        <p>User name</p>
        <input id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
        <p>Password</p>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={() => Login()}>Login</button>
      </div>
    );  
}


  