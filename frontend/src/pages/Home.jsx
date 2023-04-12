import React, {useState,useEffect} from 'react'
import axios from 'axios'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png';

import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar'

import ServiceList from '../services/ServiceList'
import FeaturedToursList from '../components/Featured-tours/FeaturedToursList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'

function Home({tours,serchedTours, setSerchedTours,weather}) {
  
  

  return (
    <>
    <div className="chat-icon">
    <i class="ri-chat-3-line"></i>
    </div>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero_content'>
              <div className='hero_subtitle d-flex align-items-center'>
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt='img' />
              </div>
              <h1>Traveling opens the door to creating <span className="highlight">memories</span> </h1>
              <p>Escape the daily grind with Travel World. Our experienced agents will tailor your trip to your preferences and budget, taking care of everything from flights to tours. Book your adventure today and let us take you on a journey you'll never forget.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero-img-box'>
              <img src={heroImg} alt='img' />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero-img-box mt-4'>
              <video src={heroVideo} alt='' controls autoPlay loop volume={0.1} />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero-img-box mt-5'>
              <img src={heroImg02} alt='img' />
            </div>
          </Col>
          <SearchBar tours={tours} setSerchedTours = {setSerchedTours}/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services_subtitle'>What we serve</h5>
            <h2 className='services_title'>We offer our best services</h2>
          </Col>
          <ServiceList weather={weather} tours={tours}/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured_tour-title">Our featured tours</h2>
          </Col>
          {tours.length && <FeaturedToursList  tours={tours}/>}
        </Row>
      </Container>
    </section>
{/* ================================================ Agency Experience ===============================================================  */}
<section>
  <Container>
    <Row>
      <Col lg='6'>
        <div className="experience_content"></div>
        <Subtitle subtitle={'Experience'}/>
        <h2>With our all experience <br /> we will serve you</h2>
        <p>With 15 years of experience and 12k+ successful trips, Travel World is your go-to travel agency. Our experienced team will create a custom itinerary tailored to your interests and preferences.
          <br /> 
          Let us serve you with all our expertise.
          </p>
          <div className="counter_wrapper d-flex align-items-center gap-5">
            <div className="counter_box">
              <span>12k+</span>
              <h6>Successful trip</h6>
            </div>

            <div className="counter_box">
              <span>2k+</span>
              <h6>Regular clients</h6>
            </div>

            <div className="counter_box">
              <span>15</span>
              <h6>Years experience</h6>
            </div>
          </div>
      </Col>
      <Col lg='6'>
        <div className="experience_img">
          <img src={experienceImg} alt="experienceImg" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
{/* ================================================ Gallery ===============================================================  */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle ={'Gallery'}/>
        <h2 className="gallery_title">
          Visit our customers tour gallery
        </h2>
      </Col>
      <Col lg='12'>
        <MasonryImagesGallery/>
      </Col>
    </Row>
  </Container>
</section>
{/* ================================================ Testimonial ===============================================================  */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
      <Subtitle subtitle ={'Fans Love'}/>
      <h2 className="testimonial_title">What our fans say about us</h2>
      </Col>
      <Col lg='12'>
        <Testimonial/>
      </Col>
    </Row>
  </Container>
</section>
{/* ================================================ Newsletter ===============================================================  */}
<Newsletter/>
    </>
  )
}

export default Home