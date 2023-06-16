import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useFetcher } from 'react-router-dom'

const Cart = () => {

  const {state,dispatch} = useContext(AppContext)
  console.log("state",state);

  const handleRemove = (itemId) => {
    dispatch({
      type:"REMOVE",
      payload:itemId,
    })
  }

  const handleQuantity = (e,id) => {
    const updateCartItems = state.cartItems.map((item) => {
      if(item.id === id){
        return {...item,quantity:parseInt(e.target.value)}
      }
      return item
    })
    dispatch({
      type:"UPDATE_QTY",
      payload:updateCartItems,
    })
  }

  

  return (

    <>
    <div className="cart-container cart-page">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {
          state.cartItems.map((Items) => {
            console.log("items",Items);
            return(
              <tr>
                <td>
                  <div className="cart-info">
                    <img src={Items.image} alt="" />
                  <div>
                    <p>{Items.title}</p>
                    <small>${Items.price}</small>
                    <br />
                    <button onClick={() => handleRemove(Items.id)}>Remove</button>
                    <button>Buy now</button>
                  </div>
                  </div>
                </td>
                <td><input min="1" type='number' value={Items.quantity} onChange={(e) => handleQuantity(e,Items.id)}/></td>
                <td>${Items.price * Items.quantity}</td>
              </tr>
            )
          })
        }
      </table>
      {/* <div className="total-price">
      <table>
        <tr>
          <td>Subtotal</td>
          <td>$200</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>$25.99</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$990</td>
        </tr>
      </table>
      </div> */}
    </div>
    </>
  )
}

export default Cart
