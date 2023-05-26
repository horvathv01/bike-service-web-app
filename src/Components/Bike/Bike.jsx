import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../PageComponents/Header';
import BikeDisplay from './BikeDisplay';

export function Bike() {

  const [bikeData, setBikeData] = useState([]);

  return (
    <div>
      <div><Header /></div>
      <div><BikeDisplay /></div>
    </div>
  );
}

export function ChooseNewOrUsed() {
  return (
    <div>
      <div><Header /></div>
      <Link to={"/webshop/bikes/new"}><button>New bikes</button></Link>
      <Link to={"/webshop/bikes/used"}><button>Used bikes</button></Link>
    </div>
  );
}

export function NewBike() {
  return (
    <div>
      <div><Header /></div>
      <p>New bikes under construction</p>
    </div>
  );
}