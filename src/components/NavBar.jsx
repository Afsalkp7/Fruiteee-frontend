import React, { useState } from 'react'
import logo from '../assets/logo.png'
import basket from '../assets/basket-icon.png'
import search from '../assets/search-icon.png'
import '../styles/navbar.css'
export default function NavBar() {
    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("shop")} className={menu=="shop"?"active":""}>Shop</li>
            <li onClick={()=>setMenu("about")} className={menu=="about"?"active":""}>About</li>
            <li onClick={()=>setMenu("contact")} className={menu=="contact"?"active":""}>Contact us</li>
        </ul>
        <div className='navbar-right'>
            <img src={search} alt="search-icon"  className='search-icon'/>
            <div className="navbar-search-icon">
                <img src={basket} alt="basket-icon"  className='basket-icon'/>
                <div className="dot"></div>
            </div>
            <button className='navbar-button'>Sign In</button>
        </div>

    </div>
  )
}
