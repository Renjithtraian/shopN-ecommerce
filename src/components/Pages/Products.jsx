import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import Showproducts from './Showproducts';
import Free from "../../assets/delivery-truck.png";
import Return from "../../assets/easy-return.png";
import payment from "../../assets/card.png";
import cashback from "../../assets/cashback.png";
import Offer from '../Offer';

const Products = () => {

    const [data,setData] = useState([])
    const [filter,setFilter] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            setFilter(await response.clone().json())
            setData(await response.json());
            setLoading(false)
        }
        getProducts()

    },[])

  return (
    <div className='products'>
      <div className="products-boxes">
        <div className="products-boxes-icons">
          <img src={Free} alt="" />
          <span>Free shipping</span>
        </div>
        <div className="products-boxes-icons">
          <img src={Return} alt="" />
          <span>Easy Returns</span>
        </div>
        <div className="products-boxes-icons">
          <img src={payment} alt="" />
          <span>Secure Payment</span>
        </div>
        <div className="products-boxes-icons">
          <img src={cashback} alt="" />
          <span>Cash back</span>
        </div>
      </div>
      <Offer data={data}/>
      <h1 className='head'>Latest Products</h1>
      {
        loading ? <Loading/> : <Showproducts filter={filter} setFilter={setFilter} data={data}/>
      }
    </div>
  )
}

export default Products
