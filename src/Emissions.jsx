import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function Emissions(props) {
    return (
        <Container>
            <h5><b>{props.sector}</b> emissions by country</h5>
            <Table responsive striped bordered hover size="sm">
                {props.data.map(element =>
                    <tr>
                        <td>{element.Country}</td>
                        <td>{element[props.year]} Mt CO&#8322;</td>
                    </tr>
                )}
            </Table>
        </Container>
    );
}

export default Emissions;