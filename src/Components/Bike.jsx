import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Bike({Header}){

    let trialBike = {};

    const [bikeData, setBikeData] = useState(trialBike);

    useEffect(() => {
        fetch("http://localhost:5136/bike")
        .then(data => data.json())
        .then(info => {
            setBikeData(info[0])
        })
    }, []);

    return (
        <div>
            <div><Header/></div>     
            <h1>Bike info</h1>
            <p>{bikeData.manufacturer}</p>

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


