import BookSlot from "./Calendar";
import React, { useState, useEffect } from 'react';
import Header from '../PageComponents/Header';



import 'react-day-picker/dist/style.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

function ModalExample() {
  const [show, setShow] = useState(false);
  const [buttonText, setButtonText] = useState("Click for selecting slot");
  const [preButtonText, setPreButtonText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
          <BookSlot setPreButtonText={setPreButtonText} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={e => {
            handleClose()
            setButtonText(preButtonText);
          }



          }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


// TODO: Chose from service events by dropdown texts, and add new service event by event name, date, bike, colleague.

function ServiceForm(props) {

  const [bikeList, setBikeList] = useState(null);
  const [serviceList, setServiceList] = useState(null);

  useEffect(() => {
      fetch("https://localhost:7237/bike",
      {
        credentials:'include'
      })
          .then(response => response.json())
          .then(data => setBikeList(data))
          .catch(error => {
              console.log('An error occurred:', error);
          });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7237/serviceevent")
        .then(response => response.json())
        .then(data => setServiceList(data))
        .catch(error => {
            console.log('An error occurred:', error);
        });
}, []);

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Select bike</Form.Label>
          <Form.Select defaultValue={props.defValue}>

            <option hidden>{props.defValue}</option>
            {
              bikeList && bikeList.map(bike => ( // error: ach child in a list should have a unique "key" prop.
                <option /*key={bike.id} href={`#action/${bike.id}`}*/> 
                  {`${bike.manufacturer} ${bike.model}`} 
                </option>))
            }

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Select service</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option hidden>Choose...</option>
            {
              serviceList && serviceList.map(service => (
                <option> 
                  {service.type} 
                </option>))
            }
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Select slot</Form.Label>
          <br></br>
          <Form.Label><ModalExample /></Form.Label>

        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


export default function Service(props) {

  return (
    <div>
      <div><Header /></div>
      <p>Bike Service</p>
      <div>
        <ServiceForm defValue={props.defValue} />
      </div>
    </div>
  );
}