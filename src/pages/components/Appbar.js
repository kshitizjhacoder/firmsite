import React from 'react'
import './Appbar.css';

export default function Appbar() {
//   const Menuitem = [
//     {
//         title:'Home',
//         url:'#',
//         cname:'nav-links'
//     },
//     {
//         title:'Services',
//         url:'#',
//         cname:'service-links'
//     },
//     {
//         title:'Blog',
//         url:'#',
//         cname:'nav-links'
//     },
//     {
//         title:'About',
//         url:'#',
//         cname:'nav-links'
//     },
//     {
//         title:'Contact',
//         url:'#',
//         cname:'nav-links-contact'
//     }
// ]
        const menu = document.querySelector('#mobile-menu');  
        const menuLinks = document.querySelector('.navbar__menu');  
        // Display mobile menu  
        const mobieMenu = () =>{  
            menu.classList.toggle('is-active')  
            menuLinks.classList.toggle('active')  
        }  
        menu.addEventListener('click', mobieMenu)  
        function myFunction() {  
            document.getElementById("demo").innerHTML = "Hello World";  
        } 
  
  return (
    // <nav className='layout-box'>
    //   <div className='menu-icon'>
    //   </div>
    //   <h1 className='layout-logo'>FantFolks</h1>
    //   {/* <div className='menu-bar'></div> */}
    //   <ul className='nav-menu'>
    //     {Menuitem.map((item,index)=>{
    //       return(
    //       <li key={index} className="nav-item"><a className={item.cname} href={item.url}>{item.title}</a></li>
        
    //     )})}
        
    //   </ul>
    //   </nav>
    <nav className="navbar">  
     <div className="navbar__container">  
       <a href="#home" id="navbar__logo">Fant Folks</a>  
       <div className="navbar__toggle" id="mobile-menu">  
         <span className="bar"></span>  
         <span className="bar"></span>  
         <span className="bar"></span>  
       </div>  
       <ul className="navbar__menu">  
         <li className="navbar__item">  
           <a href="#" className="navbar__links">Home</a>  
         </li>  
         <li className="navbar__item">  
           <a href="#" className="navbar__links">Service</a>  
         </li>  
         <li className="navbar__item">  
           <a href="#" className="navbar__links">Blog</a>  
         </li>  
         <li className="navbar__item">  
            <a href="#" className="navbar__links">About</a>  
          </li> 
         <li className="navbar__btn">  
           <a href="#" className="button">Contact</a>  
         </li>  
       </ul>  
     </div>  
   </nav>
  );
}
