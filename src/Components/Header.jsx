import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

const [user, setUser] = useState(null);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/webshop">Webshop</Nav.Link>
          <Nav.Link href="/service">Service</Nav.Link>
          <Nav.Link href="/tours">Tours</Nav.Link>
          <Nav.Link href="/insurance">Insurance</Nav.Link>
          <Nav.Link href="/news">Bike News</Nav.Link>
          <Nav.Link href="/cart">Shopping Cart</Nav.Link>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="/profile/bikes">My Bikes</NavDropdown.Item>
            <NavDropdown.Item href="/profile/tours">My Tours</NavDropdown.Item>
            <NavDropdown.Item href="/profile/appointments">My Appointments</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

