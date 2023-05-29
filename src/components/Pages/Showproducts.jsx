import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import Offer from '../Offer';

const Showproducts = ({data,setFilter,filter}) => {

    const [active,setActive] = useState("all")

    const handleProduct = (cat) => {
        const updateList = data.filter((x) => {
            return x.category === cat
        })
        setFilter(updateList);
    }
  return (
    <>
    <div className='Items' id='items'>
      <button className={active === "all" && "active"} onClick={()=>{setFilter(data),setActive("all")}}>All</button>
      <button className={active === "men's clothing" && "active"} onClick={() =>{handleProduct("men's clothing"),setActive("men's clothing")}}>Men's clothing</button>
      <button className={active === "women's clothing" && "active"} onClick={() =>{handleProduct("women's clothing"),setActive("women's clothing")}}>Women's clothing</button>
      <button className={active === "jewelery" && "active"} onClick={()=>{handleProduct("jewelery"),setActive("jewelery")}}>Jewellery</button>
      <button className={active === "electronics" && "active"} onClick={()=>{handleProduct("electronics"),setActive("electronics")}}>Electronics</button>
    </div>
    
    <div className="cart" >
    {
        filter.map((Products) => {
            return(
                    <div className="items-box" key={Products.id}>
                        <img src={Products.image} alt={Products.title}/>
                        <div className="items-box-text">
                            <h3>{Products.title}</h3>
                            <span>${Products.price}</span>
                        </div>
                        <button>
                            <Link to={`${Products.id}`}>Buy now</Link>
                        </button>
                    </div>
            )
        })
      }
      </div>
      {/* <Offer filter={filter}/> */}
  
  </>
  )
}

export default Showproducts;
