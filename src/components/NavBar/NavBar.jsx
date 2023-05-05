import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; 
import { CartWidget } from "../CartWidget/CartWidget";

const styles={
  a:
  {
    padding: 8
  }
}

export const NavBar = () => {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Alt F4</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink href="#" style={styles.a}>Teclados</NavLink>
            <NavLink href="#" style={styles.a}>Placas De Video</NavLink>
            <NavLink href="#" style={styles.a}>Accesorios</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      </header>
    );
  };