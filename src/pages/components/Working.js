import React from 'react'
import './Working.css'
import Image  from './media/wdd2.webp'


const containers =[
    {
        src:Image,
        text:"24/7 live assistance personalised customer support"
    },
    {
        src:Image,
        // text: "hgsdfiwksdfbhjd sdjghbs idh"
        text:"We are the whole package ranging from web design, social media management, product photoshoot and videography and the list goes on."
    },
    {
        src:Image,
        text:"Providing top class resources, up to date plugins on WordPress"
    },
    {
        src:Image,
        text:"Utmost priority to securing client data and privacy according to our Work Ethics"
    },
    {
        src:Image,
        text:"UI/UX designing and App Development as per customers' requirement"
    },
    {
        src:Image,
        text:"Trusted by many and Our work speaks for itself"
    },
]
const Working=()=> {
  return (
    <div className='work-init'>
        <h2 className='work-head'>Why work with us</h2>
        <div className='work'>
            <div className='work-1'>
                <img src={containers[0].src} alt="Photo" className='work-photo'/>
                <div className='work-in'>{containers[0].text}</div>
            </div>
            <div className='work-1'>
                <img src={containers[1].src} alt="Photo" className='work-photo'/>
                <div className='work-in'>{containers[1].text}</div>
            </div>
            <div className='work-1'>
                <img src={containers[2].src} alt="Photo" className='work-photo'/>
                <div className='work-in'>{containers[2].text}</div>
            </div>
            <div className='work-1'>
                <img src={containers[3].src} alt="Photo" className='work-photo'/>
                <div className='work-in'>{containers[3].text}</div>
            </div>
            <div className='work-1'>
                <img src={containers[4].src} alt="Photo" className='work-photo'/>
                <div className='work-in'>{containers[4].text}</div>
            </div>
            <div className='work-1' >
                <img src={containers[5].src} alt="Photo" className='work-photo'/>
                <div className='work-in'>{containers[5].text}</div>
            </div>
        </div>
        <h2 className='work-head'>We're all you'll ever need!</h2>
        <div className='contact-us'>
            <div className='queries'>For all your queries :</div>
            <button className='query-button'>Contact Us</button>
        </div>
    </div>
  )
}

export default Working;