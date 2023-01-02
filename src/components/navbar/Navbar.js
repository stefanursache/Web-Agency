import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaInstagram, FaDiscord} from "react-icons/fa";
import logo from "../../assets/logo.png";
function CollapsibleExample() {
  return (
    <Navbar  collapseOnSelect expand="lg"  variant="dark" className='fixed-top shadow glassy white-shadow'>
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="..." height="36"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto nv">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="#wegetyou">We get you</Nav.Link>
            <Nav.Link href="#help">We're here to help</Nav.Link>
            <Nav.Link href="#start">Start Now</Nav.Link>
            <div className='display-flex'>
            <Nav.Link  href="#pricing"><FaInstagram/></Nav.Link>
            <Nav.Link className='ml' href="#pricing"><FaDiscord/></Nav.Link>
            </div>
           
          </Nav>
          <Nav className="nv1">
            <Nav.Link href="#deets" className='navBarContactButton'>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;