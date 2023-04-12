import React from 'react'
import CommonSection from '../shared/CommonSection'

import Newsletter from './../shared/Newsletter'
import "../styles/tours.css"
import { Container,Row,Col } from 'reactstrap'


function About() {
  


{/* <section className='pt-0'>
    
   </section> */}

  

  return (
   <>
   <CommonSection title={'Contact'}/>
   <section id="contact">
            <p>At Travel World, we believe that responsible travel is the key to a sustainable future. That's why we work with local communities and tour operators to promote eco-friendly and ethical travel practices. We believe that by traveling responsibly, we can make a positive impact on the world and create a brighter future for generations to come.
              <br />
              <br />
              <span style={{ color: 'red' }} >
              Thank you for your interest ! If you have any questions or concerns, please don't hesitate to contact us using one of the following methods:
              </span>
              </p>
            <ul>
                <li><strong>Phone:</strong> +(216) 94 02 91 21</li>
                <li><strong>Email:</strong> <a href="mailto:info@travelworld.com">mailto:info@travelworld.com</a></li>
                <li><strong>Address:</strong> B23, Technopark Elghazela ariana, 2088</li>
            </ul>
            <p>You can also reach out to us on social media:</p>
            <ul class="social-media">
            <li><a href="https://www.facebook.com/TravelWorldOfficialPage/"><img src="https://i.pinimg.com/564x/63/a2/31/63a231592efca78f2bcbc02267eb37be.jpg" alt="Facebook"/></a></li>
            <li><a href="https://twitter.com/TravelWorld_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://i.pinimg.com/originals/0d/9c/24/0d9c24b21e25f1ecd9f69026f692322e.png" alt="Twitter"/></a></li>
            <li><a href="https://www.instagram.com/_travelworld.__/?hl=en"><img src="https://image.similarpng.com/very-thumbnail/2020/06/Instagram-logo-transparent-PNG.png" alt="Instagram"/></a></li>
            </ul>
            <div id="map" style={ {display:'flex', justifyContent: 'center', alignItems: 'center' , border: 0} } ><iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51082.77070137811!2d10.149149747845627!3d36.85030276403762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb32a574f131%3A0x736d6f5853a1bd2e!2sRebootkamp!5e0!3m2!1sen!2stn!4v1679643182396!5m2!1sen!2stn" 
      width="1390" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe></div>
        </section>

   <Newsletter/>
   </>
  )
}

export default About