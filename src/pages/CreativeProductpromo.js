import React from 'react'
import './productpromo.css'
import service from './components/Services_components'
export default function CreativeProductpromo() {
  return (
    <div>
        <div className='head-design-promo'>
          <img className='head-design-pic-promo' src={service[4].image} alt={service[4].key}/>
          <div className='head-design-container-promo'>
            <h1 className='head-design-head-promo'>{service[4].service_head}</h1>
            <p className='head-design-sub-promo'>{service[4].service_sub}</p>
          </div>
        </div>
        <div className='design-body-promo'>{service[4].service_body}</div>
        
            <div className='tag1-promo'>
                <h2 className='head-sub-promo'>{service[4].tag1.tag1_head}</h2>
                <p className='body-sub-promo'>{service[4].tag1.tag1_body}</p>
            </div>
        </div>
    
  )
}
