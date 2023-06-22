import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import Header from '../PageComponents/Header';
import ServerUrlAndPort from '../ServerURLAndPort.js';

function BikeForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [bike, setBike] = useState({
    VIN: '',
    Manufacturer: '',
    Model: '',
    BikeType: '',
    WheelSize: 0,
    FrameSize: '',
    State: '',
    UserId: 0,
    Insured: false,
    ServiceHistory: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'WheelSize' || name === 'UserId' ? parseInt(value, 10) : value;
    setBike((prevBike) => ({ ...prevBike, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://${ServerUrlAndPort().url}:${ServerUrlAndPort().port}/bike`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(bike)
      });

      if (response.ok) {
        console.log('Bike saved successfully!');
        navigate('/success', { state: { message: 'Bike saved successfully!' } });
      } else {
        console.log('Failed to save bike.');
        setError('Failed to save bike. Please try again.');
        navigate('/error', { state: { message: 'Failed to save bike. Please try again.' } });
      }
    } catch (error) {
      console.log('An error occurred:', error);
      setError('An error occurred. Please try again.', { state: { message: 'An error occurred. Please try again.' } });
      navigate('/error');
    }
    console.log(JSON.stringify(bike));
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridVIN">
            <Form.Label>VIN</Form.Label>
            <Form.Control
              type="text"
              name="VIN"
              value={bike.VIN}
              onChange={handleChange}
              placeholder="Enter VIN"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridManufacturer">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type="text"
              name="Manufacturer"
              value={bike.Manufacturer}
              onChange={handleChange}
              placeholder="Enter manufacturer"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridModel">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              name="Model"
              value={bike.Model}
              onChange={handleChange}
              placeholder="Enter model"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridBikeType">
            <Form.Label>Bike Type</Form.Label>
            <Form.Control
              as="select"
              name="BikeType"
              value={bike.BikeType}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option value="RoadBike">RoadBike</option>
              <option value="MountainBike">MountainBike</option>
              <option value="TrekkingBike">TrekkingBike</option>
              <option value="CityBike">CityBike</option>
              <option value="BMX">BMX</option>
              <option value="CrossTrekkingBike">CrossTrekkingBike</option>
              <option value="ElectricBike">ElectricBike</option>
              <option value="FixieBike">FixieBike</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridWheelSize">
            <Form.Label>Wheel Size</Form.Label>
            <Form.Control
              type="number"
              name="WheelSize"
              value={bike.WheelSize}
              onChange={handleChange}
              placeholder="Enter wheel size"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFrameSize">
            <Form.Label>Frame Size</Form.Label>
            <Form.Control
              as="select"
              name="FrameSize"
              value={bike.FrameSize}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Check
            type="radio"
            name="State"
            label="New"
            value="New"
            checked={bike.State === "New"}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            name="State"
            label="Used"
            value="Used"
            checked={bike.State === "Used"}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridUserId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="number"
            name="UserId"
            value={bike.UserId}
            onChange={handleChange}
            placeholder="Enter user ID"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridInsured">
          <Form.Check
            type="checkbox"
            name="Insured"
            checked={bike.Insured}
            onChange={(e) => setBike((prevBike) => ({ ...prevBike, Insured: e.target.checked }))}
            label="Insured"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BikeForm;