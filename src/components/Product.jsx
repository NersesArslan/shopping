import { useState, useEffect } from "react"


export default function Product ({title, image, unitPrice}) {
    const [imageURL, setImageURL] = useState(null)
   

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(1)

    const increment = () => {
       setAmount(amount + 1)
  
    }
    const decrement = () => {
        setAmount(amount - 1)
     }


    const addToCart = () => {
        //magic code that will add item to cart!
        alert({title})
    }
    const listPrice = unitPrice * amount

     
    return(
       (  
            <div className="card" >
                <img src={image} />
                <h3>{title}</h3>
                <p>Price: ${listPrice.toFixed(2)}</p>
                <label htmlFor="">Amount</label>
                
                <div className="input-amount">
                    <button onClick={decrement}>-</button>
                    <input type="number" value={amount} onChange={(event)=>setAmount(parseInt(event.target.value))} name="" id="" />
                    <button onClick={increment}>+</button>
                </div>
                <button onClick={addToCart}>Add to Cart</button>
              
            </div>
         
           )
       
    )
}