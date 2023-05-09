import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';

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
          <Link to='/'>Alt F4</Link>
          <Nav className='categories'>
            <NavLink to={`/category/teclados`} className={({isActive}) =>isActive ? 'activeOption' : 'option'} style={styles.a}>Teclados</NavLink>
            <NavLink to={`/category/placasDeVideo`} className={({isActive}) =>isActive ? 'activeOption' : 'option'} style={styles.a}>Placas De Video</NavLink>
            <NavLink to={`/category/accesorios`} className={({isActive}) =>isActive ? 'activeOption' : 'option'} style={styles.a}>Accesorios</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      </header>
    );
  };