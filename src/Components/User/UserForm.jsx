import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Header from '../PageComponents/Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function UserForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Premium: false,
    Roles: [],
    Introduction: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;
    setUser((prevUser) => {
      if (checked) {
        return { ...prevUser, Roles: [...prevUser.Roles, value] };
      } else {
        return { ...prevUser, Roles: prevUser.Roles.filter((role) => role !== value) };
      }
    });
  };

  const handleIntroductionChange = (value) => {
    setUser((prevUser) => ({ ...prevUser, Introduction: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5136/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
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
      setError('An error occurred. Please try again!', { state: { message: { error } } });
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
              required
            />
            <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              name="Phone"
              value={user.Phone}
              onChange={handleChange}
              placeholder="Enter phone number!"
              required
            />
            <Form.Control.Feedback type="invalid">Phone number is required.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="Email"
              value={user.Email}
              onChange={handleChange}
              placeholder="Enter email address!"
              required
            />
            <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="Password"
              value={user.Password}
              onChange={handleChange}
              placeholder="User password"
              required
            />
            <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridRoles">
          <Form.Label>Roles</Form.Label>
          <Form.Check
            type="checkbox"
            id="standardUser"
            name="Roles"
            value="StandardUser"
            label="Standard User"
            checked={user.Roles.includes('StandardUser')}
            onChange={handleRoleChange}
          />
          <Form.Check
            type="checkbox"
            id="premiumUser"
            name="Roles"
            value="PremiumUser"
            label="Premium User"
            checked={user.Roles.includes('PremiumUser')}
            onChange={handleRoleChange}
          />
          <Form.Check
            type="checkbox"
            id="colleague"
            name="Roles"
            value="Colleague"
            label="Colleague"
            checked={user.Roles.includes('Colleague')}
            onChange={handleRoleChange}
          />
          <Form.Check
            type="checkbox"
            id="admin"
            name="Roles"
            value="Admin"
            label="Admin"
            checked={user.Roles.includes('Admin')}
            onChange={handleRoleChange}
          />
          <Form.Control.Feedback type="invalid">At least one role must be selected.</Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridIntroduction">
            <Form.Label>Introduction</Form.Label>
            <ReactQuill
              value={user.Introduction}
              onChange={handleIntroductionChange}
              placeholder="Enter your introduction..."
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridPremium">
          <Form.Check
            type="checkbox"
            name="Premium"
            checked={user.Premium}
            onChange={(e) => setUser((prevUser) => ({ ...prevUser, Premium: e.target.checked }))}
            label="Subscribed"
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
