import { useState } from "react"
import Product from "./Product"
import Card from "./Card"
export default function Cart({cart}) {
  
   
    return(
       <div className="cart">
        {cart.map((item) => {
            return(
                <Card image={item.image} title={item.title} price={item.listPrice} amount={item.amount} key={item.id}/>
            )
        })}
       </div>
    )
}