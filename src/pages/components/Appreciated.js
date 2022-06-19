import React from 'react'
import './appreciated.css'
import Image from './Images/doodleart1.jpg'
const Appreciated=()=> {
  return (
    <div className='appre'>
    <h2 className='appre-head'>Appreciated By</h2>
    <div className='appre-describe'>We've worked with some pretty awesome people</div>
    <div className="cards">
            <a href="card1"><img src= {Image} className="trusted-logo"/></a>
            <a href="card2"><img src={Image} className="trusted-logo"/></a>
            <a href="card3"><img src={Image} className="trusted-logo"/></a>
            <a href="card4"><img src={Image} className="trusted-logo"/></a>
        </div>
    </div>
  )
}
export default Appreciated;