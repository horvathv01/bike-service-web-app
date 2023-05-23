import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Profile({Header}){

    return (
    <div>
        <div><Header/></div>        
        <p>Profile</p>
        <div>
          <NavbarDarkExample/>
        </div>
    </div>
    );

function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand as={Link} to="/bike-form">Add Bike</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Bike1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bike2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bike3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bike4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bike5</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Bike List
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

}