import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../PageComponents/Header';
import { validateEmail, validatePassword, validatePhone, checkPasswordMatch } from '../User/Registration';
import { Button, Col, Form, Row} from 'react-bootstrap';

export default function RegisterColleagueByAdmin(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const[phone, setPhone] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [skillLevel, setSkillLevel] = useState("");
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
        if(skillLevel === ""){
            window.alert("Please specify skill level!");
            return false;
        }
        return true;
    }

    function register(){
        if(!validateUserInput()){
            return;
        }
        const colleagueDto = {
            Name: name,
            Email: email,
            Password: password,
            Phone: phone,
            Introduction: introduction,
            SkillLevel: skillLevel,
          };
          console.log(colleagueDto);
      
          fetch('https://localhost:7237/access/admin/registercolleague', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'BikeServiceTokenSuperSafeAwesomeYea'
            },
            body: JSON.stringify(colleagueDto)
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
          <Header />
        </div>
        <h1>Register New Colleague</h1>
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
  
          <Form.Group className="mb-3" controlId="formGridPremium">
          <Form.Label>Skill level</Form.Label>
            <Form.Select
              name="SkillLevel"
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
              aria-label="SkillLevel"
            >
            <option value="" defaultValue="true" disabled="disabled">Choose skill level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Pro">Pro</option>
            </Form.Select>
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    )
}