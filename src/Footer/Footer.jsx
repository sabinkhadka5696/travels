import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
function Footer() {
  return (
    <>
    <Container className='grid'>
        <Row>
            <Col>
               <h5>Contact Us</h5>
               <div className='grid-content'>
                <p className='grid-title'>Toll Free Customer Care</p>
                <a href='#'>+(1) 123 456 7890</a>
                </div>
             
             <div className="grid-subcontent">
                <p className='grid-title'>Need live support?</p>
                <a href='#'>hi@gotrip.com</a>
                </div>
               
            
            </Col>
            <Col>
            <h5 className='px-4'>Company</h5>
            <div className='grid-content'>
            <ul>
            <p className='abc'><a href='#'>About Us</a> </p>
            <p  className='abc'><a href='#'>Careers</a> </p>
            <p className='abc'><a href='#'>Blog</a> </p>
            <p className='abc'><a href='#'>Press</a> </p>
            <p className='abc'><a href='#'>Gift Cards</a> </p>
            <p className='abc'><a href='#'>Magazine</a> </p>
            </ul>
            </div>
            </Col>
            <Col>
            <h5 className='px-4'>Support</h5>
            <div className='grid-content'>
            <ul>
            <p className='abc'><a href='#'>Contact</a> </p>
            <p  className='abc'><a href='#'>Legal Notice</a> </p>
            <p className='abc'><a href='#'>Privacy Policy</a> </p>
            <p className='abc'><a href='#'>Terms and Conditions</a> </p>
            <p className='abc'><a href='#'>Sitemap</a> </p>
            </ul>
            </div>
            </Col>
            <Col>
            <h5 className='px-4'>Other Services</h5>
            <div className='grid-content'>
            <ul>
            <p className='abc'><a href='#'>Car hire</a> </p>
            <p  className='abc'><a href='#'>Activity Finder</a> </p>
            <p className='abc'><a href='#'>Tour List</a> </p>
            <p className='abc'><a href='#'>Flight finder</a> </p>
            <p className='abc'><a href='#'>Cruise Ticket</a> </p>
            <p className='abc'><a href='#'>Holiday Rental</a> </p>
            <p className='abc'><a href='#'>Travel Agents</a> </p>
            </ul>
            </div>
            </Col>
            <Col>
            <h5 className='px-4'>Mobile</h5>
            <div className='apple'>
            <i class="fa-brands fa-apple"></i>
              <p className='apple-title'>Download on the</p>
              <p className='apple-subtitle'>Apple Store</p>
            </div>

            <div className='apple'>
            <i class="fa-brands fa-google-play"></i>
              <p className='apple-title'>Get in on</p>
              <p className='apple-subtitle'>Google Play</p>
            </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Footer