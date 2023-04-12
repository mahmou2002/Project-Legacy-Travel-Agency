import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Search from '../pages/Search'
import ThankYou from '../pages/ThankYou'
import ThankYouNewsLetter from '../pages/ThankYouNewsletter'
import Update from '../pages/Update'
import Post from '../pages/Post'
import About from '../pages/About'

function Routers({loggedUser,setLoggedUser,emailToGetUn, setEmailToGetUn}) {


  const [tours,setTours] = useState([])
  const [serchedTours, setSerchedTours]= useState([])
  const [toursByUser,setToursByUser]= useState([])

  const [reRender,setReRender]=useState(false)
  const renderReview=()=>{
    setReRender(!reRender)
  }
//============================ gettin the tours data ===================================================================
  useEffect(()=>{
    axios.get("http://localhost:4000/Tour").then(({data})=>{setTours(data);setSerchedTours(data)}).catch((err)=>{console.log(err)})},[reRender])
    
//============================ gettin the Book data ===================================================================
const [book,setBook] = useState([])
const [newBook,setNewBook] = useState(false)
useEffect(()=>{
  axios.get("http://localhost:4000/Book").then(({data})=>{setBook(data);}).catch((err)=>{console.log(err)})},[reRender])
  
const showThankYouTag=()=>{setNewBook(true);setTimeout(()=>{setNewBook(false)},4000)}

//==================================== weather =====================================

const [weather,setWeather] = useState([])
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '4e9ad85dd70229b0cc0effc529a02c67';
const location = 'Ariana,Tunisia';

const apiUrlWithParams = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

useEffect(()=>{axios.get(apiUrlWithParams).then(({data}) => setWeather(data)).catch(error => {console.error('Error fetching weather data:', error)})},[])
  //==================================== weather =====================================

  return (
   <Routes>
    <Route path='/' element={<Navigate to='/home'/>} tours={tours}/>
    <Route path='/home' element={<Home tours={tours} serchedTours={serchedTours} setSerchedTours={setSerchedTours} weather={weather}/>}/>
    <Route path='/tours' element={<Tours tours={tours} serchedTours={serchedTours} setSerchedTours={setSerchedTours}/>}/>


      
    <Route path='/tours/:id' element={<TourDetails tours={tours} book={book} loggedUser={loggedUser} renderReview={renderReview} setToursByUser={setToursByUser} showThankYouTag={showThankYouTag}/>}/>
    <Route path='/login' element={<Login emailToGetUn={emailToGetUn}  setEmailToGetUn={setEmailToGetUn}/>}/>
    <Route path='/singup' element={<Signup loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>}/>
    <Route path='/thank-you' element={<ThankYou toursByUser={toursByUser} newBook={newBook}/>}/>
    <Route path='/tours/search' element={<Search tours={tours}/>}/>
    <Route path='/thank-youNl' element={<ThankYouNewsLetter/>}/>
    <Route path='/update' element={<Update/>}/>
    <Route path='/post' element={<Post renderReview={renderReview}/>}/>
    <Route path='/about' element={<About/>}/>
    
   </Routes>
  )
}

export default Routers