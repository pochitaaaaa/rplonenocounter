import { Button, Card }  from 'react-bootstrap';

const Cardjurusan = (props)=> {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.kegiatan}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="dark">Happy</Button>
            </Card.Body>
        </Card>
    )
}

export default Cardjurusan;