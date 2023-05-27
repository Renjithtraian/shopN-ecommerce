import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Cart = () => {
  const {state,dispatch} = useContext(AppContext)
  console.log("state",state);

  const handleRemove = (itemId) => {
    dispatch({
      type:"REMOVE",
      payload:itemId,
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
                <td><input type='number' value="1"/></td>
                <td>$999</td>
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
