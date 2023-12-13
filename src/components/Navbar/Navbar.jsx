import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let [menu,setMenu]= useState('shop')
  return (
   <div className='navbar'>
    <div className="nav-logo">
    <img src={logo} alt="" />
    <p>Shopper</p>
    </div>

    <ul className="nav-menu">
        <li onClick={()=>setMenu('shop')}> <Link to='/'>Shop</Link> {menu==='shop'?<hr/> :<></>}</li>
        <li onClick={()=>setMenu('womens')}> <Link to='/womens'>Women</Link> {menu==='womens'?<hr/> :<></>}</li>
        <li onClick={()=>setMenu('men')}><Link to='/mens'>Men</Link> {menu==='men'?<hr/> :<></>}</li>
        <li onClick={()=>setMenu('kids')}><Link to='/kids'>Kids</Link> {menu==='kids'?<hr/> : <></>}</li>
    </ul>

    <div className="nav-login-cart">
        <button><Link link='/login'>Login</Link></button>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <img src={cart} alt="" />
        <div className="nav-cart-count">0</div>
    </div>
    

   </div>
  )
}

export default Navbar