
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate(); // Add this line

  const handleLogout = () => {
    fetch('https://localhost:7237/access/logout', {
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          navigate('/login'); // Redirect to login page after successful logout
        } else {
          return response.json().then((data) => {
            throw new Error(data.message || 'Logout failed');
          });
        }
      })
      .catch((error) => {
        console.error('Logout error:', error);
        navigate('/error', { state: { message: error.message } });
      });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Bike Service
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/webshop">Webshop</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <Nav.Link href="/tours">Tours</Nav.Link>
            <Nav.Link href="/insurance">Insurance</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/cart">Shopping Cart</Nav.Link>
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown" align = "end">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/profile/bikes">My Bikes</NavDropdown.Item>
              <NavDropdown.Item href="/tours">My Tours</NavDropdown.Item>
              <NavDropdown.Item href="/profile/appointments">My Appointments</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout} href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

