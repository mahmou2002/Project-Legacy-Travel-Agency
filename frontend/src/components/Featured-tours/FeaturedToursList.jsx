import React from 'react'
import TourCard from '../../shared/TourCard'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'



function FeaturedToursList({tours}) {

    return (
    <>
        {
            tours?.map(tour => (
                <Col lg='3' className='mb-4' key={tour._id}>
                    <TourCard tour={tour} />
                    </Col>
            ))
        }
    </>
    )
}

export default FeaturedToursList
