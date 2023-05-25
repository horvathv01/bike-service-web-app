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

    // useEffect(() => {
    //     fetch("https://localhost:5136/Bike/allBikes")
    //     .then(data => data.json())
    //     .then(info => {
    //         setBikeData(info[0])
    //     })
    // }, []);

    // return (
    //     <div>
    //         <div><Header/></div>     
    //         <h1>Bike info</h1>
    //         <p>{bikeData.manufacturer}</p>
    //         <p>{bikeData.model}</p>
    //         <p>{bikeData.type}</p>
    //         <p>{bikeData.wheelSize}</p>
    //         <p>{bikeData.frameSize}</p>
    //         <p>{bikeData.state}</p>
    //         <p>{bikeData.insured}</p>
    //     </div>
    // );

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


