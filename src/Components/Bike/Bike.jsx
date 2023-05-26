import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Bike({Header, BikeListDisplay}){

    let trialBike = {};

    const [bikeData, setBikeData] = useState(trialBike);

    return(
      <div>
        <div><Header/></div>     
        <div><BikeListDisplay /></div>
      </div>
    );
}

export function ChooseNewOrUsed({Header}){
  return (
    <div>
    <div><Header/></div>      
    <Link to={"/webshop/bikes/new"}><button>New bikes</button></Link>
    <Link to={"/webshop/bikes/used"}><button>Used bikes</button></Link>
    </div>
  );
}

export function NewBike({Header}){
  return (
    <div>
    <div><Header/></div>      
    <p>New bikes</p>
    </div>
  );
}