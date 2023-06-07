import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';

import '../../CustomStyles/Display.css';


export default function BikeDisplay() {
  const navigate = useNavigate();
  const [bikeList, setBikeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5136/bike")
      .then(response => response.json())
      .then(data => setBikeList(data))
      .catch(err => {
        console.log('An error occurred:', err);
        setError('Failed to get bikes. Please try again.');
        navigate('/error', { state: { message: error } });
      });

  }, [navigate, error]);
  console.log(bikeList[6]);

  function listToElements() {
    return (
      <Row xs={1} sm={2} md={2} lg={2} xl={2} xxl={2} className="g-4">
        {bikeList.map(bike => (
          <Col key={bike.id}>
            <Card className="mb-3 mx-auto transparent-card" style={{ maxWidth: '400px' }}>
              <Card.Body>
                <Card.Title>{bike.manufacturer} {bike.model}</Card.Title>
                <Card.Text>
                  <strong>VIN:</strong> {bike.vin}<br />
                  <strong>Type:</strong> {bike.bikeType}<br />
                  <strong>Wheel Size:</strong> {bike.wheelSize}<br />
                  <strong>Frame Size:</strong> {bike.frameSize}<br />
                  <strong>State:</strong> {bike.state}<br />
                  <strong>Insured:</strong> {bike.insured ? "yes" : "no"}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/service`)}>
                  <FontAwesomeIcon icon={faWrench} className="me-2" />Service bike
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <Container>
      <div>{listToElements()}</div>
    </Container>
  );
}
