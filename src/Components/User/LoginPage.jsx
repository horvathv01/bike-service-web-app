import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../PageComponents/Header';
import serverConnection from '../ServerConnection';

export default function WelcomeMessage(){
    const [greeting, setGreeting] = useState('');
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
      async function fetchData(){
      let result = await serverConnection(null, "get", "Greeting")
      setGreeting(result);
      }
      fetchData();
    }, []);

    function Register(){
      navigate("/registration");
    }

function Login(){
  const credentialsParsed = btoa(userName + ":" + password);

    fetch("http://localhost:5136/access/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": credentialsParsed
      },
      credentials: "include",
      body: JSON.stringify()
    })
    .then(response => {
      if (response.ok) {
        navigate('/profile');
      } else {
        setUserName("");
        setPassword("");
        window.alert("Invalid username or password!");
      }
    })
  }

  function Register(){
    navigate("/registration");
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
        <button onClick={() => Register()}>Registration</button>
      </div>
    );  
}


  