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

function fetchData(sector,setData) {
    fetch('http://localhost:3001/emissions?Substance=CO2&Sector='+sector)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setData(data);
    });
}

function Menu(props) {
    return (
        <Navbar expand="lg" className="position-fixed">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column">
                        <Navbar.Brand>Menu</Navbar.Brand>
                        <Nav.Link onClick={()=>fetchData('Agriculture',props.onSelect)}><Flower1 />Agriculture</Nav.Link>
                        <Nav.Link onClick={()=>fetchData('Buildings',props.onSelect)}><Buildings />Buildings</Nav.Link>
                        <Nav.Link onClick={()=>fetchData('Fuel%20Exploitation',props.onSelect)}><FuelPumpFill />Fuel Exploitation</Nav.Link>
                        <Nav.Link onClick={()=>fetchData('Industrial%20Combustion',props.onSelect)}><Fire />Industrial Combustion</Nav.Link>
                        <Nav.Link onClick={()=>fetchData('Power%20Industry',props.onSelect)}><PlugFill />Power Industry</Nav.Link>
                        <Nav.Link onClick={()=>fetchData('Processes',props.onSelect)}><GearFill />Processes</Nav.Link>
                        <Nav.Link onClick={()=>fetchData('Transport',props.onSelect)}><AirplaneFill />Transport</Nav.Link>
                        <Nav.Link onClick={()=>fetchData('Waste',props.onSelect)}><Recycle />Waste</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;