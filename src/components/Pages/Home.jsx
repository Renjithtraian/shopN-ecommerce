import React from 'react'
import shop from "../../assets/banner.png"
import Products from './Products'

const Home = () => {
  return (
    <div className='home'>
      <img src="https://img.freepik.com/free-photo/front-view-cyber-monday-shopping-cart-with-bags-copy-space_23-2148657638.jpg?w=1380&t=st=1685163745~exp=1685164345~hmac=4fc9bae66f3120834d2f27cf43c1f1d99dcd63e9e151ddec0dbed8cf85e0f838" alt="" />
      <div className="home-content">
        <h2>New season arrivals</h2>
        <p>Check out all the latest trends in here</p>
      </div>
      <Products/>
    </div>
  )
}

export default Home
