import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Header from '../PageComponents/Header';
import serverConnection from '../ServerConnection';
import { UserContext } from './UserContext';
import ServerUrlAndPort from '../ServerURLAndPort.js';

export default function WelcomeMessage() {
  const {user, login, logout} = useContext(UserContext)
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let result = await serverConnection(null, 'get', 'Greeting');
      setGreeting(result);
    }
    fetchData();
  }, []);

  function handleLogin() {
    console.log(`fetch is gonna go here: {https://${ServerUrlAndPort().url}:${ServerUrlAndPort().port}/access/login}`);
    const credentialsParsed = btoa(`${userName}:${password}`);
    console.log(`fetch contains this: ${credentialsParsed}`);

    fetch(`https://${ServerUrlAndPort().url}:${ServerUrlAndPort().port}/access/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: credentialsParsed,
      },
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setUserName('');
          setPassword('');
          window.alert('Invalid username or password!');
        }
      })
      .then(data => login(data));
      navigate('/profile');
      ;
  }

  function handleRegister() {
    navigate('/registration');
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="m-3 text-center">
        <h1>{greeting}</h1>
        <Form>
          <Row className="mb-3 justify-content-center">
            <Col xs={8} sm={6} md={4} lg={3}>
              <Form.Group controlId="formGridName">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter user name"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3 justify-content-center">
            <Col xs={8} sm={6} md={4} lg={3}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3 justify-content-center">
            <Col xs={12} sm={12} className="text-center mb-3">
              <Button variant="primary" onClick={handleLogin} className="m-2">
                Login
              </Button>
              <Button variant="secondary" onClick={handleRegister}>
                Registration
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
