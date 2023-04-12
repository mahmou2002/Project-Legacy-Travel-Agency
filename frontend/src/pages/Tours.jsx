import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommonSection from '../shared/CommonSection'

import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import "../styles/tours.css"
import { Container,Row,Col } from 'reactstrap'


function Tours({tours,serchedTours, setSerchedTours}) {
  const [pageCount,setPageCount]=useState(0)
  const [page,setPage]=useState(0)



  useEffect(()=>{
    const pages =Math.ceil(5/4)
    setPageCount(pages)
  },[page])
  

  return (
   <>
   <CommonSection title={'All Tours'}/>
   <section>
    <Container>
      <Row>
        <SearchBar setSerchedTours = {setSerchedTours} tours = {tours}/>
      </Row>
    </Container>
   </section>
   <section className='pt-0'>
    <Container>
    {
          !serchedTours.length && <h2 style={{ textAlign: "center" }}> No such tour</h2>
        }
      <Row>
        {
          serchedTours?.map(tour => <Col lg='3' className='mb-4' key={tour._id}><TourCard tour={tour}/></Col>)
        }
        <Col lg="12">
          <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
            {[...Array(pageCount).keys()].map(n=>(
              <span key={n} className={page===n ? "active-page":""} onClick={()=>{setPage(n)}}>{n+1}</span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
   </section>
   <Newsletter/>
   </>
  )
}

export default Tours