import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Items = ({items}) => {
  console.log("items",items);

  const {state,dispatch} = useContext(AppContext)

  let cartAdded = state.cartItems.some(item => item.id === items.id) 

    const handleCart = () => {
      cartAdded ?  dispatch({
        type:"EXISTING",
        payload:items,
      })
      :
        dispatch({
          type:"ADD_TO_CART",
          payload:items,
        })
    }

  return (
    
    <div className="details-container">
    <img src={items.image} alt={items.title}/>
            <div className="details-container-text">
                <h1>{items.category}</h1>
                <h3>{items.title}</h3>
                <p>{items.description}</p>
                <h4>${items.price}</h4>
                    <button onClick={handleCart}>Add to Cart</button>
                    <button>Buy now</button>
            </div>
            
</div>
  )
}

export default Items
