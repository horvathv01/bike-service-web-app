import React, { useState, useEffect } from 'react';
import Header from '../PageComponents/Header';
import UserDisplay from './BikeDisplay';

export function Bike() {

  const [userData, setUserData] = useState([]);

  return (
    <div>
      <div><Header /></div>
      <div><UserDisplay /></div>
    </div>
  );
}