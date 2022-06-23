import React from 'react'
import Image  from './media/wdd2.webp'

import './Aboutus.css'
const Aboutus=()=> {
  return (
    <div className='about_main'>
    <h1 className='about-head'>About us</h1>
    <div className='about-us'>
        <img src={Image} className='about-pic'/>
        <div className='about-us-read'>
            <h1 className='about-us-head'>Creative Hustlers</h1>
            <div className='about-us-body'>website name is a multidisciplinary creative studio. We collaborate with brands and agencies bringing visionary projects to life!</div>
        </div>
    </div>
    </div>
  )
}

export default Aboutus