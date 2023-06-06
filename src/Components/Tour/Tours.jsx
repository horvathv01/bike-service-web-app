import React, { useState } from 'react';
import Header from '../PageComponents/Header';
import { Card, Button, Carousel, Row, Col, Modal } from 'react-bootstrap';

export default function Tours() {
    const imagePath = './BikeTourImages';

    const tours = [
        {
            id: 1,
            name: 'Racin in the mountains',
            folder: 'MountainSpeed',
            description:
                'A fantastic tour in the Italian Alps. Wonderful view, beautiful mountain ranges, winding roads. A real experience that we can share with our friends.',
            buttonText: 'Racing On!',
            buttonLink: 'https://example.com/subscribe',
            tourLink: 'https://example.com/tour1',
        },
        {
            id: 2,
            name: 'Adventure between cities',
            folder: 'Trekking',
            description:
                'Share your experiences of conquering country roads with your cycling friends! Come and take part in a fantastic adventure between cities! The tour takes you through beautiful landscapes with all kinds of experiences and pleasant relaxation.',
            buttonText: 'Adventure Up!',
            buttonLink: 'https://example.com/subscribe',
            tourLink: 'https://example.com/tour2',
        },
        {
            id: 3,
            name: 'Urban culture roll',
            folder: 'City',
            description:
                'Discover Budapest\'s cultural heritage from street to street, from the Basilica through Parlament to the Buda Castle. Enjoy relaxing in the Várkert Bazar surrounded by flowery parks, then roll down to the shade of the green trees of Margitsziget.',
            buttonText: 'Go To The City!',
            buttonLink: 'https://example.com/subscribe',
            tourLink: 'https://example.com/tour3',
        },
        {
            id: 4,
            name: 'Romantic Ride',
            folder: 'Cruise',
            description:
                'Bring joy to your partner, your dear friend, on this calm, magical journey! The tour takes you through romantic places, past old ruins, through flowery meadows on endless roads lined with rows of trees.',
            buttonText: 'Let The Magic Begin!',
            buttonLink: 'https://example.com/subscribe',
            tourLink: 'https://example.com/tour4',
        },
    ];
    const [showModal, setShowModal] = useState(false);
    const [activeTourIndex, setActiveTourIndex] = useState(0);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const openModal = (index) => {
        setActiveTourIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleModalSelect = (selectedIndex) => {
        setModalImageIndex(selectedIndex);
    };

    const handleCardSelect = (selectedIndex) => {
        setActiveTourIndex(selectedIndex);
    };

    return (
        <div>
            <Header />
            <h1>Tours</h1>
            <Carousel
                activeIndex={activeTourIndex}
                onSelect={handleCardSelect}
                interval={showModal ? null : 5000}
                slide={!showModal}
                keyboard={true}
                className="mb-4">
                {tours.map((tour, index) => (
                    <Carousel.Item key={tour.id}>
                        <Row className="justify-content-center">
                            <Col lg={4} md={6} className="mb-4">
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={`${imagePath}/${tour.folder}/1.jpg`}
                                        alt={tour.name}
                                    />
                                    <Card.Body>
                                        <Card.Title>{tour.name}</Card.Title>
                                        <Card.Text>{tour.description}</Card.Text>
                                        <Button variant="primary" onClick={() => openModal(index)}>
                                            Learn More
                                        </Button>
                                        
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="dark" href={tour.buttonLink}>{tour.buttonText}</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Modal show={showModal} onHide={closeModal} dialogClassName="modal-dialog-responsive">
                <Modal.Header closeButton>
                    <Modal.Title>{tours[activeTourIndex].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Carousel
                        activeIndex={modalImageIndex}
                        onSelect={handleModalSelect}
                        keyboard={true}
                        className="modal-carousel"
                    >
                        {tours[activeTourIndex].folder &&
                            Array.from({ length: 6 }, (_, index) => (
                                <Carousel.Item key={index}>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={`${imagePath}/${tours[activeTourIndex].folder}/${index + 1}.jpg`}
                                            alt={tours[activeTourIndex].name}
                                        />
                                    </Card>
                                </Carousel.Item>
                            ))}
                    </Carousel>
                </Modal.Body>

            </Modal>
        </div>
    );
}
