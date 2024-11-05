import React from 'react'
import ControlledCarousel from './ControlledCorousel'
import { Link } from 'react-router-dom'
import Navbar1 from './Navbar1'

const Home = () => {
  return (
    <div >
      <Navbar1/>
    <ControlledCarousel/>
    </div>
  )
}

export default Home
