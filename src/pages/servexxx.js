import React from 'react'
import service from './components/Services_components'
import './servexxx.css'
export default function Socialmedia() {
  return (
    <div>
        <div className='head-design-social'>
          <img className='head-design-pic-social' src={service[1].image} alt={service[0].key}/>
          <div className='head-design-container-social'>
            <h1 className='head-design-head-social'>{service[1].service_head}</h1>
            <p className='head-design-sub-social'>{service[1].service_sub}</p>
          </div>
        </div>
        <div className='design-body-social'>{service[1].service_body}</div>
        <div className='sub-design-social'>
            <div className='tag1-social'>
                <h2 className='head-sub-social'>{service[1].tag1.tag1_head}</h2>
                <p className='body-sub-social'>{service[1].tag1.tag1_body}</p>
                <ul>
                    <li><div className='icon-social1'><img src={service[1].tag1.tag1_insta}/><p>{service[1].tag1.tag1_insta_body}</p></div></li>
                    <li><div className='icon-social2'><img src={service[1].tag1.tag1_twi}/><p>{service[1].tag1.tag1_twi_body}</p></div></li>
                    <li><div className='icon-social3'><img src={service[1].tag1.tag1_fac}/><p>{service[1].tag1.tag1_fac_body}</p></div></li>
                </ul>
            </div>
            <div className='tag2-social'>
                <h2 className='head-sub-social'>{service[1].tag2.tag2_head}</h2>
                <p className='body-sub-social'>{service[1].tag2.tag2_body}</p>
            </div>
        </div>
        <div className='sub-design-social'>
            <div className='tag3-social'>
                <h2 className='head-sub-social'>{service[1].tag3.tag3_head}</h2>
                <p className='body-sub-social'>{service[1].tag3.tag3_body}</p>
            </div>
        </div>
    </div>
  )
}