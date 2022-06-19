import React from 'react'
import service from './components/Services_components'
import './ContentCreation.css'
export default function DesignandIluustration() {
  return (
    <div>
        <div className='head-design'>
          <img className='head-design-pic' src={service[3].image} alt={service[3].key}/>
          <div className='head-design-container'>
            <h1 className='head-design-head'>{service[3].service_head}</h1>
            <p className='head-design-sub'>{service[3].service_sub}</p>
          </div>
        </div>
        <div className='design-body'>{service[3].service_body}</div>
        <div className='sub-design'>
            <div className='tag1'>
                <h2 className='head-sub'>{service[3].tag1.tag1_head}</h2>
                <p className='body-sub'>{service[3].tag1.tag1_body}</p>
            </div>
            <div className='tag2'>
                <h2 className='head-sub'>{service[3].tag2.tag2_head}</h2>
                <p className='body-sub'>{service[3].tag2.tag2_body}</p>
          </div>
        </div>
    </div>
  )
}