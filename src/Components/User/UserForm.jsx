import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Form, Row, InputGroup, Modal } from 'react-bootstrap';
import Header from '../PageComponents/Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { validateRegistration } from '../../Utilities/ValidateRegistration';
import { calculatePasswordStrength } from '../../Utilities/PasswordStrengthMeter';
import ServerUrlAndPort from '../ServerURLAndPort.js';

function UserForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validName, setValidName] = useState(false);
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    Premium: false,
    Roles: [],
    Introduction: '',
    Insurances: [],
  });


const validateUserName = (userName) => {
if(userName.value == "" || userName.value == undefined || userName.value == null){ 
  return false;
}
  const alphabetAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";
  for(let i = 0; i < userName.value.length; i++){
    if(!alphabetAndNumbers.includes(userName.value[i].toLowerCase())){
      window.alert("Invalid username! A user name can only include letters and numbers (no space or special characters).");
      return false;
    }
  }
  return true;
}

  const handleChange = (e) => {
    setValidName(validateUserName(e.target));

    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    const strength = calculatePasswordStrength(value);
    setPasswordStrength(strength);
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handlePasswordCheckChange = (e) => {
    const { value } = e.target;
    setPasswordCheck(value);
    setPasswordMatch(user.Password === value);
  };

  const handlePasswordCheck = () => {
    if (user.Password !== passwordCheck) {
      setError('Passwords do not match.');
    } else {
      setError(null);
    }
  };

  const handleIntroductionChange = (value) => {
    setUser((prevUser) => ({ ...prevUser, Introduction: value }));
  };

  const handlePremiumChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, Premium: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const introductionWithoutTags = user.Introduction.slice(3,-4);
    const updatedUser = { ...user, Introduction: introductionWithoutTags };

    const validationErrors = validateRegistration(updatedUser, passwordCheck);
    if (Object.keys(validationErrors).length > 0) {
      console.log('Validation errors:', validationErrors);
      const errorMessages = Object.entries(validationErrors)
        .map(([fieldName, errorMessage]) => `${fieldName}: ${errorMessage}`)
        .join('\n');
      setError(errorMessages);
      setShowModal(true);
      return;
    }

    try {
      console.log(`User: ${JSON.stringify(user)}`);
      const response = await fetch(`${ServerUrlAndPort().host}://${ServerUrlAndPort().url}:${ServerUrlAndPort().port}/access/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),

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

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='m-3 text-center'>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <pre className="text-danger">{error}</pre>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>{"Name: " + (validName == true ? "OK" : "INVALID!")}</Form.Label>
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
              <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId='formGridPassword' className='mb-3 mx-auto'>
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name='Password'
                  value={user.Password}
                  onChange={handlePasswordChange}
                  placeholder='User password'
                  required
                />
                <Button variant='outline-secondary' onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputGroup>
              {passwordStrength && <div className="text-muted">{passwordStrength}</div>}
              {!passwordStrength && (
                <br />
              )}
              <Form.Control.Feedback type='invalid'>Password is required.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPasswordCheck' className='mb-3 mx-auto'>
              <Form.Label>Password Check</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name='PasswordCheck'
                  value={passwordCheck}
                  onChange={handlePasswordCheckChange}
                  onBlur={handlePasswordCheck}
                  placeholder='Re-enter password'
                  required
                />
                <Button variant='outline-secondary' onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputGroup>
              {!passwordMatch && <div className='text-danger'>Passwords do not match.</div>}
              <Form.Control.Feedback type='invalid'>Please re-enter the password.</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3 justify-content-center">
            <Form.Group as={Col} controlId="formGridIntroduction" className='justify-content-center'>
              <Form.Label>Introduction</Form.Label>
              <ReactQuill
                value={user.Introduction}
                onChange={handleIntroductionChange}
                placeholder="Enter your introduction..."
                style={{ margin: '0 auto', width: '70%' }}
              />
            </Form.Group>
          </Row>

          <Row className='mb-3 justify-content-center'>
            <Col xs={12} sm={3} className=" d-flex justify-content-center">
              <Form.Group className="mb-3 " controlId="formGridPremium">
                <Form.Check
                  type="checkbox"
                  name="Premium"
                  checked={user.Premium}
                  onChange={handlePremiumChange}
                  label="Premium"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3 justify-content-center ">
            <Col xs={12} sm={12} className="text-center ">
              {error && <pre className="text-danger">{error}</pre>}
              <Button variant="primary" type="submit" className='mb-3'>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default UserForm;
