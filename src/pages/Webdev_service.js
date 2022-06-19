import React from 'react'
import service from './components/Services_components'
import './Webdev_services.css'
export default function Webdev_service() {
  return (
    <div>
        <div className='head-design-web'>
          <img className='head-design-pic-web' src={service[0].image} alt={service[0].key}/>
          <div className='head-design-container-web'>
            <h1 className='head-design-head-web'>{service[0].service_head}</h1>
            <p className='head-design-sub-web'>{service[0].service_sub}</p>
          </div>
        </div>
        <div className='design-body-web'>{service[0].service_body}</div>
        <div className='sub-design-web'>
          <div className='tag1-web'>
            <h2 className='head-sub-web'>{service[0].tag1.tag1_head}</h2>
            <p className='body-sub-web'>{service[0].tag1.tag1_body}</p>
            <ul>
              <li className='li-web'>{service[0].tag1.tag1_frontend[0]}</li>
              <li className='li-web'>{service[0].tag1.tag1_frontend[1]}</li>
              <li className='li-web'>{service[0].tag1.tag1_frontend[2]}</li>
            </ul>
            <p className='body-sub-web'>{service[0].tag1.tag1_subbody1}</p>
            <ul>
              <li className='li-web'>{service[0].tag1.tag1_framework[0]}</li>
              <li className='li-web'>{service[0].tag1.tag1_framework[1]}</li>
              <li className='li-web'>{service[0].tag1.tag1_framework[2]}</li>
            </ul>
            <p className='body-sub-web'>{service[0].tag1.tag1_subbody1}</p>
            <ul>
              <li className='li-web'>{service[0].tag1.tag1_database[0]}</li>
              <li className='li-web'>{service[0].tag1.tag1_database[1]}</li>
            </ul>
          </div>
          <div className='tag2-web'>
            <h2 className='head-sub-web'>{service[0].tag2.tag2_head}</h2>
            <p className='body-sub-web'>{service[0].tag2.tag2_body}</p>
          </div>
        </div>
    </div>
  )
}
