import React,{useState} from 'react'
import{Form,FormGroup,Button} from 'reactstrap'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
import '../components/Booking/booking.css'


function Update({renderReview, data}) {
  const[title,setTitle]=useState(data.title)
  const[des,setDes]=useState(data.desc)
  const[img,setImg]=useState(data.photo)
  const[pri,setPri]=useState(data.price)
  const[add,setAdd]=useState(data.address)
  const[city,setCity]=useState(data.city)
  const[dis,setDis]=useState(data.distance)
  const[max,setMax]=useState(data.maxGroupSize)
  const navigate=useNavigate()



  const posted=()=>{
    axios.put(`http://localhost:4000/Tour/${data._id}`,{title:title,desc:des,photo:img,price:pri,city:city,address:add,distance:dis,maxGroupSize:max}).then((res)=>{
        
    renderReview();navigate("/")}).catch((err)=>{console.log(err)})
  }
  return (
    <div className="booking-form">

<Form className='booking-info-form'>
        <FormGroup>
        <input type='text' defaultValue={data.title}  onChange={(e)=>{setTitle(e.target.value)}}  />
        </FormGroup>
        <FormGroup>
        <input type='number'  defaultValue={data.distance}  onChange={(e)=>{setDis(e.target.value)}} />
        </FormGroup>
        <FormGroup >
        <input type='text'   defaultValue={data.city} onChange={(e)=>{setCity(e.target.value)}} /> </FormGroup>
        <FormGroup >  
        <input type='text'   defaultValue={data.address} onChange={(e)=>{setAdd(e.target.value)}} />
        </FormGroup>
        <FormGroup >  
        <input type='text'  defaultValue={data.photo} onChange={(e)=>{setImg(e.target.value)}}/>
        </FormGroup>
        <FormGroup >  
        <input type='text'   defaultValue={data.desc} onChange={(e)=>{setDes(e.target.value)}} />
        </FormGroup>
        <FormGroup>
        <input type='number'   defaultValue={data.price} onChange={(e)=>{setPri(e.target.value)}} />
        </FormGroup>
        <FormGroup>
        <input type='number'   defaultValue={data.maxGroupSize}  onChange={(e)=>{setMax(e.target.value)}}/>
        </FormGroup>
        <Button className='btn primary__btn w-100 mt-4' onClick={()=>{posted()}} >Update tour</Button>
    </Form>
    

    </div>
  )
}

export default Update