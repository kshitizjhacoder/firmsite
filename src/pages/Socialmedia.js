import React from 'react'
import service from './components/Services_components'
import './Socialmedia.css'
export default function Socialmedia() {
  return (
    <div>
        <div className='head-design'>
          <img className='head-design-pic' src={service[1].image} alt={service[0].key}/>
          <div className='head-design-container'>
            <h1 className='head-design-head'>{service[1].service_head}</h1>
            <h4 className='head-design-sub'>{service[1].service_sub}</h4>
          </div>
        </div>
        <div className='design-body'>{service[1].service_body}</div>
        <div className='sub-design'>
            <div className='tag1'>
                <h2 className='head-sub'>{service[1].tag1.tag1_head}</h2>
                <p className='body-sub'>{service[1].tag1.tag1_body}</p>
                {/* <ul>
                    <li><div className='icon'><img src={service[1].tag1.tag1_insta}/><p>{service[1].tag1.tag1_insta_body}</p></div></li>
                    <li><div className='icon'><img src={service[1].tag1.tag1_twi}/><p>{service[1].tag1.tag1_twi_body}</p></div></li>
                    <li><div className='icon'><img src={service[1].tag1.tag1_fac}/><p>{service[1].tag1.tag1_fac_body}</p></div></li>
                </ul> */}
            </div>
            <div className='tag2'>
                <h2 className='head-sub'>{service[1].tag2.tag2_head}</h2>
                <p className='body-sub'>{service[1].tag2.tag2_body}</p>
            </div>
        </div>
        <div className='sub-design'>
            <div className='tag3'>
                <h2 className='head-sub'>{service[1].tag3.tag3_head}</h2>
                <p className='body-sub'>{service[1].tag3.tag3_body}</p>
            </div>
        </div>
    </div>
  )
}