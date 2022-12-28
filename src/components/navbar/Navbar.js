import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaInstagram, FaDiscord} from "react-icons/fa";
function CollapsibleExample() {
  return (
    <Navbar  collapseOnSelect expand="lg"  variant="dark" className='fixed-top shadow glassy white-shadow'>
      <Container>
        <Navbar.Brand href="#home">Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto nv">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="#wegetyou">We get you</Nav.Link>
            <Nav.Link href="#help">We're here to help</Nav.Link>
            <Nav.Link href="#start">Start Now</Nav.Link>
            <Nav.Link href="#pricing"><FaInstagram/></Nav.Link>
            <Nav.Link href="#pricing"><FaDiscord/></Nav.Link>
          </Nav>
          <Nav className="nv">
            <Nav.Link href="#deets" className='navBarContactButton'>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;