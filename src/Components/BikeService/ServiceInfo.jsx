import React from 'react';
import Header from '../PageComponents/Header';
import { Container,Card, Button, Row, Col } from 'react-bootstrap';

export default function ServiceInfo() {
  const shop = {
    name: 'Bike Service',
    description:
      'Welcome to BikeService, your one-stop destination for all your  bike related service. We offer a wide range of products.',
    imageSrc: './ServiceImages/1.jpg',
      buttonText: 'Awesome Bike Life',
    buttonLink: 'https://example.com/shop',
  };

  return (
    <div>
      <Header />
      <div className="d-flex flex-column align-items-center justify-content-center my-4">
        <Container className="text-center">
          <img src={shop.imageSrc} alt={shop.name} className="mb-4" />
          <h2>{shop.name}</h2>
          <p>{shop.description}</p>
        </Container>
        <Button variant="primary" href={shop.buttonLink} className="mt-4">
          {shop.buttonText}
        </Button>
      </div>
    </div>
  );
}
