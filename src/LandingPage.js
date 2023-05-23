import React, { useState, useEffect } from 'react';

export default function WelcomeMessage({Header}){
    const [greeting, setGreeting] = useState('');
       
    
    useEffect(() => {
        fetch("http://localhost:5136/Greeting")
        .then(response => response.text())
        .then(data => {
            setGreeting(data)
          })
    }, []);
    

    return (
      <div>
        <div><Header/></div>        
        <h1>{greeting}</h1>
      </div>
    );  
}




  