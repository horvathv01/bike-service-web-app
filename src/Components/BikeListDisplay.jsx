import { useEffect, useState } from 'react';

export default function BikeListDisplay(){

const [bikeList, setBikeList] = useState(null);

useEffect(() => {
    fetch("http://localhost:5136/user")
    .then(response => response.json())
    .then(data => setBikeList(data[0].bikes))
}, []);

function listToElements(){
    return bikeList == null ? null : bikeList.map(bike => <div key={bike.Id}>
        <p>VIN: {bike.vin}</p>
        <p>Manufacturer: {bike.manufacturer}</p>
        <p>Model: {bike.Model}</p>
        <p>Type: {bike.bikeType}</p>
        <p>Wheel Size: {bike.wheelSize}</p>
        <p>Frame Size: {bike.frameSize}</p>
        <p>State: {bike.state}</p>
        <p>Insured: {bike.insured}</p>
        <button>Service bike</button>
    </div>);
}
    
    
    return (
        <div>
            {listToElements()}
        </div>
    )
}