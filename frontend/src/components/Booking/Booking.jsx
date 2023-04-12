import React,{useState} from 'react'
import axios from 'axios'
import './booking.css'
import{Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'


function Booking({loggedUser,tour,avgRating ,renderReview,book,setToursByUser,tours,showThankYouTag}) {
    const {price,reviews,_id}=tour[0]
    const navigate=useNavigate()
 const [credent,setCredent]=useState({
    tourId:_id,
    username:loggedUser,
    fullName:'',
    Phone:'',
    guestSize:1,
    bookAt:''
 })

 const serviceFee=10
 const totalAmount=Number(price)* Number(credent.guestSize) + Number(serviceFee)
    const handleChange=e=>{
        setCredent(prev=>({...prev,[e.target.id]:e.target.value}))
    }

//==================== Booking (inserting data to db) ======================================================
    const handle=e=>{
        e.preventDefault()
        if(!credent.username){
          alert("You need to LogIn to book your trip") //Only Book when you're Logged In
        }
        else if(credent.fullName ==='' || credent.Phone ==='' || credent.bookAt ===''){
          alert("All fields are required") // all fields are not empty
        }
        else {
          axios.post("http://localhost:4000/Book/add",credent).then((res)=>{navigate("/thank-you")}).catch((err)=>{console.log(err)})
          renderReview()
          getToursByUser()
          showThankYouTag()
        }
    }
      
//=========================================== getting the booked tours =======================================
const userBooks = book.filter((e) => e.username === loggedUser)
let ToursByUser =[]

const getToursByUser = ()=>{
  if(userBooks.length){
  for(var i=0;i<userBooks.length;i++){
    for(var j=0;j<tours.length;j++){
      if(tours[j].id === userBooks[i].tourId){
        ToursByUser.push({
          city:tours[j].city,
          title:tours[j].title,
          price:tours[j].price,
          fullName:userBooks[i].fullName,
          bookAt:userBooks[i].bookAt,
          guestSize:userBooks[i].guestSize
        })}}}}
        setToursByUser(ToursByUser)
}


//============================================================================================================

  return (
    <div className='booking'>
 <div className="booking-top d-flex align-items-center justify-content-between">
      <h3>${price}<span>/per person</span></h3>
      <span className tour_rating d-flex align-items-center>
                 <i class= "ri-star-s-fill"  ></i>
                       {avgRating===0 ? null : avgRating} ({reviews?.length})
                   </span>         
 </div>
<div className="booking-form">
    <h5>Information</h5>
    <Form className='booking-info-form' onSubmit={handle}>
        <FormGroup>
        <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
        <input type='number' placeholder='Phone' id='Phone' required onChange={handleChange}/>
        </FormGroup>
        <FormGroup className='d-flex align-items-center gap-3'>
        <input type='date' placeholder='' id='bookAt' required onChange={handleChange}/>
        <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange}/>
        </FormGroup>
    </Form>
</div>
 <div className="booking-buttom">
    <ListGroup>
        <ListGroupItem className='border-0 px-0'>
          <h5 className='d-flex align-items-center gap-1'>${price} <i class="ri-close-line"></i> 1 person</h5>
          <span>${price}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <h5>Service charge</h5>
          <span>${serviceFee}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0 total'>
          <h5>Total</h5>
          <span>${totalAmount}</span>
        </ListGroupItem>
    </ListGroup>
    <Button className='btn primary__btn w-100 mt-4' onClick={handle}>Book Now</Button>
 </div>
    </div>
  )
}

export default Booking