import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../PageComponents/Header';
import { Button, Col, Form, Row} from 'react-bootstrap';

export default function Registration(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const[phone, setPhone] = useState("");
    const [introduction, setIntroduction] = useState("");
    const navigate = useNavigate();

    function validateUserInput(){
        if(name === ""){
            window.alert("Name field cannot be empty!");
            return false;
        }
        if(!validateEmail(email)){
            window.alert("Invalid e-mail address!");
            setEmail("");
            return false;
        }
        if(!checkPasswordMatch(password, passwordConfirm)){
            window.alert("Passwords do not match!");
            setPassword("");
            setPasswordConfirm("");
            return false;
        }
        if(!validatePassword(password, passwordConfirm)){
            window.alert("A password has to be at least 6 characters long, and has to contain at least one of these: uppercase letters, lowercase letters, numbers, symbols (!@#$%^&*)!");
            setPassword("");
            setPasswordConfirm("");
            return false;
        }
        if(!validatePhone(phone)){
            window.alert("Invalid phone number!");
            setPhone("");
            return false;
        }
        return true;
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
      
          fetch('https://localhost:7237/access/register', {
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
                navigate('/login');
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
          <Header />
        </div>
        <h1>Register to Bike Service</h1>
        <Form onSubmit={(e) => {
            e.preventDefault();
             register();
             }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name!"
              />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                name="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number!"
              />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address!"
              />
            </Form.Group>
          </Row>
  
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="User password"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Confirm user password"
              />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridIntroduction">
              <Form.Label>Introduction</Form.Label>
              <Form.Control
                type="text"
                name="Introduction"
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                placeholder="introduction"
              />
            </Form.Group>
          </Row>
  
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    )
}

export function validatePassword(pw1, pw2){
    /*if(!checkPasswordMatch(pw1, pw2)) return false;
    if(pw1.length < 6) return false;
    if(!/[A-Z]/.test(pw1)) return false;
    if(!/[a-z]/.test(pw1)) return false;
    if(!/\d/.test(pw1)) return false;
    if(!/[!@+#$%^&*]/.test(pw1)) return false;*/
    return true;
}

export function checkPasswordMatch(pw1, pw2){
    if(pw1 !== pw2){
        return false;
    }
    return true;
}

export function validatePhone(phoneNum){
    //cannot be empty --> return false
    if(phoneNum === ""){
        return false;
    }
    //should contain numbers + a few allowed characters only: "+", "/", "-"
    const allowedChars = "+/-0123456789";
    for(let i = 0; i < phoneNum.length; i++){
        const char = phoneNum.charAt(i);
        if(!allowedChars.includes(char)){
            return false;
        }
    }
    const lastChar = phoneNum.charAt(phoneNum.length - 1);
    if (!/\d/.test(lastChar)) {
      return false;
    }
    //should have min. length of 7, max length of 16? (I don't really know)
    if(phoneNum.length < 7 || phoneNum.length > 16){
        return false;
    }
    //valid:
    return true;
}

export function validateEmail(emailAddress){
    //cannot be empty --> return false
    if(!emailAddress || emailAddress === "") return false;
    //search for @ --> should have only one
    const atIndex = emailAddress.indexOf("@");
    if(atIndex === -1 || emailAddress.indexOf("@", atIndex + 1) !== -1) return false;
    //should have at least one dot around end
    if(emailAddress.lastIndexOf(".") < atIndex + 2) return false;
    //should have stuff before @
    //should have stuff after @
    if(atIndex === 0 || atIndex === emailAddress.length - 1) return false;
    //cannot have dot before/after @
    if(emailAddress[atIndex - 1] === "." || emailAddress[atIndex + 1] === ".") return false;
    return true;
    //if all above are true: setEmail(email); return true;
    //else: setEmail(null);, window.alert("Invalid e-mail address!"); return false;
}