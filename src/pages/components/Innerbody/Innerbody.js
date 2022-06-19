import React from 'react'
import { ReactDOM } from 'react'
import './Innerbody.css'
import Images from './doodleart1.jpg' 
import Iconright  from './arrow-right-solid.svg'
import { useState } from 'react'
const Innerbody=()=>{
  let value;
  function Check(){
    if(typeof(value) === Number)
      return 'https://wa.me/[]'
    else
      return '#'
  }
  const [btn,showbtn] = useState('false');
  const [parrow,showparrow] = useState('true');
  return (
    <div className='body-layout'>
      <div className='inner-body'>
        <h1 className='topic-layout'>Your Venture,</h1>
        <h1 className='topic-layout'>Our Commitment</h1>
        <div className='description'>Reach new heights with us!</div>
        <div className='login'>
            <input className='input' placeholder='Email/Phone number' onChange={(e)=>{value=e.target.value}}></input>
            <button className='btn-start'>
              <span className='circle'>
                <span className='icon arrow'></span>
              </span>
              <span className='text'>Get Started</span>
            </button>
        </div>
      </div>
      <img src={Images} alt='photo' className='imag'/>
    </div>
  )
}
// https://wa.me/[WhatsAppNumber]
{/* <div className='arrow' onMouseEnter={()=>{setTimeout(()=>{showbtn("false");showparrow('true')},600)}} onMouseLeave={()=>{setTimeout(()=>{showbtn("false");showparrow('true')},600)}}>
              <img src={Iconright} className='icon-arrow-right'/>{parrow==='true' && <p className='p-arrow'>Get Started</p>}</div>
            
            {btn==='true' && <a href={Check()} className="button-32">Get Started<img src={Iconright} className='icon-arrow-right-2'></img></a>} */}
export default Innerbody