
import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                Thanks to Travel World, I had an amazing vacation with a perfect itinerary that included adventure and relaxation. The accommodations were top-notch and the excursions unforgettable. I highly recommend this agency for a stress-free and unforgettable vacation.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3"></div>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Elijah Barron</h6>
                    <p>Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>I've used Travel World for all my vacations over the past few years and they never disappoint. The staff is knowledgeable and always available to answer any questions or concerns. Their attention to detail is impeccable and I always feel like I'm getting the best deal possible.</p>
                <div className="d-flex align-items-center gap-4 mt-3"></div>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Saarah Dean</h6>
                    <p>Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>I was hesitant about using a travel agency at first, but Travel World exceeded my expectations. They took care of everything from start to finish, leaving me with nothing to worry about but having a good time. I will definitely be using them again for my next trip.</p>
                <div className="d-flex align-items-center gap-4 mt-3"></div>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Gabriel Bell</h6>
                    <p>Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                Thanks to Travel World, my honeymoon was the trip of a lifetime. The team was attentive and made sure everything was perfect. Even with unexpected changes to our itinerary, they handled everything seamlessly. I can't recommend Travel World enough!
                </p>
                <div className="d-flex align-items-center gap-4 mt-3"></div>
                <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Jamal Morris</h6>
                    <p>Customer</p>
                </div>
            </div>

            
        </Slider>
    )
}

export default Testimonial
