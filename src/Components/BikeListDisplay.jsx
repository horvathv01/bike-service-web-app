import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BikeListDisplay() {
    const navigate = useNavigate();
  const [bikeList, setBikeList] = useState([]);
  const [error,setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5136/bike")
      .then(response => response.json())
      .then(data => setBikeList(data))
      .catch(error => {
        console.log('An error occurred:', error);
        setError('Failed to get bikes. Please try again.');
        navigate('/error', { state: { message: 'Failed to get bikes. Please try again.' } });
      });
      
  }, []);
  console.log(bikeList[6]);

  function listToElements() {
    return bikeList.map(bike => (
          <div key={bike.id}>
            <p>VIN: {bike.vin}</p>
            <p>Manufacturer: {bike.manufacturer}</p>
            <p>Model: {bike.model}</p>
            <p>Type: {bike.bikeType}</p>
            <p>Wheel Size: {bike.wheelSize}</p>
            <p>Frame Size: {bike.frameSize}</p>
            <p>State: {bike.state}</p>
            <p>Insured: {bike.insured ? "yes" : "no"}</p>
            <button onClick={() => navigate(`/service`)}>Service bike</button>
          </div>
        ));
  }

  return <div>{listToElements()}</div>;
}