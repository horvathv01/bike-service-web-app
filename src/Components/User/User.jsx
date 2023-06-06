import React, { useState, useEffect } from 'react';
import Header from '../PageComponents/Header';
import UserDisplay from './UserDisplay';

export default function User() {

  const [userData, setUserData] = useState([]);

  return (
    <div>
      <div><Header /></div>
      <div><UserDisplay /></div>
    </div>
  );
}