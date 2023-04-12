import React,{useState} from 'react'
import{Form,FormGroup,Button} from 'reactstrap'
import axios from 'axios'
// import '../styles/post.css'
import '../components/Booking/booking.css'
import {useNavigate} from 'react-router-dom'
function Post({renderReview}) {
const[title,setTitle]=useState("")
const[des,setDes]=useState("")
const[img,setImg]=useState("")
const[pri,setPri]=useState("")
const[add,setAdd]=useState("")
const[city,setCity]=useState("")
const[dis,setDis]=useState("")
const[max,setMax]=useState("")
const navigate=useNavigate()


const posted=()=>{
  axios.post(`http://localhost:4000/Tour/add`,{title:title,desc:des,photo:img,price:pri,city:city,address:add,distance:dis,maxGroupSize:max}).then((res)=>{
      
  renderReview();navigate("/")}).catch((err)=>{console.log(err)})
}

  return (
    <div className="booking-form"> <h5 style={{textAlign:"center"}}>Add A New Tour</h5>

<Form className='booking-info-form'>
        <FormGroup>
        <input type='text' placeholder='title'  onChange={(e)=>{setTitle(e.target.value)}}  />
        </FormGroup>
        <FormGroup>
        <input type='number' placeholder='distance'  onChange={(e)=>{setDis(e.target.value)}} />
        </FormGroup>
        <FormGroup >
        <input type='text' placeholder='city' onChange={(e)=>{setCity(e.target.value)}} /> </FormGroup>
        <FormGroup >  
        <input type='text' placeholder='address'  onChange={(e)=>{setAdd(e.target.value)}} />
        </FormGroup>
        <FormGroup >  
        <input type='text' placeholder='photo'  onChange={(e)=>{setImg(e.target.value)}}/>
        </FormGroup>
        <FormGroup >  
        <input type='text' placeholder='description'  onChange={(e)=>{setDes(e.target.value)}} />
        </FormGroup>
        <FormGroup>
        <input type='number' placeholder='price'  onChange={(e)=>{setPri(e.target.value)}} />
        </FormGroup>
        <FormGroup>
        <input type='number' placeholder='maxGroupSize'   onChange={(e)=>{setMax(e.target.value)}}/>
        </FormGroup>
    </Form>
    <div style={{textAlign: 'center'}}>
    <Button className='btn primary__btn  mt-4' style={{ width: '200px' }} onClick={()=>{posted()}} >Post Now</Button>
    </div>
    </div>
  )
}

export default Post

