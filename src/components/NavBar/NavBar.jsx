import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
            <Nav.Link href="#" style={styles.a}>Teclados</Nav.Link>
            <Nav.Link href="#" style={styles.a}>Placas De Video</Nav.Link>
            <Nav.Link href="#" style={styles.a}>Accesorios</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      </header>
    );
  };