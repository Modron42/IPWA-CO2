import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="earth.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Earth logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">HOME</Nav.Link>
                        <Nav.Link href="#emissions">EMISSIONS</Nav.Link>
                        <Nav.Link href="https://www.iu.de/">IU</Nav.Link>
                        <Nav.Link href="https://edgar.jrc.ec.europa.eu/report_2023">DATA SOURCE</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;