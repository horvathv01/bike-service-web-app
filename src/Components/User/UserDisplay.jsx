import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import '../../CustomStyles/Display.css';

export default function UserDisplay() {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7237/user")
            .then(response => response.json())
            .then(data => setUserList(data))
            .catch(err => {
                console.log('An error occurred:', err);
                setError('Failed to get users. Please try again.');
                navigate('/error', { state: { message: error } });
            });

    }, [navigate, error]);

    function listToElements() {
        return (
            <Row xs={1} sm={2} md={2} lg={2} xl={2} xxl={2} className="g-4">
                {userList.map(user => (
                    <Col key={user.id}>
                        <Card className="mb-3 mx-auto transparent-card" style={{ maxWidth: '400px' }}>
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    <strong>User id:</strong> {user.id} <br />
                                    <strong>Email:</strong> {user.email}<br />
                                    <strong>Phone:</strong> {user.phone}<br />
                                    <strong>Introduction:</strong> {user.introduction}<br />
                                    <strong>Premium:</strong> {user.premium ? "yes" : "no"}
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate(`/profile`)}>
                                    <FontAwesomeIcon icon={faWrench} className="me-2" />User Profile
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
