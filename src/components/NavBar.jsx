
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {


  return (
    <>
    <Navbar bg="primary" variant="dark" fixed="bottom">
    <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/beers">Beers Menu</Nav.Link>
        <Nav.Link href="/random-beer">Random</Nav.Link>
        <Nav.Link href="/submit-new-beer">Submit</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}
export default NavBar