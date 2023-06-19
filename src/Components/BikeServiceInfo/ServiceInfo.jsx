import React from 'react';
import Header from '../PageComponents/Header';
import { Container,Card, Button, Row, Col } from 'react-bootstrap';

export default function ServiceInfo() {
  const shop = {
    name: 'Bike Service',
    description:
      'Welcome to BikeService, your one-stop destination for all your  bike related service. We offer a wide range of products.',
    info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    info2:  '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    info3: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
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
          <p>{shop.description}</p><br/>
          <p>{shop.info}</p><br/>
          <p>{shop.info2}</p><br/>
          <p>{shop.info3}</p>
        </Container>
        <Button variant="primary" href={shop.buttonLink} className="mt-4">
          {shop.buttonText}
        </Button>
      </div>
    </div>
  );
}
