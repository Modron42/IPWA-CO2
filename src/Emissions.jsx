import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function Emissions(props) {
    return (
        <Container>
            <h5><b>{props.sector}</b> emissions by country</h5>
            <Table responsive striped bordered hover size="sm">
                <thead class="fs-5 fw-bold">
                    <td>Country</td>
                    <td>Mt CO&#8322; in year {props.year}</td>
                </thead>
                <tbody>
                    {props.data.map(element =>
                        <tr>
                            <td>{element.Country}</td>
                            <td>{element[props.year]}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default Emissions;