import React from 'react'


import Image from '../images/main_header.png'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Lorem, ipsum dolor.</h4>
          <h1>Lorem ipsum dolor sit amet Lorem, ipsum dolor.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quo?
            Lorem, ipsum dolor.a
          </p>
          <Link to="/offer" className='btn lg'>Get Started</Link>
        </div>
      
        <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-image">
          <img src={Image} alt="" />
        </div>
        
        </div>
      </div>
    </header>
  )
}

export default MainHeader