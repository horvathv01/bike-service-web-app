import React, { useState } from 'react';
import Header from '../PageComponents/Header';

export default function Registration(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const[phone, setPhone] = useState("");
    const [introduction, setIntroduction] = useState("");

    function validateUserInput(){
        if(name == ""){
            window.alert("Name field cannot be empty!");
            return false;
        }
        if(email == ""){
            window.alert("Email field cannot be empty!");
            return false;
        }
        if(!checkPasswordMatch()){
            return false;
        }
        if(!validatePhone()){
            return false;
        }
        return true;
    }

    function checkPasswordMatch(){
        if(password !== passwordConfirm){
            setPassword("");
            setPasswordConfirm("");
            window.alert("Passwords do not match!");
            return false;
        }
        return true;
    }

    function validatePhone(){
        //cannot be empty --> return false
        //should contain numbers + a few allowed characters only: "+", "/", "-"
        //should have min. length of 10, max length of 16? (I don't really know)
        //if phone number is valid: return true
        //else return false;
    }

    function validateEmail(email){
        //cannot be empty --> return false
        //search for @ --> should have only one
        //should have at least one dot around end
        //should have stuff before @
        //should have stuff after @
        //cannot have dot before/after @
        //if all above are true: setEmail(email); return true;
        //else: setEmail(null);, window.alert("Invalid e-mail address!"); return false;
    }

    function register(){
        if(!validateUserInput()){
            return;
        }
        //fetch POST to endpoint with valid user data
    }
    
    
    
    return(
        <div>
            <div>
        <div><Header/></div>        
    </div>
            <h1>Please input your information!</h1>
            <p>Name:</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Email:</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <p>Password:</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <p>Confirm Password:</p>
            <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}></input>
            <p>Phone:</p>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <p>Introduction (optional):</p>
            <textarea value={introduction} onChange={(e) => setIntroduction(e.target.value)}></textarea>
            <button onClick={() => register()}>Register</button>
        </div>
    )
}