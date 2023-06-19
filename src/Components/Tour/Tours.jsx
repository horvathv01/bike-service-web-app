import React, { useState } from 'react';
import Header from '../PageComponents/Header';
import { Card, Button, Carousel, Row, Col, Modal } from 'react-bootstrap';

export default function Tours() {
    const imagePath = './BikeTourImages';

    const tours = [
        {
            id: 1,
            name: 'Racing in the mountains',
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
                'Share your experiences of conquering country roads with your cycling friends! Come and take part in a fantastic adventure between cities! Cycle through beautiful landscapes with all kinds of experiences!',
            buttonText: 'Adventure Up!',
            buttonLink: 'https://example.com/subscribe',
            tourLink: 'https://example.com/tour2',
        },
        {
            id: 3,
            name: 'Urban culture roll',
            folder: 'City',
            description:
                'Discover Budapest\'s cultural heritage from the Basilica through Parlament to the Buda Castle. Enjoy the Várkert Bazar surrounded by flowery parks! Roll down to the shade of the green trees of Margitsziget!',
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
                className="mb-4"
                fade
            >
                {tours.map((tour, index) => (
                    <Carousel.Item key={tour.id}>
                        <Row className="justify-content-center">
                            {[index - 1, index, index + 1].map((carouselIndex) => {
                                let currentTour;

                                if (carouselIndex === -1) {
                                    currentTour = tours[tours.length - 1];
                                } else if (carouselIndex === tours.length) {
                                    currentTour = tours[0];
                                } else {
                                    currentTour = tours[carouselIndex];
                                }

                                if (!currentTour) return null; // Check if the tour exists

                                const isActive = carouselIndex === index;
                                const isPrev = carouselIndex === index - 1;
                                const isNext = carouselIndex === index + 1;

                                let cardStyle = {};
                                let transitionDelay = 0;


                                if (isActive) {
                                    cardStyle = { transform: "scale(1)" };

                                } else if (isPrev) {
                                    cardStyle = { transform: "translateX(5%) scale(0.9)", opacity: 0.7 };

                                    transitionDelay = 200;
                                } else if (isNext) {
                                    cardStyle = { transform: "translateX(-5%) scale(0.9)", opacity: 0.7 };

                                    transitionDelay = 200;
                                }

                                return (
                                    <Col
                                        lg={4}
                                        md={6}
                                        className="mb-4"
                                        key={currentTour.id}
                                        style={{ transitionDelay }}
                                    >
                                        <Card className={`tour-card ${isActive ? "active" : ""}`}
                                            style={cardStyle}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={`${imagePath}/${currentTour.folder}/1.jpg`}
                                                alt={currentTour.name}
                                            />
                                            <Card.Body>
                                                <Card.Title>{currentTour.name}</Card.Title>
                                                <Card.Text>{currentTour.description}</Card.Text>
                                                <Button
                                                    variant="primary"
                                                    onClick={() => openModal(carouselIndex)}
                                                >
                                                    Learn More
                                                </Button>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button variant="dark" href={currentTour.buttonLink}>
                                                    {currentTour.buttonText}
                                                </Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                );
                            })}
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
