import React, { useState, useEffect } from 'react';
import BasicExample from './Navbar';
import { Link } from 'react-router-dom';

export function Bike(){

    let trialBike = {};

    const [bikeData, setBikeData] = useState(trialBike);

    useEffect(() => {
        fetch("https://localhost:7091/Bike/allBike")
        .then(data => data.json())
        .then(info => {
            setBikeData(info[0])
        })
    }, []);

    return (
        <div>
            <div><BasicExample/></div>     
            <h1>Bike info</h1>
            <p>{bikeData.manufacturer}</p>
            <p>{bikeData.model}</p>
            <p>{bikeData.type}</p>
            <p>{bikeData.wheelSize}</p>
            <p>{bikeData.frameSize}</p>
            <p>{bikeData.state}</p>
            <p>{bikeData.insured}</p>
        </div>
    );

}

export function ChooseNewOrUsed(){
  return (
  <div>
  <div><BasicExample/></div>      
  <Link to={"/webshop/bikes/new"}><button>New bikes</button></Link>
  <Link to={"/webshop/bikes/used"}><button>Used bikes</button></Link>
  </div>
  );
}

export function NewBike(){
  return (
    <div>
    <div><BasicExample/></div>      
    <p>New bikes</p>
    </div>
    );
}


