import { useState, useEffect } from "react"
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
export default function Product ({title, image, unitPrice, setCart, cart, id, clickHandler}) {
    const [imageURL, setImageURL] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(1)
    const[button, setButton] = useState(true)
    
    const toggleButton = () => {
        setButton(!button)
     
    }
    const increment = () => {
       setAmount(amount + 1)
  
    }
    const decrement = () => {
        setAmount(amount - 1)
     }
     
    const returnProductData = (e) => {
        //filter to check if item is already in cart
      if(cart.map((item) => item.id).includes(id)) {
        return(alert('this item is already in the cart!'))
      }
        setCart([...cart,{title, image, listPrice, amount, id}])
        console.log(cart);
    }
    
    const listPrice = unitPrice * amount
     
    return(
       (  
            <div className="product" id={id}>
                <img src={image} />
                <h3>{title}</h3>
               <AddButton 
               listPrice={listPrice.toFixed(2)} 
               decrement={decrement} 
               amount={amount} 
               increment={increment} 
               clickHandler={returnProductData}/>
              
            </div>
         
           )
       
    )
}