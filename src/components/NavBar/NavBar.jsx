import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Alt F4</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Contactos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      </header>
    );
  };