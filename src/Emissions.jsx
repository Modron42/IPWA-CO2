import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function Emissions(props) {
    return (
        <Container>
            <h5>Countries</h5>
            <Table responsive striped bordered hover size="sm">
                {props.data.map(element => 
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