import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slick.css'
import { Button } from "react-bootstrap";

function Slick() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "70px",
        slidesToShow: 3,
        speed: 500
      };
  return (
    <>
        <div data-aos="fade-right">
        <Slider {...settings}>
           <div className="card-1">
                    <img  className="card-img" src="image2.jpg" alt="NEW YORK"></img>
                    <h1 className="card-head">NEW YORK</h1>
                    <h1 className="card-title">NEW YORK</h1>
                    <p className="card-subtitle">14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                    <Button className="card-btn">Discover</Button>
                </div>
  
          <div className="card-1">
                    <img className="card-img"src="image3.jpg" alt="London"></img>
                    <h1 className="card-head">London</h1>
                    <h1 className="card-title">London</h1>
                    <p className="card-subtitle">14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                    <Button className="card-btn">Discover</Button>
                </div>

        
          <div className="card-1">
                    <img className="card-img"src="image4.jpg" alt="Barcelona"></img>
                    <h1 className="card-head">Barcelona</h1>
                    <h1 className="card-title">Barcelona</h1>
                    <p className="card-subtitle">14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                    <Button className="card-btn">Discover</Button>
                </div>
        
       
          <div className="card-1">
                    <img className="card-img"src="image5.jpg" alt="Nepal"></img>
                    <h1 className="card-head">Nepal</h1>
                    <h1 className="card-title">Nepal</h1>
                    <p className="card-subtitle">14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                    <Button className="card-btn">Discover</Button>
                </div>
        
          
          <div className="card-1">
                    <img className="card-img"src="image6.jpg" alt="Spain"></img>
                    <h1 className="card-head">Spain</h1>
                    <h1 className="card-title">Spain</h1>
                    <p className="card-subtitle">14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                    <Button className="card-btn">Discover</Button>
                </div>
         
       
          <div className="card-1">
                    <img className="card-img"src="image7.jpg" alt="China"></img>
                    <h1 className="card-head">China</h1>
                    <h1 className="card-title">China</h1>
                    <p className="card-subtitle">14 Hotel - 22 Cars - 18 Tours - 95 Activity</p>
                    <Button className="card-btn">Discover</Button>
                </div>
        
        </Slider>
      </div>
    </>
  )
}

export default Slick 