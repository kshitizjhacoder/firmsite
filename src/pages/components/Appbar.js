import React from 'react'
import './Appbar.css';

export default function Appbar() {
  const Menuitem = [
    {
        title:'Home',
        url:'#',
        cname:'nav-links'
    },
    {
        title:'Services',
        url:'#',
        cname:'service-links'
    },
    {
        title:'Blog',
        url:'#',
        cname:'nav-links'
    },
    {
        title:'About',
        url:'#',
        cname:'nav-links'
    },
    {
        title:'Contact',
        url:'#',
        cname:'nav-links-contact'
    }
]
  return (
    <nav className='layout-box'>
      <div className='menu-icon'>
      </div>
      <h1 className='layout-logo'>FantFolks</h1>
      {/* <div className='menu-bar'></div> */}
      <ul className='nav-menu'>
        {Menuitem.map((item,index)=>{
          return(
          <li key={index} className="nav-item"><a className={item.cname} href={item.url}>{item.title}</a></li>
        
        )})}
        
      </ul>
      </nav>
  );
}
