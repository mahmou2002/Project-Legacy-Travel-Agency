import React,{useRef,useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/tour-details.css'
import { Container,Row,Col,Form,ListGroup } from 'reactstrap'
import {useParams,Link,useNavigate} from 'react-router-dom'
import calculateAvgRating from './../Utils/avgRating'
import avatar from './../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Update from './Update'
import { getOkLogIn} from '../context/AuthContext'


function TourDetails({book,loggedUser,tours,renderReview,setToursByUser,showThankYouTag}) {
  const {id}=useParams()
  const reviewMsgRef=useRef('')
  const [tourRating,setTourRating]=useState(null)
 
const navigate=useNavigate()

  const tour = tours.filter(tour=>tour._id === id)
  const{photo,title,desc,price,city,adress,distance,maxGroupSize,reviews}=tour[0]
  const {totalRating, avgRating}= calculateAvgRating(reviews)
  // console.log(tour[0]);
//================================= Posting reviews ===================================================================
const [reviewText,setReviewText] = useState('')
const [toggle,setToggle] = useState(false)

const reviewDetails={
  reviewText: reviewText,
  rating: tourRating,
  username:loggedUser
}
 const options ={day:'numeric',month:'long',year:'numeric'}
 const handle=e=>{
  if(!reviewDetails.username) alert("You need to LogIn to post a review")
  else if(!reviewDetails.rating) alert("You need to rate the tour")
  else if(reviewDetails.reviewText==='') alert("You need to type a review")
  else {
    axios.post(`http://localhost:4000/Tour/${id}/reviews`,reviewDetails).then((res)=>{setReviewText('');setTourRating(null)}).catch((err)=>{console.log(err)})
}
  renderReview();
  e.preventDefault()


 }

const showUpdate = ()=>{
  setToggle(!toggle)
}
//================================= end Posting reviews ===================================================================
//================================= select rating ===================================================================
 const [clicked1, setClicked1] = useState(false);
 const rate1=()=>{setClicked1(true); setClicked2(false);setClicked3(false);setClicked4(false);setClicked5(false)}
 const style1 = clicked1 ? {color: 'red' } : {};

 const [clicked2, setClicked2] = useState(false);
 const rate2=()=>{setClicked1(true);setClicked2(true) ;setClicked3(false);setClicked4(false);setClicked5(false)}
 const style2 = clicked2 ? {color: 'red' } : {};

 const [clicked3, setClicked3] = useState(false);
 const rate3=()=>{setClicked1(true);setClicked2(true);setClicked3(true); setClicked4(false);setClicked5(false)}
 const style3 = clicked3 ? {color: 'red' } : {};

 const [clicked4, setClicked4] = useState(false);
 const rate4=()=>{setClicked1(true);setClicked2(true);setClicked3(true);setClicked4(true);setClicked5(false)}
 const style4 = clicked4 ? {color: 'red' } : {};

 const [clicked5, setClicked5] = useState(false);
 const rate5=()=>{setClicked1(true);setClicked2(true);setClicked3(true);setClicked4(true);setClicked5(true)}
 const style5 = clicked5 ? {color: 'red' } : {};

  return (
   <>
   <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className='tour-content'>
            <img src={photo} alt="img"/>
            <div className="tour-info">
              <h2>{title}</h2>
              <div className='d-flex align-items-center gap-5'>
              <span className tour_rating d-flex align-items-center gap-1 >
                 <i class= "ri-star-s-fill" style={{color: "var(--secondary-color)" }}></i>
                       {avgRating===0 ? null : avgRating}
                  {totalRating=== 0 ? ( "Not rated") : ( <span>({reviews?.length}) </span>)}
                   </span>
                   <span>
                   <i class="ri-map-pin-user-fill"></i>{adress}
                   </span>
              </div>
              <div className="tour-extra-details">
                <span> <i class="ri-map-pin-2-line"></i>{city}</span>
                <span> <i class="ri-money-dollar-circle-line"></i>${price} /per person</span>
                <span> <i class="ri-map-pin-time-line"></i>{distance} k/m</span>
                <span> <i class="ri-group-line"></i>{maxGroupSize} people</span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>




            { loggedUser === "admin"&& getOkLogIn() && <div className='card_bottom d-flex align-items-center justify-content-between mt-3'>
            <button className="btn booking_btn" onClick={()=>{
                            axios.delete(`http://localhost:4000/Tour/${id}`).then((res)=>{
                            renderReview();navigate("/")}).catch((err)=>{console.log(err)})
                        }} >
                <Link to={"/"}>Delete</Link>
            </button>
            <button className="btn booking_btn" onClick={showUpdate}>
                {!toggle &&<Link >Update </Link>}
                {toggle && <Link > Cancel Update </Link>}
            </button>
            
            </div>}







            <div className="tour-reviews mt-4">
            {reviews.length !== 1 &&<h4>Reviews ({reviews?.length} reviews)</h4>}
            {reviews.length === 1 && <h4>Reviews ({reviews?.length} review)</h4>}
              <Form onSubmit={handle}>
                <div className='d-flex align-items-center gap-3 mb-4 rating-group'>
                    <span onClick={()=>{setTourRating(1);rate1()}} style={style1}>1<i className="ri-star-s-fill"></i></span>
                    <span onClick={()=>{setTourRating(2);rate2()}} style={style2}>2<i className="ri-star-s-fill"></i></span>
                    <span onClick={()=>{setTourRating(3);rate3()}} style={style3}>3<i className="ri-star-s-fill"></i></span>
                    <span onClick={()=>{setTourRating(4);rate4()}} style={style4}>4<i className="ri-star-s-fill"></i></span>
                    <span onClick={()=>{setTourRating(5);rate5()}} style={style5}>5<i className="ri-star-s-fill"></i></span>
                </div>
                <div className="review-input">
                  <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required onChange={(event)=>setReviewText(event.target.value)}/>
                  <button className='btn primary__btn text-white' type='submit'>Submit</button>
                </div>
              </Form>
              <ListGroup className='user-review'> 
                   {
                    reviews?.map(review=>(
                      <div className='review-item'>
                        <img src={avatar} alt=''/>
                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(`${review.date}`).toLocaleDateString('en-US', options)}</p>
                            </div>
                             <span className='d-flex align-items-center'>{review.rating}
                             <i class="ri-star-s-fill"></i>
                             </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                      </div>
                    )
                      )
                   }
              </ListGroup>

              {loggedUser==="admin" && toggle && <Update data={tour[0]} renderReview={renderReview}/>}



            </div>
          </div>
        </Col>
        <Col lg='4'>
        <Booking tours={tours} tour={tour} avgRating={avgRating} loggedUser={loggedUser} renderReview={renderReview} book={book} setToursByUser={setToursByUser} showThankYouTag={showThankYouTag}/>
        </Col>
      </Row>
    </Container>
   </section>
   
   </>
  )
}

export default TourDetails