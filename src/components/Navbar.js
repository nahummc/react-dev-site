import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicNav() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Nahum Collicott</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            {/* <Nav.Link href="#link">About</Nav.Link> */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="contact">Contact me</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="weather">
                Weather
              </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Chat</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="https://github.com/nahummc" target="_blank">
                Checkout my Github
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;