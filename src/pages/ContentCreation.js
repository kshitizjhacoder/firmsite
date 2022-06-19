import React from 'react'
import service from './components/Services_components'
import './ContentCreation.css'
export default function ContentCreation() {
  return (
    <div>
        <div className='head-design'>
          <img className='head-design-pic' src={service[2].image} alt={service[2].key}/>
          <div className='head-design-container'>
            <h1 className='head-design-head'>{service[2].service_head}</h1>
            <p className='head-design-sub'>{service[2].service_sub}</p>
          </div>
        </div>
        <div className='design-body'>{service[2].service_body}</div>
        <div className='sub-design'>
            <div className='tag1'>
                <h2 className='head-sub'>{service[2].tag1.tag1_head}</h2>
                <p className='body-sub'>{service[2].tag1.tag1_body}</p>
            </div>
            <div className='tag2'>
                <h2 className='head-sub'>{service[2].tag2.tag2_head}</h2>
                <p className='body-sub'>{service[2].tag2.tag2_body}</p>
          </div>
        </div>
    </div>
  )
}