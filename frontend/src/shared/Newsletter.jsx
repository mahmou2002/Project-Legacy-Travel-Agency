import React from 'react'
import './newsletter.css'
import{Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

function Newsletter() {
    const navigate=useNavigate()
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newslette_content">
                            <h2>Subscribe now to get useful traveling information.</h2>
                            <div className="newslette_input">
                                <input type="email" placeholder='Enter you email adress' />
                                <button className="btn newsletter_btn" onClick={()=>navigate("/thank-youNl")}> <span>Subscribe</span></button>
                            </div>
                            <p>Don't miss out on exclusive travel deals and insider tips! Subscribe to our newsletter now for weekly updates and inspiration delivered straight to your inbox.</p>
                        </div>

                    </Col>
                    <Col lg='6'>
                       <div className="newsletter_img">
                        <img src={maleTourist} alt="" />
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter
