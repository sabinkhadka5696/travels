import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Grid.css'
function Grid() {
  return (
    <>
     <Container className='Grid' data-aos="fade-zoom-in">
      <Row>
        <Col>
    <div className='image'>
        <img src='image8.jpg'alt='image'></img>
        <div className='Grid-content'>
        <h1>Things to do on</h1>
        <h1>your trip</h1>
        <div className="mb-2 py-5">
        <Button variant="light" size="lg">
         Experiences
        </Button>
        </div>
        </div>
        </div>
        </Col>
     
        <Col>
        <div className='image'>
        <img src='image9.jpg'alt='image'></img>
        <div className='Grid-content'>
        <p>Enjoy Summer Deals</p>
        <h1>Up to 70% Discount!</h1>
        <div className="mb-2 py-5">
        <Button variant="light" size="lg">
          Learn More
        </Button>
        </div>
        </div>
        </div>
        </Col>
      </Row>
    </Container>

    <Container >
      <Row  data-aos="fade-right">
        <Col >
        <div className='Price' >
          <img src='image10.svg'></img>
          <div className='Price-content'>
            <h5>Best Price Guarantee</h5>
            <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </Col>
        <Col>
        <div className='Price'>
          <img src='image11.svg'></img>
          <div className='Price-content'>
            <h5>Easy & Quick Booking</h5>
            <p  className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </Col>
        <Col>
        <div className='Price'>
          <img src='image12.svg'></img>
          <div className='Price-content'>
            <h5>Customer Care 24/7</h5>
            <p  className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Grid