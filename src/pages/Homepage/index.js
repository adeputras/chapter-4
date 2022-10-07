import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import HeroSection from '../../components/hero-section';
import './style.scss'
const Homepage = () => {
  const [name, setName] = useState('ade')
  const props = {
    name, 
    setName,
  }
  return (
    <div className='homepage'>
      <HeroSection {...props}  />
    </div>
  )
}

export default Homepage