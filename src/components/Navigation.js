import  {Nav, Navbar, Container } from "react-bootstrap";

const Navigation = ()=> {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Rplonenocounter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"> Home</Nav.Link>   
              <Nav.Link href="#features">Kegiatan</Nav.Link>          
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;