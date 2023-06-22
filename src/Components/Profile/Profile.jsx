import ProfileNavbar from './ProfileNavBar';
import React, { useContext } from 'react';
import Header from '../PageComponents/Header';
import { Container } from 'react-bootstrap';
import { UserContext } from '../User/UserContext';
import { useNavigate } from 'react-router-dom';


export default function Profile() {
  const {user, login, logout} = useContext(UserContext);
  const navigate = useNavigate();



  return (
    <div>
      <div><Header /></div>
      <div>
        <ProfileNavbar />
      </div>
      <Container className="text-center mt-4">
        <h1 className="text-light fw-bold">Profile</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Container>
      <div>
      {user && user.roles && user.roles.includes("Admin") ? (
          <button onClick={() => navigate("/admin/registerperson")}>Register Person</button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );

}

   