import React from 'react'
import './header.css'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { ImAirplane } from "react-icons/im";
function Header() {
  
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/"><ImAirplane className='logo' />GoTrip</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='Gotrip'>
         <img src="image1.png" alt='goTripimg'></img>
        <div className="content" data-aos="fade-up">
          <h1 className='context'data-aos="fade-up"     data-aos-duration="200">Find Next Place To Visit</h1> 
          <p>Discover amzaing places at exclusive deals</p>
          <Button className='btn btn-primary px-5 my-5'>Start Plan</Button>
        </div>
        </div>
        
  </>
  )
}

export default Header