import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function Emissions() {
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
    );
}

export default Emissions;