import React from 'react'
import '../styles/Header.css'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
    <div className='header'>
      <Link to="/#" className='link'>Sistema de Notas </Link> 
    </div>
    </div>
    
  )
}

export default Header
