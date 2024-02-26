import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './feedback.css'
import Slider from "react-slick";
function Feedback() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Container fluid className='feedback' data-aos="fade-up">
                <Row>
                    <Col>
                        <div className='feedback-title'>
                            <h2>What our customers are</h2>
                            <h2>saying us?</h2>
                            <p className='feedback-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p>
                        </div>
                    </Col>

                    <Col>
                        <div className='slider'>
                            <Slider {...settings}>
                                <div className='slider-content'>
                                    <img src='profile.jpg' alt='image'></img>
                                    <h5 className='profile-title'>Sabin khadka</h5>
                                    <p className='profile-subtitle'>UX / UI Designer</p>
                                    <p className='profile-subsubtitle'>The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.</p>
                                </div>
                                
                                <div className='slider-content'>
                                    <img src='profile.jpg' alt='image'></img>
                                    <h5 className='profile-title'>Sabin khadka</h5>
                                    <p className='profile-subtitle'>UX / UI Designer</p>
                                    <p className='profile-subsubtitle'>The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.</p>
                                </div>
                                
                                <div className='slider-content'>
                                    <img src='profile.jpg' alt='image'></img>
                                    <h5 className='profile-title'>Sabin khadka</h5>
                                    <p className='profile-subtitle'>UX / UI Designer</p>
                                    <p className='profile-subsubtitle'>The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.</p>
                                </div>
                            </Slider>
                        </div>
                        </Col>

                    <Row>
                        <Col>
                            <div className='feedback2-title'>
                                <h2>13m+</h2>
                                <p className='feedback2-subtitle'>Happy People</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='feedback3-title'>
                                <h2>4.88</h2>
                                <p className='feedback3-subtitle'>Overall rating</p>
                                <div className='rating'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <Col>
                    </Col>


                </Row>

            </Container>
        </>
    )
}

export default Feedback