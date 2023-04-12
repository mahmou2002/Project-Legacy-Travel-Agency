// import React,{useState} from 'react'
// import { Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
// import{Link} from 'react-router-dom'
// import '../styles/login.css'
// import loginImg from '../assets/images/login.png'
// import userIcon from '../assets/images/user.png'
// //============
// import { useNavigate } from 'react-router-dom'
// //============
// function Login() {
//   //============
//   const navigate=useNavigate()
//    navigate("/home")
//   //============
//   const [credent,setCredent]=useState({
//     email:undefined,
//     password:undefined
//  })
//   const handleChange=e=>{
//     setCredent(prev=>({...prev,[e.target.id]:e.target.value}))
// }

// const handle =e=>{
//   e.preventDefault()
  
// }
//   return (
//    <section>
//     <Container>
//       <Row>
//         <Col lg='8' className='m-auto'>
//           <div className='login-container d-flex  justify-content-between'>
//             <div className='login-img'>
//               <img src={loginImg} alt=""/>
//             </div>
//             <div className='login-form'>
//               <div className='user'>
//               <img src={userIcon} alt=""/>
//               </div>
//               <h2>Login</h2>
//               <Form onSubmit={handle}>
//                 <FormGroup>
//                   <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
//                 </FormGroup>
//                 <FormGroup>
//                   <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
//                 </FormGroup>
//                 <Button className='btn secondary__btn auth-btn' type='submit'>Login</Button>
//               </Form>
//               <p>Don't have an account ? <Link to='/singup'>Create</Link></p>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//    </section>
//   )
// }

// export default Login




import React,{useState,useContext} from 'react'
import { Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import{Link,useNavigate} from 'react-router-dom'
import '../styles/login.css'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from './../context/AuthContext'




function Login({emailToGetUn, setEmailToGetUn}) {
  

  const [credent,setCredent]=useState({
    email:undefined,
    password:undefined
 })
 setEmailToGetUn(credent.email) 
 
  const handleChange=e=>{
    setCredent(prev=>({...prev,[e.target.id]:e.target.value}))
}
const navigate=useNavigate()
const {dispatch}=useContext(AuthContext)

const handle = async e=>{
  e.preventDefault()
  dispatch({
    type:'LOGIN_START'
  })
  try{
    const res = await fetch(`http://localhost:4000/Auth/login`,{
      method:'post',
      headers:{
       'content-type':'application/json'
      },
      credent:'include',
     body: JSON.stringify(credent)
     })
     const result= await res.json()
    if(!res.ok) alert(result.message)
    dispatch({type:'LOGIN_SUCCESS', payload: result.data})
    navigate('/')
  }
  catch(err){
  dispatch({type:'LOGIN_FAILURE', payload:err.message})
  }
}
  return (
   <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className='login-container d-flex  justify-content-between'>
            <div className='login-img'>
              <img src={loginImg} alt=""/>
            </div>
            <div className='login-form'>
              <div className='user'>
              <img src={userIcon} alt=""/>
              </div>
              <h2>Login</h2>
              <Form onSubmit={handle}>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <Button className='btn secondary__btn auth-btn' type='submit'>Login</Button>
              </Form>
              <p>Don't have an account ? <Link to='/singup'>Create</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Login