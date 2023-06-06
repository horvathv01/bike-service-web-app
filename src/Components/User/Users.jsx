import Header from "../PageComponents/Header";
import ProfileNavbar from "../Profile/ProfileNavBar";
import UserDisplay from "./UserDisplay";
import { Container, Row, Col } from 'react-bootstrap';

export default function Users() {
    return (
      <div>
        <Header />
        <ProfileNavbar />
        <Container className="mt-3">
          <Row>
            <Col className="text-center">
              <h1 className="mb-4">Users</h1>
              <UserDisplay />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }