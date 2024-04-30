import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Flower1,
    Buildings,
    FuelPumpFill,
    Fire,
    PlugFill,
    GearFill,
    AirplaneFill,
    Recycle
} from 'react-bootstrap-icons';

function Menu(props) {
    return (
        <Navbar expand="lg" className="position-fixed">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column">
                        <Navbar.Brand>Menu</Navbar.Brand>
                        <Nav.Link onClick={() => props.onSelect('Agriculture')}><Flower1 />Agriculture</Nav.Link>
                        <Nav.Link onClick={() => props.onSelect('Buildings')}><Buildings />Buildings</Nav.Link>
                        <Nav.Link onClick={() => props.onSelect('Fuel%20Exploitation')}><FuelPumpFill />Fuel Exploitation</Nav.Link>
                        <Nav.Link onClick={() => props.onSelect('Industrial%20Combustion')}><Fire />Industrial Combustion</Nav.Link>
                        <Nav.Link onClick={() => props.onSelect('Power%20Industry')}><PlugFill />Power Industry</Nav.Link>
                        <Nav.Link onClick={() => props.onSelect('Processes')}><GearFill />Processes</Nav.Link>
                        <Nav.Link onClick={() => props.onSelect('Transport')}><AirplaneFill />Transport</Nav.Link>
                        <Nav.Link onClick={() => props.onSelect('Waste')}><Recycle />Waste</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;