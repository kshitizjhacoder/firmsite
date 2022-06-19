import React from 'react'
import { Menuitem, MenuItems } from './Menuitem';
import './Appbar.css';

export default function Appbar() {
  return (
    <nav className='layout-box'>
      <div className='menu-icon'>
      </div>
      <h1 className='layout-logo'>FantFolks</h1>
      <div className='menu-bar'></div>
      <ul className='nav-menu'>
        {Menuitem.map((item,index)=>{
          return(
          <li key={index} className="nav-item"><a className={item.cname} href={item.url}>{item.title}</a></li>
        
        )})}
        
      </ul>
      </nav>
  );
}
