import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../PageComponents/Header';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message } = location.state || {};

  return (
    <div>
      <div><Header /></div>
      <h2>Success</h2>
      {message && <p>{message}</p>}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Success;