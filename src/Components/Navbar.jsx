import React from 'react'
import Logo from '../images/Logo.png'
import {Link,NavLink} from 'react-router-dom'
import {links} from '../data'
import './Navbar.css'
import { useState } from 'react'

import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
     
  const [isNavshowing,setIsNavshowing]=useState(false)
         
  return (
    <nav>
        <div className='container nav__container'>

            <Link to='/' className='logo'>
                <img src={Logo} alt="Nav logo" />
            </Link>

            <ul className={`nav__links ${isNavshowing ? 'show__nav' : 'hide__nav'}`}>
               {
                links.map(({name,path},index)=>
                  {
                    return (
                        <li key={index}>
                       <NavLink to={path} className={({isActive})=> isActive ? 'active-nav':''}onClick={()=>setIsNavshowing(prev => !prev)}>{name}</NavLink>

                        </li>
                    )
                  }
                )
               }
            </ul>
            <button className='nav__toggle-btn' onClick={()=>setIsNavshowing(!isNavshowing)}>
              {
                isNavshowing ? <MdOutlineClose /> : <GoThreeBars />
              }
              
              </button>
        </div>
    </nav>
  )
}

export default Navbar
