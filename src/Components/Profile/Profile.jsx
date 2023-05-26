import ProfileNavbar from './ProfileNavBar';
import Header from '../PageComponents/Header';
import { Container } from 'react-bootstrap';

export default function Profile() {

  return (
    <div>
      <div><Header /></div>
      <div>
        <ProfileNavbar />
      </div>
      <Container className="text-center mt-4">
        <h1 className="text-primary fw-bold">Profile</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Container>
    </div>
  );

}