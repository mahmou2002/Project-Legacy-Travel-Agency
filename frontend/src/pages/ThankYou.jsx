import React,{useEffect} from 'react'
import { Table } from 'reactstrap';
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Newsletter from './../shared/Newsletter'
import '../styles/thank-you.css'


function ThankYou({toursByUser,newBook}) {


  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='pt-5 text-center'>
              <div className='thank-you'>
                {newBook && <span><i class="ri-checkbox-circle-line"></i></span>}
                {newBook && <h1 className='mb-3 fw-semibold'>Thank YOU!</h1>}
                {newBook && <h3 className='mb-4'>your tour is booked.</h3>}
                <Table>
                  <tbody>
                  <tr>
                      <td style={{ fontWeight: 'bold' }}>Name</td>
                      <td style={{ fontWeight: 'bold' }}>Location</td>
                      <td style={{ fontWeight: 'bold' }}>Booked At</td>
                      <td style={{ fontWeight: 'bold' }}>Number Of Guests</td>
                      <td style={{ fontWeight: 'bold' }}>Price</td>
                      </tr>
                    {toursByUser?.map((e)=>{
                      return(
                        <tr>
                      <td>{e.fullName}</td>
                      <td style={{ paddingLeft: 0 }}><p style={{ marginLeft: 0 }}>{e.title +": "+e.city}</p></td>
                      <td>{e.bookAt}</td>
                      <td>{e.guestSize}</td>
                      <td>{e.price*e.guestSize+10}</td>
                      </tr>
                      )
                    })}
                  </tbody>
                </Table>
                <Button className='btn primary__btn w-25'><Link to='/home'>Back to Home</Link></Button>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>
      <Newsletter />
    </>
  )
}

export default ThankYou