import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

const Header=()=>{
     return (
        <>
       <Navbar expand="lg" className="bg-dark mx-6 py-3 px-4">
  <Container fluid className="d-flex justify-content-between align-items-center">
    <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
      Crud App
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto d-flex gap-3">
        <Nav.Link as={Link} to="/" className="text-white">
          All Users
        </Nav.Link>
        <Nav.Link as={Link} to="/user" className="text-white">
          PostUser
        </Nav.Link>
        <Nav.Link as={Link} to="/user/:id" className="text-white">
          UpdateUser
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  
        </>
     )
}

export default Header