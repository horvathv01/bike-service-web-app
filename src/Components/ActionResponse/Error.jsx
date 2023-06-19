import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../PageComponents/Header';
import Image from 'react-bootstrap/Image';
import '../../CustomStyles/Transition.css';

const Error = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message } = location.state || {};

  return (
    <div>
      <div><Header /></div>
      <div className="m-3 d-flex flex-column align-items-center">
        <h3>Error</h3>
        {message && <p>{message}</p>}
        <Image src="/ServiceImages/error.jpg" className="my-4 bg-image rounded responsive bg-opacity" />
        <button className='m-3' onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default Error;