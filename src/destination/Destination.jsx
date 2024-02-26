import React from 'react'
import './Destination.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { GoArrowUpRight } from "react-icons/go";
import Slick from '../slick/Slick';
import Grid from '../Grid/Grid';
import Feedback from '../feedback/Feedback';
import Inspiration from '../inspiration/Inspiration';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Destination() {
  return (
    <>
    <Container>
        <Row>
            <Col>
    <div className='py-5 ' data-aos="zoom-in-right">
    <h1>Popular Destinations</h1>
    <p>These popular destinations have a lot to offer</p>
    </div>
    </Col>
    <Col>
    <div className='view' data-aos="zoom-in-left">
        <Button>View All Destinations<GoArrowUpRight /></Button>
    </div>
    </Col>
    </Row>
    </Container>

    <Slick/>
    <Grid/>
    <Feedback/>
    <Inspiration/>
    
    </>
  )
}

export default Destination;