import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import Header from '../PageComponents/Header';

function UserForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Introduction: '',
    Premium: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5136/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        console.log('User saved successfully!');
        navigate('/success', { state: { message: 'User saved successfully!' } });
      } else {
        console.log('Failed to save user.');
        setError('Failed to save user. Please try again!');
        navigate('/error', { state: { message: 'Failed to save user. Please try again!' } });
      }
    } catch (err) {
      console.log('An error occurred:', err);
      setError('An error occurred. Please try again!', { state: { message: {error} } });
      navigate('/error');
    }
    console.log(`User: ${JSON.stringify(user)}`);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={user.Name}
              onChange={handleChange}
              placeholder="Enter Name!"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              name="Phone"
              value={user.Phone}
              onChange={handleChange}
              placeholder="Enter phone number!"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="Email"
              value={user.Email}
              onChange={handleChange}
              placeholder="Enter email address!"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              name="Password"
              value={user.Password}
              onChange={handleChange}
              placeholder="User password"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridIntroduction">
            <Form.Label>Introduction</Form.Label>
            <Form.Control
              type="text"
              name="Introduction"
              value={user.Introduction}
              onChange={handleChange}
              placeholder="introduction"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridPremium">
          <Form.Check
            type="checkbox"
            name="Premium"
            checked={user.Premium}
            onChange={(e) => setUser((prevUser) => ({ ...prevUser, Premium: e.target.checked }))}
            label="Premium"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserForm;