import React, {useRef, useEffect,useContext, useState} from 'react'
import axios from 'axios'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link,useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { AuthContext } from '../../context/AuthContext'

//===========================================
import {okLogIn} from '../../context/AuthContext'
import { getOkLogIn, setOkLogIn } from '../../context/AuthContext'
//============================================
function Header({setLoggedUser,loggedUser}) {
    

    let nav_links = [
        {
            path: '/home',
            display: 'Home'
        },
        {
            path: '/about',
            display: 'Contact'
        },
        {
            path: '/tours',
            display: 'Tours'
        },

    ]
    if(loggedUser === "admin" && getOkLogIn()){
        nav_links = [
            {
                path: '/home',
                display: 'Home'
            },
            {
                path: '/about',
                display: 'Contact'
            },
            {
                path: '/tours',
                display: 'Tours'
            },
            {
                path: '/post',
                display: 'Create'
            }
        ]
    }
        if(loggedUser !== "admin" && getOkLogIn()){
            nav_links = [
                {
                    path: '/home',
                    display: 'Home'
                },
                {
                    path: '/about',
                    display: 'Contact'
                },
                {
                    path: '/tours',
                    display: 'Tours'
                },
                {
                    path: '/thank-you',
                    display: 'Book'
                }
        
            ]
    }


    const headerRef = useRef(null)
    const navigate=useNavigate()
    const {user,dispatch}=useContext(AuthContext)
    const logout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
    //======================== diconnect =====================
    const isLoggedIn = () => {
        return getOkLogIn()
      }

      const disconnect = () => {
        setOkLogIn(false)
        setLoggedUser(null)
      }
    
    //========================================================

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    


    useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    })


    
    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>

                    <div className="nav_wrapper d-flex align-items-center justify-content-between">
                        <div className='logo'>
                            <img src={logo} alt='img' />
                        </div>
                        <div className='navigation'>
                            <ul className='menu d-flex align-items-center gap-5'>
                                {
                                    nav_links.map((e, i) => {
                                        return (
                                            <li className='nav_item' key={i}>
                                                <NavLink to={e.path} className={navClass => navClass.isActive ? 'active_link' : ''}>{e.display}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="nav_right d-flex align-items-center gap-4">
                            <div className="nav_btns d-flex align-items-center gap-4">

                                {loggedUser && isLoggedIn() ? (<>
                                    <h5 className='mb-0'>{loggedUser}</h5>
                                    <Button className='btn btn-dark'onClick={disconnect} >Logout</Button>
                                    </>) : (<>
                                <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                                <Button className='btn primary__btn'><Link to='/singup'>SignUp</Link></Button>
                                    </>)
                                }
                            
                            </div>
                            <span className="mobile_menu">
                                <i class="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>

        </header>
    )
}

export default Header