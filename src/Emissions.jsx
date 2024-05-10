import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function Emissions(props) {
    const filtered = props.data.filter((x) => x.Country.toLowerCase().includes(props.filter));
    const data = props.order ? filtered : filtered.toReversed();
    return (
        <Container>
            <h5><b>{props.sector}</b> emissions by country</h5>
            <Table responsive striped bordered hover size="sm">
                <thead className="fs-5 fw-bold">
                    <tr>
                        <td>Country</td>
                        <td>Mt CO&#8322; in year {props.year}</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(element =>
                        <tr key={element['EDGAR Country Code']}>
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