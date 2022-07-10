import React from 'react'
import { ReactDOM } from 'react'
import './Innerbody.css'

// import './App.css'
import Images  from './media/wdd2.webp'

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
        <h1>Your Venture,</h1>
        <h1>Our Commitment</h1>
        <span className='description'>Reach new heights with us!</span>
        <div className='login'>
            <input className='input' placeholder='Email/Phone number' onChange={(e)=>{value=e.target.value}}></input>
            <div className='login_get'>
              <button>
                <span className='circle'>
                  {/* <span className='material-icons arrow'>arrow_forward_ios</span> */}
                  <span className='icon arrow'></span>
                  {/* <span>Get Started</span> */}
                </span>
                <span className="text">Get Started</span>
              </button>
            </div>
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