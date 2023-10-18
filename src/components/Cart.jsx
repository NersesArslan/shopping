import { useState } from "react"
import Product from "./Product"
export default function Cart({cart}) {
  
   
    return(
       <div>
        {cart.map((item) => {
            return(
                <Product unitPrice={item.price} image={item.image} title={item.title} key={item.id}/>
            )
        })}
       </div>
    )
}