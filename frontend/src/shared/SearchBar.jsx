import React,{useRef, useState} from 'react'
import './search-bar.css'
import {Col, Form,FormGroup} from 'reactstrap'
import{useNavigate} from 'react-router-dom'

function SearchBar({tours,setSerchedTours}) {
    const locationRef=useRef('')
    const distanceRef =useRef(0)
    const maxGroupRef =useRef(0)
    const navigate=useNavigate()
    
      //================================ search filter=================================================
      const [location,setLocation]=useState('')
      const [distance,setDistance]=useState(0)
      const [maxGroup,setMaxGroup]=useState(0)


      const getLocation=(e)=>setLocation(e.target.value)
      const getDistance=(e)=>setDistance(e.target.value)
      const getMaxGroup=(e)=>setMaxGroup(e.target.value)


      const searchFilter =()=>{
      let filteredTours = [...tours]
      setSerchedTours(filteredTours)
      //No input
      if(location=== '' && distance === 0 && maxGroup === 0){
        setSerchedTours(tours)
      }
      // One input
      
      else if (location !==''){filteredTours = tours.filter((e)=>e.city.toLocaleLowerCase() === location.toLocaleLowerCase())
        setSerchedTours(filteredTours)
      }
      else if (distance !== 0){filteredTours = tours.filter((e)=>e.distance <= distance)
        setSerchedTours(filteredTours)
      }
      else if (maxGroup !== 0){filteredTours = tours.filter((e)=>e.maxGroupSize <= maxGroup)
        setSerchedTours(filteredTours)
      }
      // two inputs
      else if (location !=='' && distance !== 0){filteredTours = tours.filter((e)=>e.city.toLocaleLowerCase() === location.toLocaleLowerCase() && e.distance <= distance)
        setSerchedTours(filteredTours)
      }

      else if (location !=='' && maxGroup !== 0){filteredTours = tours.filter((e)=>e.city.toLocaleLowerCase() === location.toLocaleLowerCase() && e.maxGroupSize <= maxGroup)
        setSerchedTours(filteredTours)
      }

      else if (distance !== 0 && maxGroup !== 0){filteredTours = tours.filter((e)=>e.distance <= distance && e.maxGroupSize <= maxGroup)
        setSerchedTours(filteredTours)
      }
      // three inputs

      else {filteredTours = tours.filter((e)=>e.city.toLocaleLowerCase() === location.toLocaleLowerCase() && e.distance <= distance && e.maxGroupSize <= maxGroup)
        setSerchedTours(filteredTours)
      }
      }


      //================================ End search filter==============================================  
    
    // const handle=()=>{ 
    //   if(location==="" || distance ==="" || maxGroup===''){
    //     return alert('All fields are required')
    // }
    //     else{
    //   searchFilter()
    //   navigate('/tours')
    //     }
    // }

    const handle=()=>{ 
      
      if(location=== '' && distance === 0 && maxGroup === 0){
        alert("You need to type something")
      }
      else{
        searchFilter()
        navigate('/tours')
      }
      
    }



  return (
    <Col lg='12'>
     <div className='search_bar'>
      <Form className='d-flex align-items-center gap-4'>
        <FormGroup className='d-flex gap-3 from-group from-group-fast'>
        <span><i class="ri-map-pin-line"></i></span>
        <div>
            <h6>Location</h6>
            <input type='text' placeholder='Where are you going' ref={locationRef} onChange={getLocation}/>
        </div>
        </FormGroup>
        <FormGroup className='d-flex gap-3 from-group from-group-fast'>
        <span><i class="ri-map-pin-time-fill"></i></span>
        <div>
            <h6>Distance</h6>
            <input type='number' placeholder='Distance k/m' ref={distanceRef}  onChange={getDistance}/>
        </div>
        </FormGroup>
        <FormGroup className='d-flex gap-3 from-group from-group-last'>
        <span><i class="ri-group-line"></i></span>
        <div>
            <h6>Max People</h6>
            <input type='number' placeholder='0'ref={maxGroupRef}  onChange={getMaxGroup}/>
        </div>
        </FormGroup>
        <span className='search-icon'type='submit' onClick={handle}>
        <i class="ri-search-line"></i>
        </span>
      </Form>
     </div>
    </Col>
  )
}

export default SearchBar