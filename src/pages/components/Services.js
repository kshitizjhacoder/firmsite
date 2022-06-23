import React ,{useState}from 'react'
import './Services.css'
import Image1  from './media/wdd2.webp'
import Image2  from './media/ssm [Recovered].webp'
import Image3  from './media/Content writing2.webp'
import Image4  from './media/dandi.webp'
import Image5  from './media/photography.webp'
// import Image6  from './media/wdd2.webp'

const service_container=[
    {
        
        head:'Web Development',
        image:Image1
    },
    {
        
        head:'Social Media Management',
        image:Image2,
        description:"From creating curated content for your posts to daily ad based campaigning, whether it be instagram to twitter. We got you convered!"
    },
    {
        
        head:'Content Creation',
        image:Image3,
        description:"Providing catchy and creative content including SEOs,maximising public reach as well as context overhaling for existing websites."
    },
    {
        
        head:'Design & Illustrations',
        image:Image4,
        description:"Creating illustrations and designs for products and for various other purpose including stock animations"
    },
    {
        
        head:'Creative Products Promotion',
        image:Image5,
        description:"Product photography,videography for advertising and exclusive customer satisfaction."
    },
    // {
       
    //     head:'Social Media Management',
    //     image:Image6,
    //     description:"From creating curated content for your posts to daily ad based campaigning, whether it be instagram to twitter. We got you convered!"
    // }
]
const Services=() =>{
    const [showme ,setShowme]=useState('later');
    const [showpic,setShowpic] = useState('1st');
  return (
    <div className='service-page'>
        <h1 className='service-head'>Our Services</h1>
        <div className='whole-card'>
            <div className='hori-card'>
                <h1 className='card-head' onMouseEnter={()=>{setShowme("first");setShowpic('1st')}}>{service_container[0].head}</h1>
                {showme==='first'&&<div className='card-desc'>
                    <ul>
                        <li className='inner-head'>Wordpress</li>
                        <ul>
                            <li>Static</li>
                            <li>Dynamic</li>
                        </ul>
                        <li className='inner-head'>Coded Website</li>
                        <ul>
                            <li>Development</li>
                            <li>Maintenance</li>
                        </ul>
                        <li className='inner-head'>App Development</li>
                    </ul>
                </div> 
                }
                <h2 className='card-head'onMouseEnter={()=>{setTimeout(()=>{setShowme("second");setShowpic('2nd')},600)}}>{service_container[1].head}</h2>
                {showme==='second'&&<div className='card-desc'>{service_container[1].description}</div>}
                <h2 className='card-head'onMouseEnter={()=>{setTimeout(()=>{setShowme("third");setShowpic('3rd')},600)}} >{service_container[2].head}</h2>
                {showme==='third'&&<div className='card-desc'>{service_container[2].description}</div>}
                <h2 className='card-head'onMouseEnter={()=>{setTimeout(()=>{setShowme("fourth");setShowpic('4th')},600)}}>{service_container[3].head}</h2>
                {showme==='fourth'&&<div className='card-desc'>{service_container[3].description}</div>}
                <h2 className='card-head'onMouseEnter={()=>{setTimeout(()=>{setShowme("fifth");setShowpic('5th')},600)}} >{service_container[4].head}</h2>
                {showme==='fifth'&&<div className='card-desc'>{service_container[4].description}</div>}
                {/* <h2 className='card-head'onMouseEnter={()=>{setTimeout(()=>{setShowme("sixth");setShowpic('6th')},600)}}>{service_container[5].head}</h2>
                {showme==='sixth'&&<div className='card-desc'>{service_container[5].description}</div>} */}
            </div>
            {showpic==="1st" && <img src={service_container[0].image} className='card-pic'/>}
            {showpic==="2nd" && <img src={service_container[1].image} className='card-pic'/>}
            {showpic==="3rd" && <img src={service_container[2].image} className='card-pic'/>}
            {showpic==="4th" && <img src={service_container[3].image} className='card-pic'/>}
            {showpic==="5th" && <img src={service_container[4].image} className='card-pic'/>}
            {/* {showpic==="6th" && <img src={service_container[5].image} className='card-pic'/>} */}


        </div>
        <button className='button-32-know'>Know More</button>
    </div>
  )
}

export default Services;