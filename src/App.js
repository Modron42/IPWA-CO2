import './App.css';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GlobeEuropeAfrica, ThermometerHalf, Eye, PlugFill, Buildings, CarFrontFill, AirplaneFill, Flower1 } from 'react-bootstrap-icons';

function App() {
    const [emissions, setEmissions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/emissions?Sector=Industrial%20Combustion&Substance=CO2')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setEmissions(data);
            });
    }, []);
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
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#data">DATA</Nav.Link>
                        <Nav.Link href="#reports">REPORTS</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar expand="lg" className="position-fixed">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Navbar.Brand href="#home">Menu</Navbar.Brand>
                            <Nav.Link href="/home"><GlobeEuropeAfrica /> Region Selection</Nav.Link>
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
            <div className="content">
                <Container>
                    <h5>Countries</h5>
                    <Table responsive striped bordered hover size="sm">
                        {emissions.map(element =>
                            <tr>
                                <td>{element.Country}</td>
                                <td>{element['2022']} Mt CO&#8322;</td>
                            </tr>
                        )}
                    </Table>
                </Container>
                <footer>
                    <h4>FOOTER</h4>
                    <p>Powered by <a href="https://react-bootstrap.netlify.app/" target="_blank">React Bootstrap</a></p>
                </footer>
            </div>
        </div>
    );
}

export default App;
