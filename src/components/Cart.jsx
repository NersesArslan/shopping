import { useState } from "react"
import Product from "./Product"
import Card from "./Card"
export default function Cart({cart, setCart}) {
  function clear() {
    setCart([])
  }
  const total = (cart.length) ? cart.map((item) => item.listPrice).reduce((a, b) => a + b) : 0

    return(
       <div className="cart">
        {cart.map((item) => {
            return(
                <Card image={item.image} title={item.title} price={item.listPrice} amount={item.amount} id={item.id} key={item.id} cart={cart} setCart={setCart}/>
            )
        })}

        {/* <button onClick={clear}>Empty Cart</button> */}
       
       <h2>Total: ${total}</h2>
       <button>Checkout</button>
       </div>
    )
}