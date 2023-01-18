import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  "../navBar/NavBars.css"
import CartWidget from '../CartWidget';




function Navbars() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Nav className="me-auto">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
           <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
      
     
    </div>
  );
}

export default Navbars;