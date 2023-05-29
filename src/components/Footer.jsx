import React from 'react'
import { Link } from 'react-router-dom'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="col-1">
        <h3>Some Links</h3>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
      </div>
      <div className="col-2">
        <h3>News Letter</h3>
        <form action="">
          <input type="email" placeholder='Enter your email address' required/>
          <br />
          <button type='submit'>Subscribe now</button>
        </form>
      </div>
      <div className="col-3">
        <h3>Contact</h3>
        <p>lain 2,Kc road,Palarivattom <br /><br /> Ernakulam,Kerala <br /><br /> shop123@gmail.com</p>
        <div className="col-3-images">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
