import './App.css';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
            <div>
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
