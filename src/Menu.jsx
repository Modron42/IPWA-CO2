import { GlobeEuropeAfrica, ThermometerHalf, Eye, PlugFill, Buildings, CarFrontFill, AirplaneFill, Flower1 } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <Navbar expand="lg" className="position-fixed">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Navbar.Brand href="#home">Menu</Navbar.Brand>
            <Nav.Link href="/home"><GlobeEuropeAfrica/> Region Selection</Nav.Link>
            <Nav.Link href="/home"><Eye /> Company Profiles</Nav.Link>
            <Nav.Link href="/home"><ThermometerHalf /> Heating</Nav.Link>
            <Nav.Link href="/home"><PlugFill /> Electricity</Nav.Link>
            <Nav.Link href="/home"><Buildings /> Industry</Nav.Link>
            <Nav.Link href="/home"><CarFrontFill /> Cars and Vehicles</Nav.Link>
            <Nav.Link href="/home"><AirplaneFill /> Aviation</Nav.Link>
            <Nav.Link href="/home"><Flower1 /> Agriculture</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;