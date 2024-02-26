import React from 'react'
import './inspiration.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
function Inspiration() {
  return (
    <>
    <Container data-aos="fade-up">
        <div className='inspiration-title'>
        <h2>Get inspiration for your next trip</h2>
        <p className='inspiration-subtitle'>Interdum et malesuada fames</p>
        </div>
        <Row data-aos="fade-right" >
            <Col >
            <div className='inspiration-image'>
            <img className='zoom'src='image13.jpg' alt='Europe'></img>
            <h5 className='inspiration-content'>10 European ski destinations you should visit this winter</h5>
            <p>April 06, 2022</p>
            </div>
            </Col>
            <Col>
            <div className='inspiration-image'>
            <img className='zoom'src='image14.jpg' alt='Ireland'></img>
            <h5 className='inspiration-content'>Booking travel during Corona: good advice in an uncertain time</h5>
            <p>April 06, 2022</p>
            </div>
            </Col>
            <Col>
            <div className='inspiration-image'>
            <img className='zoom'src='image15.jpg' alt='Australia'></img>
            <h5 className='inspiration-content'>Where can I go? 5 amazing countries that are open right now</h5>
            <p>April 06, 2022</p>
            </div>
            </Col>
        </Row>
    </Container>

    <Container fluid className='journey'>
        <Row>
            <Col>
            <div className='journey-content'>
            <i class="fa-solid fa-envelope-open-text"></i>
            <h3 className='journey-title'>Your Travel Journey Starts Here</h3>
            <p className='journey-subtitle'>Sign up and we'll send the best deals to you</p>
        </div>
            </Col>
            <Col>
            <Form className='form'>
            <Form.Control size="lg" type="email" placeholder="Enter email" />
            <Button variant="primary" type="submit">
            Subscribe
      </Button>
            </Form>
            </Col>
        </Row>
        </Container>
    </>
  )
}

export default Inspiration