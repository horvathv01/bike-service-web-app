import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../PageComponents/Header';

export default function Registration(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const[phone, setPhone] = useState("");
    const [introduction, setIntroduction] = useState("");
    const navigate = useNavigate();

    function validateUserInput(){
        if(name == ""){
            window.alert("Name field cannot be empty!");
            return false;
        }
        if(!validateEmail()){
            window.alert("Invalid e-mail address!");
            setEmail("");
            return false;
        }
        if(!checkPasswordMatch()){
            window.alert("Passwords do not match!");
            setPassword("");
            setPasswordConfirm("");
            return false;
        }
        if(!validatePassword()){
            window.alert("A password has to be at least 6 characters long, and has to contain at least one of these: uppercase letters, lowercase letters, numbers, symbols (!@#$%^&*)!");
            setPassword("");
            setPasswordConfirm("");
            return false;
        }
        if(!validatePhone()){
            window.alert("Invalid phone number!");
            setPhone("");
            return false;
        }
        return true;
    }

    function validatePassword(){
        if(!checkPasswordMatch()) return false;
        if(password.length < 6) return false;
        if(!/[A-Z]/.test(password)) return false;
        if(!/[a-z]/.test(password)) return false;
        if(!/\d/.test(password)) return false;
        if(!/[!@#$%^&*]/.test(password)) return false;
        return true;
    }

    function checkPasswordMatch(){
        if(password !== passwordConfirm){
            return false;
        }
        return true;
    }

    function validatePhone(){
        //cannot be empty --> return false
        if(phone == ""){
            return false;
        }
        //should contain numbers + a few allowed characters only: "+", "/", "-"
        const allowedChars = "+/-0123456789";
        for(let i = 0; i < phone.length; i++){
            const char = phone.charAt(i);
            if(!allowedChars.includes(char)){
                return false;
            }
        }

        //should have min. length of 7, max length of 16? (I don't really know)
        if(phone.length < 7 || phone.length > 16){
            return false;
        }
        //valid:
        return true;
    }

    function validateEmail(){
        //cannot be empty --> return false
        if(!email || email == "") return false;
        //search for @ --> should have only one
        const atIndex = email.indexOf("@");
        if(atIndex === -1 || email.indexOf("@", atIndex + 1) !== -1) return false;
        //should have at least one dot around end
        if(email.lastIndexOf(".") < atIndex + 2) return false;
        //should have stuff before @
        //should have stuff after @
        if(atIndex == 0 || atIndex == email.length - 1) return false;
        //cannot have dot before/after @
        if(email[atIndex - 1] === "." || email[atIndex + 1] === ".") return false;
        return true;
        //if all above are true: setEmail(email); return true;
        //else: setEmail(null);, window.alert("Invalid e-mail address!"); return false;
    }

    function register(){
        if(!validateUserInput()){
            return;
        }
        const userDto = {
            name,
            email,
            password,
            phone,
            introduction,
            premium: false,
            bikes: [],
            tours: [],
            transactionHistory: [],
            roles: []
          };
      
          fetch('http://localhost:5136/access/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'BikeServiceTokenSuperSafeAwesomeYea'
            },
            body: JSON.stringify(userDto)
          })
            .then(response => {
              if (response.ok) {
                window.alert("Registration successful! Please log in!");
                navigate('/');
              } else {
                window.alert("Something went wrong!");
              }
            })
            .catch(error => {
            });
        }
    
    
    
    
    return(
        <div>
            <div>
            <Header/>       
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