import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from "../assets/enter.png"
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri';
import  shopCart from "../assets/shopping-cart.png";
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';


const Header = () => {

  const {state} = useContext(AppContext)

  const [active,setActive] = useState("home")
  const [toggleMenu,setToggleMenu] = useState(false)

  return (
    <div className='header'>
      <h1>Shop'n</h1>
      <nav>
        <ul>
          <li >
            <Link to="/" className={active === "home" && "active"} onClick={() => setActive("home")}>Home</Link>
          </li>
          <li>
            <Link to="/products" className={active === "products" && "active"} onClick={() => setActive("products")}>Products</Link>
          </li>
          <li>
            <Link to="/contact" className={active === "contact" && "active"} onClick={() => setActive("contact")}>Contact</Link>
          </li>
          <li>
            <Link to="/about" className={active === "about" && "active"} onClick={() => setActive("about")}>About</Link>
          </li>
          <li>
            <Link to="/cart" className={active === "cart" ? "activeCart" : "cart"} onClick={() => setActive("cart")}>
              Cart
              <div className="Favcount">
              <img src={shopCart}/>
              <span className='count'>{state.cartItems.length}</span>
              </div>
              </Link>
          </li>
          <li>
            <Link className={active === "login" ? "activeLogin" : "login"} onClick={() => setActive("login")} to="/login">Login<img src={login} alt="" /></Link>
          </li>
        </ul>
      </nav>
      <div className="header-menu">
        {
          toggleMenu ? 
           <RiCloseLine color='orangered' size={27} onClick={() => setToggleMenu(false)} />
         : <RiMenu3Line color='orangered' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="header-menu-container scale-up-center">
              <div className="header-menu-container-links">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/products">Products</Link></p>
                <p><Link to="/contact">Contact</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/cart">
                  <div className="Favcount">
                    Cart
                        <img src={shopCart}/>
                        <span className='count'>{state.cartItems.length}</span>
                  </div>
    
                  </Link></p>                
                <div className="header-menu-container-login">
                  <button type='button'>Login</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Header
