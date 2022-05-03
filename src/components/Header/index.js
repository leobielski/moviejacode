import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { StyledNav } from './styles';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Movie Now</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="me-auto">
            <Nav>Welcome, Leonardo!</Nav>
          </StyledNav>
          <Nav>
            <Button variant="outline-danger">Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
