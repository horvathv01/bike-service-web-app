import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message } = location.state || {};

  return (
    <div>
      <h3>Success</h3>
      {message && <p>{message}</p>}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Success;