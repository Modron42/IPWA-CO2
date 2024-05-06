import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
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

const range = (start, stop) =>
    Array.from(
        { length: (stop - start) + 1 },
        (value, index) => start + index
    );

function Menu(props) {
    return (
        <Navbar expand="lg" className="position-fixed">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="flex-column">
                        <Navbar.Brand>Menu</Navbar.Brand>
                        <Nav.Link onClick={() => props.onSelectSector('Agriculture')}><Flower1 /> Agriculture</Nav.Link>
                        <Nav.Link onClick={() => props.onSelectSector('Buildings')}><Buildings /> Buildings</Nav.Link>
                        <Nav.Link onClick={() => props.onSelectSector('Fuel Exploitation')}><FuelPumpFill /> Fuel Exploitation</Nav.Link>
                        <Nav.Link onClick={() => props.onSelectSector('Industrial Combustion')}><Fire /> Industrial Combustion</Nav.Link>
                        <Nav.Link onClick={() => props.onSelectSector('Power Industry')}><PlugFill /> Power Industry</Nav.Link>
                        <Nav.Link onClick={() => props.onSelectSector('Processes')}><GearFill /> Processes</Nav.Link>
                        <Nav.Link onClick={() => props.onSelectSector('Transport')}><AirplaneFill /> Transport</Nav.Link>
                        <Nav.Link onClick={() => props.onSelectSector('Waste')}><Recycle /> Waste</Nav.Link>
                        <hr />
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary">
                                {`Displayed year: ${props.year}`}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{
                                maxHeight: "200px",
                                overflowY: "auto"
                            }}>
                                {range(1970, 2022).map(x => <Dropdown.Item key={x} onClick={() => props.onSelectYear(x)}>{x}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                        <hr />
                        <Form.Control type="text" onChange={(event) => { props.onSelectFilter(event.target.value.toLowerCase()); }} />
                        <Form.Text>Start typing to filter results</Form.Text>
                        <hr />
                        <Form.Select onChange={(event) => props.onSelectSort(event.target.value.toLowerCase() === 'ascending')}>
                            <option>Ascending</option>
                            <option>Descending</option>
                        </Form.Select>
                        <Form.Text>Sort countries</Form.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;