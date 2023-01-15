import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDiscord,FaTwitter, FaLinkedin} from "react-icons/fa";
import logo from "../../assets/logo.png";
function CollapsibleExample() {
  return (
    <Navbar  collapseOnSelect expand="lg"  variant="dark" className='fixed-top shadow glassy white-shadow'>
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="..." height="45"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto nv">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="#wegetyou">We get you</Nav.Link>
            <Nav.Link href="#help">We're here to help</Nav.Link>
            <Nav.Link href="#start">Book a call</Nav.Link>
            <div className='display-flex'>
            <Nav.Link  href="#pricing"><FaTwitter/></Nav.Link>
            <Nav.Link className='ml' href="#pricing"><FaLinkedin/></Nav.Link>
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