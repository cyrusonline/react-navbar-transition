import React, {useState,useEffect} from 'react'
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);
    const transitionNavbar = () => {
      if (window.scrollY > 200) {
        
        handleShow(false)
      } else {
        handleShow(true)
      }
    }
  
    useEffect(()=>{
      window.addEventListener('scroll', transitionNavbar)
      return () => window.removeEventListener('scroll', transitionNavbar)
    },[])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
          
        </div>
    )
}

export default Nav
