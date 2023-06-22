
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


export default function ProfileNavbar() {
    const [bikeList, setBikeList] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5136/bike")
            .then(response => response.json())
            .then(data => setBikeList(data))
            .catch(error => {
                console.log('An error occurred:', error);
            });
    }, []);

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/profile/bike-form">Add Bike</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Dropdown"
                            menuVariant="dark"
                        >
                            {bikeList && bikeList.map(bike => (
                                <NavDropdown.Item data-testid={bike.id} key={bike.id} href={`#action/${bike.id}`}>
                                    {bike.model}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}